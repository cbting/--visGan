import * as d3 from 'd3';
import * as echarts from 'echarts';

export function drawParallel(data) {
  var margin = { top: 50, right: 90, bottom: 20, left: 240 },
    width = 700 - margin.left - margin.right,
    height = 590 - margin.top - margin.bottom;

  var dimensions = [
    {
      name: 'bPre',
      scale: d3.scaleLinear().range([0, height]),
      type: Number,
    },
    {
      name: 'before',
      scale: d3.scaleLinear().range([0, height]),
      type: Number,
    },
    {
      name: 'after',
      scale: d3.scaleLinear().range([0, height]),
      type: Number,
    },
    {
      name: 'aPre',
      scale: d3.scaleLinear().range([0, height]),
      type: Number,
    },
  ];
  var x = d3
    .scaleBand()
    .domain(
      dimensions.map(function(d) {
        return d.name;
      })
    )
    .range([0, width]);

  var line = d3.line().defined(function(d) {
    return !isNaN(d[1]);
  });

  // var yAxis = d3.svg.axis().orient('left');
  var yAxis = d3.axisLeft();
  // var yAxis = d3.axisTop();

  var svg = d3
    .select('#vis-content-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var dimension = svg
    .selectAll('.dimension')
    .data(dimensions)
    .enter()
    .append('g')
    .attr('class', 'dimension')
    .attr('transform', function(d) {
      return 'translate(' + x(d.name) + ')';
    });

  dimensions.forEach(function(dimension) {
    dimension.scale.domain(
      dimension.type === Number
        ? d3.extent(data, function(d) {
            return +d[dimension.name];
          })
        : data
            .map(function(d) {
              return d[dimension.name];
            })
            .sort()
    );
  });

  let colors = [
    '#5470C6',
    '#91CC75',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3BA290',
    '#FC8452',
    '#9A60B4',
    '#EA7CCC',
    '#3070C6',
  ];

  svg
    .append('g')
    .attr('class', 'background')
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', draw);

  svg
    .append('g')
    .attr('class', 'foreground')
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', draw)
    .style('stroke', function(d) {
      console.log(colors[d.before]);
      return colors[d.before];
    });

  dimension
    .append('g')
    .attr('class', 'axis')
    .each(function(d) {
      d3.select(this).call(yAxis.scale(d.scale));
    })
    .append('text')
    .attr('class', 'title')
    .attr('text-anchor', 'middle')
    .attr('y', -9)
    .text(function(d) {
      return d.name;
    });

  // Rebind the axis data to simplify mouseover.
  svg
    .select('.axis')
    .selectAll('text:not(.title)')
    .attr('class', 'label')
    .data(data, function(d) {
      return d ? d.name : this.id;
      // return d.name || this.id;
    });

  var projection = svg
    .selectAll('.axis text,.background path,.foreground path')
    .on('mouseover', mouseover)
    .on('mouseout', mouseout);

  function mouseover(d) {
    svg.classed('active', true);
    projection.classed('inactive', function(p) {
      return p !== d;
    });
    projection
      .filter(function(p) {
        return p === d;
      })
      .each(moveToFront);
  }

  function mouseout(d) {
    svg.classed('active', false);
    projection.classed('inactive', false);
  }

  function moveToFront() {
    this.parentNode.appendChild(this);
  }
  // });

  function draw(d) {
    return line(
      dimensions.map(function(dimension) {
        return [x(dimension.name), dimension.scale(d[dimension.name])];
      })
    );
  }
}

export function drawParallel2(result) {
  let data = [];
  result.forEach(item => {
    let temp = [item.bPre, item.before, item.after, item.aPre];
    data.push(temp);
  });
  var chartDom = document.getElementById('vis-content-container');
  var myChart = echarts.init(chartDom);
  var option;

  var schema = [
    { name: '攻击前准确率', index: 1, text: 'Acc Before' },
    { name: '数字前', index: 2, text: 'Number' },
    { name: '数字后', index: 3, text: 'Attacked Number' },
    { name: '攻击后准确率', index: 4, text: 'Acc After' },
  ];

  var rawData = data;

  var option = {
    animation: true,
    brush: {
      brushLink: 'all',
      xAxisIndex: [],
      yAxisIndex: [],
      inBrush: {
        opacity: 1,
      },
    },
    toolbox: {
      left: 'right',
      top: 'top',
    },
    visualMap: {
      type: 'piecewise',
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      dimension: 1,
      orient: 'vertical',
      top: 80,
      left: 30,
      inRange: {
        color: [
          '#5470C6',
          '#91CC75',
          '#FAC858',
          '#EE6666',
          '#73C0DE',
          '#3BA290',
          '#FC8452',
          '#9A60B4',
          '#EA7CCC',
          '#3070C6',
        ],
        symbolSize: [0, 9],
      },
      outOfRange: {
        color: '#ddd',
      },
      // seriesIndex: [1]
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return (
          '攻击前：' +
          params.value[1] +
          '<br/>攻击后：' +
          params.value[2] +
          '<br/>攻击后置信度：' +
          (params.value[3] * 100).toFixed(2) +
          '%'
        );
      },
    },
    parallelAxis: [
      { dim: 0, name: schema[0].text },
      { dim: 1, name: schema[1].text },
      {
        dim: 2,
        name: schema[2].text,
        // type: 'category', data: ['优', '良', '轻度', '中度', '重度', '严重']
      },
      { dim: 3, name: schema[3].text },
    ],
    parallel: {
      top: '10%',
      left: '21%',
      height: '88%',
      width: '70%',
      parallelAxisDefault: {
        type: 'value',

        nameGap: 10,
        splitNumber: 8,
        nameTextStyle: {
          fontSize: 16,
        },
        axisLine: {
          lineStyle: {
            color: '#555',
          },
        },
        axisTick: {
          lineStyle: {
            color: '#555',
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: '#555',
        },
      },
    },
    grid: [],
    xAxis: [],
    yAxis: [],
    series: [
      {
        name: 'parallel',
        type: 'parallel',
        smooth: true,
        lineStyle: {
          width: 1,
          opacity: 0.3,
        },
        data: rawData,
      },
    ],
  };

  option && myChart.setOption(option);
}

export function drawScatter(result) {
  let data = [];
  // let adv = [],
  //   advres = [];
  for (let i = 0; i < 10; i++) {
    data[i] = [];
    // adv[i] = 0;
    // advres[i] = 0;
  }
  result.forEach(item => {
    let temp = [item.after, item.aPre];
    data[item.before].push(temp);
  });
  // console.log(data);

  // data.forEach((item, index) => {
  //   item.forEach(advItem => {
  //     if (advItem[0] != index) {
  //       adv[index]++;
  //       advres[index] += advItem[1];
  //     }
  //   });
  // });
  // console.log(advres);
  // console.log(adv);
  // let res = [];
  // for (let i = 0; i < 10; i++) {
  //   res.push(advres[i] / adv[i]);
  // }
  // console.log(res);

  var chartDom = document.getElementById('container');
  var myChart = echarts.init(chartDom);
  var option;

  var dataAll = data;

  option = {
    // title: {
    //   text: 'Adv Result',
    //   left: 'center',
    //   top: -10,
    //   size: 8,
    // },
    grid: [
      { left: '34%', top: '1%', width: '15%', height: '12%' },
      { right: '28%', top: '1%', width: '15%', height: '12%' },
      { left: '34%', top: '19%', width: '15%', height: '12%' },
      { right: '28%', top: '19%', width: '15%', height: '12%' },
      { left: '34%', top: '37%', width: '15%', height: '12%' },
      { right: '28%', top: '37%', width: '15%', height: '12%' },
      { left: '34%', top: '55%', width: '15%', height: '12%' },
      { right: '28%', top: '55%', width: '15%', height: '12%' },
      { left: '34%', top: '72%', width: '15%', height: '12%' },
      { right: '28%', top: '72%', width: '15%', height: '12%' },
    ],
    tooltip: {
      formatter: function(params) {
        // console.log(params);
        return (
          params.seriesName +
          ' 攻击后：' +
          params.value[0] +
          '<br/>攻击后置信度：' +
          (params.value[1] * 100).toFixed(2) +
          '%'
        );
      },
      // '数字 {a}: {c})',
    },
    xAxis: [
      { gridIndex: 0, min: 0, max: 9 },
      { gridIndex: 1, min: 0, max: 9 },
      { gridIndex: 2, min: 0, max: 9 },
      { gridIndex: 3, min: 0, max: 9 },
      { gridIndex: 4, min: 0, max: 9 },
      { gridIndex: 5, min: 0, max: 9 },
      { gridIndex: 6, min: 0, max: 9 },
      { gridIndex: 7, min: 0, max: 9 },
      { gridIndex: 8, min: 0, max: 9 },
      { gridIndex: 9, min: 0, max: 9 },
    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 1 },
      { gridIndex: 1, min: 0, max: 1 },
      { gridIndex: 2, min: 0, max: 1 },
      { gridIndex: 3, min: 0, max: 1 },
      { gridIndex: 4, min: 0, max: 1 },
      { gridIndex: 5, min: 0, max: 1 },
      { gridIndex: 6, min: 0, max: 1 },
      { gridIndex: 7, min: 0, max: 1 },
      { gridIndex: 8, min: 0, max: 1 },
      { gridIndex: 9, min: 0, max: 1 },
    ],
    series: [
      {
        name: '0',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0],
        // markLine: markLineOpt
      },
      {
        name: '1',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1],
        // markLine: markLineOpt
      },
      {
        name: '2',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataAll[2],
        // markLine: markLineOpt
      },
      {
        name: '3',
        type: 'scatter',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: dataAll[3],
        // markLine: markLineOpt
      },
      {
        name: '4',
        type: 'scatter',
        xAxisIndex: 4,
        yAxisIndex: 4,
        data: dataAll[4],
        // markLine: markLineOpt
      },
      {
        name: '5',
        type: 'scatter',
        xAxisIndex: 5,
        yAxisIndex: 5,
        data: dataAll[5],
      },
      {
        name: '6',
        type: 'scatter',
        xAxisIndex: 6,
        yAxisIndex: 6,
        data: dataAll[6],
      },
      {
        name: '7',
        type: 'scatter',
        xAxisIndex: 7,
        yAxisIndex: 7,
        data: dataAll[7],
      },
      {
        name: '8',
        type: 'scatter',
        xAxisIndex: 8,
        yAxisIndex: 8,
        data: dataAll[8],
      },
      {
        name: '9',
        type: 'scatter',
        xAxisIndex: 9,
        yAxisIndex: 9,
        data: dataAll[9],
      },
    ],
  };

  option && myChart.setOption(option);
}

export function example() {
  var width = 300; //画布的宽度
  var height = 300; //画布的高度
  let left = document.getElementById('left');
  console.log(left);
  var svg = d3
    .select('#left') //选择文档中的body元素
    .append('svg') //添加一个svg元素
    .attr('width', width) //设定宽度
    .attr('height', height); //设定高度

  var dataset = [250, 210, 170, 130, 90];

  var rectHeight = 25; //每个矩形所占的像素高度(包括空白)

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 40)
    .attr('y', function(d, i) {
      return i * rectHeight;
    })
    .attr('width', function(d, i) {
      if (i == 2) {
        return 20;
      }

      return d;
    })
    .attr('height', rectHeight - 2)
    .attr('fill', 'steelblue');
}
