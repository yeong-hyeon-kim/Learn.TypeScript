/* 기본(Basic Type) 타입 */
// String Type.
const message: string = "Hello World";
console.log(message);

// Number Type.
let count = 1;

// Type Error.
// count += '1'

// Number Array Type.
const numbers: number[] = [1, 2, 3];

// String Array Type.
const messages: string[] = ["Hello", "World"];

// String Or Undefined Type.
// 조건문에서 OR 연산자를 '||' 으로 표현하는 것과 비슷하다.
let StringOrUndefined: string | undefined = undefined;

// Number Or Null Type.
let NumberOrNull: number | null = null;

let Energy: "Oil" | "Gas" | "Hydrogen" | "Atomic" | "Coal" | "Water";
Energy = "Hydrogen";

// Type Error.
// Energy = "Fire";

/* 함수 타입(Function Type) */

// function AnyFunc(매개 변수 : 타입) : number(반환 타입)
function Sum(x: number, y: number) {
  return x + y;
}

Sum(1, 2);

// 반환 타입이 없을 경우 void
function PrintSum(x: number, y: number): void {
  console.log(x + y);
}

function SumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = SumArray([1, 2, 3, 4, 5]);
console.log(total);

/* 인터페이스(Interface) */
interface Shape {
  // 인터페이스는 함수만 선언합니다.
  getArea(): number;
}

class Circle implements Shape {
  // implements 키워드를 사용하여 해당 클래스가 Shape Interface의 조건을 충족하겠다는 것을 명시합니다.
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(10), new Rectangle(15, 20)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
