module.exports = {
  ...otherWebpackConfigs,
  module: {
    rules: [
      ...otherAssetsRules,
      // intercept images format
      {
        test: /\.(png|jp(e*)g)$/,
        use: [{
          loader: "url-loader",
          options: { ...loaderOptions  }
        }]
      },
      // intercept svg and use svgr to convert them to React Components
      {
        test: /\.svg/,
        use: ["@svgr/webpack"]
      },
    ],
  },
}