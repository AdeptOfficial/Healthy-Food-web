   const api_key = process.env.VUE_APP_EMAILJS_PUB_KEY;
   const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: 'index.js',
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: './template.html',

          // Pass the full url with the key!
          apiUrl: `${api_key}`,

        }),
      ]
    }