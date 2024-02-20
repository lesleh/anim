import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const analyzeConfig = {
  plugins: [new BundleAnalyzerPlugin({})],
};

const nonAnalyzeConfig = {
  output: {
    module: true,
    chunkFormat: "module",
    chunkLoading: "import",
  },
};

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
  entry: "./src/index.tsx",
  output: {
    clean: true,
    // module: true,
    // chunkFormat: "module",
    // chunkLoading: "import",
  },
  experiments: {
    outputModule: true,
    css: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
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
    }),
  ],
};

export default merge(
  baseConfig,
  process.env.ANALYZE ? analyzeConfig : nonAnalyzeConfig,
);
