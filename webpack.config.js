const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - pictures for pets',
      short_name: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#b1a',
      prefer_related_applications: false,
      icons: [
        {
          src: path.resolve('src/img/petgram.png'),
          sizes: [ 96, 128, 192, 256, 384, 512 ],
          destination: './assets/icons',
          ios: true,
        },
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com|petgram-server-24iykciv5.now.sh)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://petgram-server-24iykciv5.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env',
              [ '@babel/preset-react', { "runtime": "automatic" } ] ],
            // plugins: [ '@babel/plugin-transform-runtime', { regenerator: true } ],
          }
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },
}