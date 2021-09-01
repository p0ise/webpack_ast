const parser = require("@babel/parser");
// 为parser提供模板引擎
const template = require("@babel/template").default;
// 遍历AST
const traverse = require("@babel/traverse").default;
// 操作节点，比如判断节点类型，生成新的节点等
const t = require("@babel/types");
// 将语法树转换为源代码
const generator = require("@babel/generator");
// 操作文件
const fs = require("fs");

//定义公共函数
function wtofile(path, flags, code) {
    var fd = fs.openSync(path,flags);
    fs.writeSync(fd, code);
    fs.closeSync(fd);
}

function dtofile(path) {
    fs.unlinkSync(path);
}

var loader_path = 'runtime.62249a5.js';
var jscode = fs.readFileSync(loader_path, {
    encoding: "utf-8"
});

// 转换为AST语法树
let loader_ast = parser.parse(jscode);
let loader_body = loader_ast.program.body[0].expression.argument.callee.body.body;
for (let i = 0; i < loader_body.length; i++){
    if (loader_body[i].type === 'VariableDeclaration'){
        loader_ast.program.body[0].expression.argument.callee.body.body.splice(i+3, (loader_body.length- i-3));
        loader_ast.program.body[0].expression.argument.callee.body.body.splice(0, i);
        break
    }
}



let code = generator.default(loader_ast, {
    compact: false,  // 压缩格式
    comments: false,  // 注释
    jsescOption: {
        minimal: false // 转义
    }
}).code;
wtofile('webpack_out.js', 'w', code);

// loader_ast.program.body[0].expression.argument.callee.body.body.forEach(function (item, index) {
//     console.log(item.type)
// });


