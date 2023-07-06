const path = require("path");
const common = require("./webapck.common.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(common, {
  entry: {
    main: "./src/index.js",
  },

  output: {
    filename: "./assets/js/[name].[contenthash:10].js",
  },
  mode: "production",
  optimization: {
    
    splitChunks: {
      chunks: "all",
      maxSize: Infinity,
      minSize: 0,
      cacheGroups: {
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial",
          priority: 10,
          enforce: true,
        },
        // style: {
        //   test: /_libs\.s?css$/,
        //   name: "vendors",
        //   enforce: true,
        // },
      },
    },
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
    usedExports: true,

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64]",
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].[contenthash:10].css",
    }),

    // new ZipPlugin({
    //   path: '../',
    //   filename: "dist.zip"
    // })
  ],
});
