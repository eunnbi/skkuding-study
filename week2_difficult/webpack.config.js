const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// nodejs에서 export 하는 방법
module.exports = {
  mode: "development",
  entry: "./src/app.js", // 번들링을 위해 필요한 최초 진입점
  output: {
    // 번들된 파일의 위치와 파일명 지정
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    // 다양한 유형의 모듈을 처리하는 방법 지정 (로더)
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            minify: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // css-loader로 css 파일 불러옴. style-loader로 style 태그를 만들어서 <head>에 넣어준다
      },
    ],
  },
  resolve: {
    extensions: [".js"], // js 파일 import 시 확장자 생략 가능
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
    }),
  ],
};
