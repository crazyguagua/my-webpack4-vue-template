const webpack = require('webpack')
const util = require('./util')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader') //这一句必须要有

module.exports = {
    entry: ['babel-polyfill','./src/main.js'],
    output: {
        path: util.resolve('dist'), //输出路径，要用绝对路径
        filename: 'js/[name]-[hash].bundle.js', //打包之后输出的文件名
        chunkFilename: '[name].chunk.js' 
        // 公共文件生成的地址
    },
    resolve: {
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@':util.resolve('src'),
            filter: util.resolve('./src/filters'),
            '_c': util.resolve('./src/components'),
        },
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpe?g|bmp|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 1024,
                outputPath: "img",
                name: '[name].[hash:8].[ext]'
            }
            // 添加到这并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制可以name属性/[name].[ext]，会将我们的文件生成在设定的文件夹下。
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    publicPath: "./",
                    attrs: ['img:src']
                }
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            }
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader', 
                //感觉在.bablerc里面配置没用，只有在这里配置 dynamic-import-webpack 插件才不报错
                options: {//如果有这个设置则不用再添加.babelrc文件进行配置
                    "babelrc": false,// 不采用.babelrc的配置
                    "plugins": [
                        "dynamic-import-webpack"
                    ]
                }
            }]
        },]
    },
    plugins: [
        new webpack.BannerPlugin("这里是打包文件头部注释"),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        }),
        // new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin()//要有这个插件
    ]
}