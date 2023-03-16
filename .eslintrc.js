module.exports = {
  extends: ['react-app'],
  // https://github.com/facebook/create-react-app/issues/12070
  "parserOptions": {
    "babelOptions": {
        "presets": [
           ["babel-preset-react-app", false],
           'babel-preset-react-app/prod'
        ]
    }
  }
}
