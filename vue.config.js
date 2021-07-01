module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      },
    },
  },
  // devServer: {
  //   host: 'localhost',
  //   port: 8080, // 端口
  //   https: false,
  //   proxy: {
  //     '/api/*': {
  //       target: 'http://10.12.43.94:8089/phonecall/api', // 代理的接口域名以及端口号；
  //       ws: true, // 支持ws协议；websocket的缩写；
  //       changeOrigin: true, // 是否跨域
  //       // pathRewrite: {
  //       //   // 路径替换
  //       //   '^/api': '',
  //       // },
  //     },
  //   },
  // },
};
