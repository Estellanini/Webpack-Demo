/*
 webpack.config.js webpack的配置文件
 作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
 所有的构建工具都是基于nodejs平台运行的，模块化默认采用commonjs模块
 src中的是项目的源代码，使用的是ES6模块
 */

//resolve用来拼接绝对路径的方法
const {resolve}=require('path');
module.exports={
    //webpack配置
    //入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'main.js',
        //path输出路径
        //__dirname 是nodejs的变量，代表当前文件的目录路径
        path:resolve(__dirname,'build')
    },
    //loader的配置   loader帮我们去做一些翻译
    module:{
        rules:[
            //详细loader配置
            {
                //匹配哪些文件
                 test:/\.less$/,
                //使用哪些loader
                use:[
                    //use数组种loader执行顺序，从右到左，从下到上，依次执行
                    //创建style标签，将js中的样式资源插入进行，添加到head种生效
                    //npm i style-loader -D
                    'style-loader',
                    //将CSS文件变成commonjs模块加载到js种，里面内容是样式字符串
                    //npm i css-loader -D
                    'css-loader',
                    //npm i less-loader -D
                    'less-loader'
                ]

            }

        ]
    },
    //plugins的配置
    plugins:[
        //详细plugins的配置
    ],
    //模式
    mode:'development',//开发模式
    //mode:'production'


}
