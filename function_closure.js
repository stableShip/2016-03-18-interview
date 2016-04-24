// 考察对闭包的理解

var value1=0;
var value2=0;
var value3 = 0;

var v1 = 1;

for(var i = 0; i<3; i++){
    var v2 = i;
    (function(){
        setTimeout(function(){
            var v3 = i;
            value1 += v1;
            value2 += v2;
            value3 += v3;
        },1);
    }());
}
setTimeout(function(){
    console.log(value1,value2,value3);
},1000)

//最后会输出多少???? 先看清楚题,傻了吧,闭包,天,完全没碰过闭包,死了,
//猜一下会输出多少??? 3,3,undefined?? 3,3,3??? 3,6,6??? 
//完全不懂哦,死了吧
//尼玛,自己看一下闭包的知识
//http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
//文中说道",只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
//闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中" 尼玛记住哇
//然后你在看看上面的代码,还是不懂吧~~~~~~ 运行下面代码看看,前面的先注释啊~~~~
//记住,闭包能读取外部的
//

var value1=0;
var value2=0;
var value3 = 0;

var v1 = 1;

for(var i = 0; i<3; i++){
    var v2 = i;
        setTimeout(function(){
            console.log(value1,value2,value3);
            console.log(v1,v2,v3);
            var v3 = i;
            value1 += v1;
            value2 += v2;
            value3 += v3;
        },1);
}

setTimeout(function(){
    console.log(value1,value2,value3);
},1000)

//输出:
// 0 0 0
// 1 2 undefined
// 1 2 3
// 1 2 undefined
// 2 4 6
// 1 2 undefined
// 3 6 9


//再运行加闭包的

var value1=0;
var value2=0;
var value3 = 0;

var v1 = 1;

for(var i = 0; i<3; i++){
    var v2 = i;
        (function(){
            var v3 = i;
            setTimeout(function(){
                // var v3 = i;
                // console.log(value1,value2,value3);
                console.log(v1,v2,v3);
                value1 += v1;
                value2 += v2;
                value3 += v3;
            },1);
        }());
}
setTimeout(function(){
    console.log(value1,value2,value3);
},1000)

function test(){

}

test.prototype.method_name = function(first_argument) {
    // body...
};