const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}, argv = {}) => {
  
  const isProd = argv.mode === 'production';

  const config = {
    mode: argv.mode || 'development', // we default to development when no 'mode' arg is passed
    entry: {
      react_admin: './js/react-admin.tsx'
    }, 
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../resources/admin'),
      publicPath: "/admin/"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        options: {
          hmr: ! isProd
        }
      })
    ],
    module:  {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProd ?  MiniCssExtractPlugin.loader : 'style-loader', 
            'css-loader' 
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
  
  if (! isProd) {
    config.devtool = 'eval-source-map';
    config.devServer = {
      index: '', // specify to enable root proxying
      contentBase: path.resolve(__dirname, '../resources/admin'),
      proxy: {
        context: () => true,
        target: 'https://localhost:5001',
        secure: false
      },
      hot: true
    }
  }

  return config;
};