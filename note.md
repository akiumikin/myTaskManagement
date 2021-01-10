
npm i -D webpack webpack-cli typescript ts-loader
npm i -D clean-webpack-plugin
npm i -D autoprefixer
npm i -D postcss
npm i -D html-webpack-plugin
npm i -D html-loader

npm i -S react react-dom @types/react @types/react-dom

どのディレクトリでも動くように-gをつける（公式の推奨）
npm i -g typescript

package.jsonに追記
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
