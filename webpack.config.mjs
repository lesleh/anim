import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/**
 * @type {import("webpack").Configuration}
 */
export default {
  entry: "./src/index.tsx",
  output: {
    clean: true,
    module: true,
    chunkFormat: "module",
    chunkLoading: "import",
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
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? "server" : "disabled",
    }),
  ],
};
