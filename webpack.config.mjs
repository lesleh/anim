import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/**
 * @type {import("webpack").Configuration}
 */
const analyzeConfig = {
  plugins: [new BundleAnalyzerPlugin({})],
};

/**
 * @type {import("webpack").Configuration}
 */
const nonAnalyzeConfig = {
  output: {
    scriptType: "module",
    // chunkLoading: "import",
    // chunkFormat: "module",
  },
  experiments: {
    outputModule: true,
  },
};

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
  entry: "./src/index.tsx",
  output: {
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      scriptLoading: "module",
    }),
  ],
};

export default merge(
  baseConfig,
  process.env.ANALYZE ? analyzeConfig : nonAnalyzeConfig,
);
