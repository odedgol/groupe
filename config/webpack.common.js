const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')

const commonPaths = require('./common-paths');

const config = {
  context: commonPaths.context,
  entry: [
    'babel-polyfill',
    ...commonPaths.entryPoints,
  ],
  output: {
    filename: 'assets/js/[name].[hash:8].bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader',
      options: {
        failOnWarning: false,
        failOnError: true,
      },
      
    },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
      options: {
        esModule: false,
      },
    },

    // these rules handle styles
    {
      test: /\.css$/,
      use: ['style-loader', 
      { loader: MiniCssWebpackPlugin.loader, options: {
        esModule: false
      } }, 
        { loader: 'css-loader', 
        options: { 
          importLoaders: 1 } 
        }],
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        { loader: MiniCssWebpackPlugin.loader },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'sass-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [
        { loader: MiniCssWebpackPlugin.loader },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader',
      ],
    },

    // this rule handles images
    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[hash].[ext]',
        esModule: false
      },
    },

    // the following 3 rules handle font extraction
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff',
        name: 'assets/fonts/[name].[hash].[ext]',
      },
    },
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[hash].[ext]',
        esModule: false
      },
    },
    {
      test: /\.otf(\?.*)?$/,
      loader: 'file-loader',
      options: {
        mimetype: 'application/font-otf',
        name: 'assets/fonts/[name].[ext]',
        esModule: false
      },
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      app: commonPaths.sourcePath,
      'app-assets': path.resolve(__dirname, '../', 'static/'),
      '../../theme.config$': path.resolve(__dirname, '../', './theme/semantic-ui/theme.config'),
      heading: path.resolve(__dirname, '../', './semantic/heading.less'),
    },
    modules: [
      '.',
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: commonPaths.root,
    }),
  ],
};

module.exports = config;
