var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    mode:'development',//'development'||'production'
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[//webpack所有插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
        ,
        new VueLoaderPlugin()
    ],
    module:{//配置所有第三方loader模块
        rules:[//第三方模块的匹配规则
            //css文件对应loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            //less文件对应loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //sass文件对应loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            /**
             * 图片文件对应loader，可以通过?拼接到loader后面传参
             * limit给定的值是图片的大小，单位是byte,如果我们引用的图片大于或等于给定的limit值，则图片路径不会被转换为BASE64格式的字符串
             * 如果小于这个给定的limit值，则图片路径转换为BASE64格式的字符串
             * name=[name].[ext]表示输出的文件名字和原始名字一样
             {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1000&name=[name].[ext]'}           
            */
           {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:[{
                    loader:'url-loader',
                    options:{
                        limit:1024,//只有当图片小于这个值的时候才会将图片路径转换为BASE64编码
                        name:"[name].[hash:8].[ext]",//将文件名字改为原名称.8位hash.原类型,避免出现图像被覆盖的问题
                        outputPath:"images"//设置打包后图片存放路径
                    }
                }]
            },
            /**处理bootstrap字体文件的loader*/
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:[{
                loader:'url-loader'
            }]},
            /**处理.vue文件的loader */
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{//配置 webpack 寻找模块的规则
        modules:['node_modules'],//寻找模块的根目录，array 类型，默认以 node_modules 为根目录
        extensions:['.js', '.json'],// 模块的后缀名
        alias:{// 模块别名配置，用于映射模块
            //设置Vue被导入时包的路径
            "vue$": "vue/dist/vue.esm.browser.min.js"
        }
    }
}