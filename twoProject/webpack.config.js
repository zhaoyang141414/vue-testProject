var path = require('path')
var webpack = require('webpack')
const packagejson = require('./package.json')
// 打包后生成html文件，并插入指定的js和相关指定文件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main:'./src/main.js',
    vendor:Object.keys(packagejson.dependencies),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
    library:'window',
    // assetsPublicPath:'./' 
  },
  // externals:{
  //   configFile:'window'
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include:[
          'src/sass'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
         
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader'
      },
      {
        test:require.resolve('jquery'), //配置解决npm中的jquery
        loader: 'expose-loader?$!expose-loader?jQuery', // 先把jquery对象声明成为全局变量'jquery',再通过管道声明进一步为全局变量
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      // favicon: 'favicon.ico', // 在此处添加一行这个，用于webpack生成index.html时，自动把favicon.ico加入HTML中
      inject: true,  // 插入生成的script文件在文件body底部
      // chunks: ['main','test']
    }),
    // 将需要的配置文件直接从项目文件中拷贝到指定文件夹中
    new CopyWebpackPlugin([{
      from: './test.js',
      // to: './config'
    }]),
    new webpack.optimize.CommonsChunkPlugin({
      name:['vendor','runtime'],
      filename:'[name].js',
    }),
// 这段代码是抽离多个公用组件被用的common.js代码打包
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'common',
    //   filename:'[name].bundle.js',
    //   // minChunks:3 //公共代码的判断标准,某个js模块被多少chunk加载才算是公共代码 
    // }),
    // ProvidePlugin标识当webpack加载到某个jS模块里，那么webpack就会自动引入jquery
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:'jquery',
      'window.jQuery':'jquery',
      'window.$':'jquery',
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    open:true, // 自动打开浏览器
    historyApiFallback:{
      index:'/index.html'
    },
    // host:'', // 方便调试，既可以使用localhost访问，也可以使用本机ip地址访问
    hot:true, // 自动刷新修改的组件
    noInfo: true,
    // overlay: true, // webpack编译错误时显示在页面
    overlay:{
      error:true
    },
    inline:true, // 实时刷新
    port: 8000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.output.publicPath = './';
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
