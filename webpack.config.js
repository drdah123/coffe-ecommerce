const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js',
    'js/productCarousel': './src/js/productCarousel.js',
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
    hot: false,
    port: 8081,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'rtlcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/[name][ext]',
        },
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/pages/product.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'distributors.html',
      template: './src/pages/distributors.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'contactUs.html',
      template: './src/pages/contactUs.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'components/navbar.html',
      template: './src/components/navbar.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'components/help.html',
      template: './src/components/help.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'components/carousel.html',
      template: './src/components/carousel.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'components/productCarousel.html',
      template: './src/components/productCarousel.html',
      chunks: ['js/productCarousel'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/navbar.html'),
      location: 'navbar',
      template_filename: [
        'index.html',
        'product.html',
        'distributors.html',
        'contactUs.html',
      ],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/help.html'),
      location: 'help',
      template_filename: [
        'index.html',
        'product.html',
        'distributors.html',
        'contactUs.html',
      ],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/carousel.html'),
      location: 'carousel',
      template_filename: ['index.html'],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/productCarousel.html'),
      location: 'productCarousel',
      template_filename: ['product.html'],
    }),
    new MiniCssExtractPlugin(),
    new CssMinimizerPlugin(),
  ],
};
