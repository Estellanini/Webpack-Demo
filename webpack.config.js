/*
 webpack.config.js webpack的配置文件
 作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
 所有的构建工具都是基于nodejs平台运行的，模块化默认采用commonjs模块
 src中的是项目的源代码，使用的是ES6模块
 */

//resolve用来拼接绝对路径的方法
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
