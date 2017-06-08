var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
alert("hello world in TypeScript");
//类型批注
function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + "cm squared.";
}
document.body.innerHTML = area("rectangle", 30, 15);
function areatwo(shape) {
    var areatwo = shape.width * shape.height;
    return "I'm " + shape.color + " " + shape.name + " width area " + areatwo + " cm squared";
}
console.log(areatwo({ name: 'rectangle', width: 40, height: 20 }));
console.log(areatwo({ name: 'square', width: 40, height: 40, color: "blue" }));
//箭头函数表达式（ lambda表达式 ）lambda表达式 [ ()=>{something} 或 ()=>something ] 相当于js中的函数，它的好处是可以自动将函数中的this,附加到下文中。
var shapetwo = {
    name: 'rectangle',
    popup: function () {
        console.log("this inside popup(): " + this.name);
        setTimeout(function () {
            console.log("this inside setTimeout():" + this.name);
            console.log("I'm a " + this.name + " !");
        }, 3000);
    }
};
//shapetwo.popup();
var shape3 = {
    name: 'square',
    popup: function () {
        var _this = this;
        console.log("this inside popup(): " + this.name);
        setTimeout(function () {
            console.log("this inside setTimeout(): " + _this.name);
            console.log("I'm a " + _this.name);
        }, 3000);
    }
};
//shape3.popup();
//类 TypeScript支持集成了可选的类型批注支持的ECMAScript6 的类
var ShapeA = (function () {
    function ShapeA(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.color = "pink";
    }
    ;
    ShapeA.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return ShapeA;
}());
var sq = new ShapeA('qq', 30, 30);
console.log("Area of Shape: " + sq.area);
console.log("Name of Shape: " + sq.name);
console.log("Color of Shape: " + sq.color);
console.log("Width of Shape: " + sq.width);
console.log("Height of Shape:" + sq.height);
//继承
var Shape3 = (function (_super) {
    __extends(Shape3, _super);
    function Shape3(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    ;
    Shape3.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3;
}(ShapeA));
var cube = new Shape3("cube", 40, 40, 40);
console.log(cube.shoutout());
console.log(cube.superShout());
//泛型 identity函数,这个函数会返回任何传入它的值，你可以把这个函数当成echo命令
//不用泛型
function identity(arg) {
    return arg;
}
//或
// function identity(arg:any):any{return arg} any类型可以接收任何类型的arg参数，但却丢失了一些信息：传入的类型与返回的类型是相同的，如果传入数字，我们只能知道任何类型的值都可能被返回
//因此我们需要一种方法使用返回值的类型与传入参数类型是相同的。所以使用类型变量，只是表示类型而不是值。
function identity1(arg) {
    return arg;
}
var output = identity1("myString"); // let output = identity1("myString");
console.log(typeof (output));
function loggingIdentity(arg) {
    //console.log(arg.length);
    return arg;
} //如果这么做，编译器会报错，没有地方指明arg有length这个属性。
function loggingIdentity1(arg) {
    console.log("arr\u7684length\u662F\uFF1A" + arg.length); //Array has a .length,so no more error 
    return arg;
}
var arr = loggingIdentity1([1, 2, 3]);
console.log(arr);
