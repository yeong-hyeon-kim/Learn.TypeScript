"use strict";
/* 기본(Basic Type) 타입 */
// String Type.
const message = "Hello World";
console.log(message);
// Number Type.
let count = 1;
// Type Error.
// count += '1'
// Number Array Type.
const numbers = [1, 2, 3];
// String Array Type.
const messages = ["Hello", "World"];
// String Or Undefined Type.
// 조건문에서 OR 연산자를 '||' 으로 표현하는 것과 비슷하다.
let StringOrUndefined = undefined;
// Number Or Null Type.
let NumberOrNull = null;
let Energy;
Energy = "Hydrogen";
// Type Error.
// Energy = "Fire";
/* 함수 타입(Function Type) */
// function AnyFunc(매개 변수 : 타입) : number(반환 타입)
function Sum(x, y) {
    return x + y;
}
Sum(1, 2);
// 반환 타입이 없을 경우 void
function PrintSum(x, y) {
    console.log(x + y);
}
function SumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = SumArray([1, 2, 3, 4, 5]);
console.log(total);
/* 클래스(Class) */
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(10), new Rectangle(15, 20)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: "김이나",
    age: 1,
};
const expert = {
    name: "김이나 개발자",
    techs: ["C#", "TypeScript"],
};
const people = [person, expert];
const Galaxy = {
    device: "SmartPhone",
    company: "Samsung",
    model: "Galaxy",
};
const iPhone = {
    device: "SmartPhone",
    company: "Apple",
    model: "iPhone",
};
const phone = [Galaxy, iPhone];
