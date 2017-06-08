alert("hello world in TypeScript");

//类型批注
function area(shape:string,width:number,height:number){
	var area = width * height;
	return "I'm a " + shape + " with an area of " + area + "cm squared.";
}
document.body.innerHTML = area("rectangle",30,15);

//接口
interface Shape {
	name: string;
	width: number;
	height: number;
	color?: string;
}
function areatwo(shape:Shape){
	var areatwo = shape.width * shape.height ;
	return `I'm ${shape.color} ${shape.name} width area ${areatwo} cm squared`;
}

console.log(areatwo({name:'rectangle' , width:40 , height: 20}));

console.log(areatwo({name:'square' , width:40 , height: 40 ,color: "blue"}));

//箭头函数表达式（ lambda表达式 ）lambda表达式 [ ()=>{something} 或 ()=>something ] 相当于js中的函数，它的好处是可以自动将函数中的this,附加到下文中。
var shapetwo = {
	name:'rectangle',
	popup:function(){
		console.log(`this inside popup(): ${this.name}`);
		setTimeout(function(){
			console.log(`this inside setTimeout():${this.name}`);
			console.log(`I'm a ${this.name} !`)
		},3000);
	}
}
//shapetwo.popup();

var shape3 = {
	name:'square',
	popup:function(){
		console.log(`this inside popup(): ${this.name}`);
		setTimeout(()=>{
			console.log(`this inside setTimeout(): ${this.name}`);
			console.log(`I'm a ${ this.name }`)
		},3000)
	}
}
//shape3.popup();

//类 TypeScript支持集成了可选的类型批注支持的ECMAScript6 的类
class ShapeA {
	area: number ;
	private color: string ;
	constructor (public name:string,public width:number,public height:number){
		this.area = width * height ;
		this.color = "pink" ;
	};
	shoutout(){
		return `I'm ${this.color} ${this.name} with an area of ${this.area} cm squared.`;
	}
}
var sq = new ShapeA('qq',30,30);

console.log(`Area of Shape: ${ sq.area }`);
console.log(`Name of Shape: ${ sq.name }`);
console.log(`Color of Shape: ${ sq.color}`);
console.log(`Width of Shape: ${ sq.width}`);
console.log(`Height of Shape:${ sq.height}`);

//继承
class Shape3 extends ShapeA{
	volume: number;
	constructor( public name : string, width:number,height:number,length:number){
		super(name,width,height)
		this.volume = length * this.area;
	};
	shoutout(){
		return `I'm ${this.name} with a volume of ${this.volume} cm cube.`;
	}
	superShout(){
		return super.shoutout();
	}
}
var cube = new Shape3("cube",40,40,40);
console.log(cube.shoutout());
console.log(cube.superShout());

//泛型 identity函数,这个函数会返回任何传入它的值，你可以把这个函数当成echo命令
//不用泛型
function identity(arg:number):number{
	return arg;
}
//或
// function identity(arg:any):any{return arg} any类型可以接收任何类型的arg参数，但却丢失了一些信息：传入的类型与返回的类型是相同的，如果传入数字，我们只能知道任何类型的值都可能被返回
//因此我们需要一种方法使用返回值的类型与传入参数类型是相同的。所以使用类型变量，只是表示类型而不是值。
function identity1<T>(arg : T):T{
	return arg;
}

let output = identity1<string>("myString");  // let output = identity1("myString");
console.log(typeof(output));

function loggingIdentity<T>(arg : T):T{
	//console.log(arg.length);
	return arg;
} //如果这么做，编译器会报错，没有地方指明arg有length这个属性。

function loggingIdentity1<T>(arg:T[]):T[]{
	console.log(`arr的length是：${arg.length}`); //Array has a .length,so no more error 
	return arg;
}
let arr = loggingIdentity1([1,2,3])
console.log(arr);

//创建泛型接口  泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
function identity2<T>(arg:T):T{
	return arg;
}
let myIdentity : <U>(arg:U) => U = identity;