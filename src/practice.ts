/* 기본(Basic Type) 타입 */
// 문자열 타입 : String Type.
const message: string = "Hello World";
console.log(message);

// Number Type.
let count = 1;

// Type Error.
// count += '1'

// 숫자 타입 : Number Array Type.
const numbers: number[] = [1, 2, 3];

// 문자열 배열 타입 : String Array Type.
const messages: string[] = ["Hello", "World"];

// 논리 값 타입 : TureFalse boolean Type.
const TrueFalse: boolean = false;

// 조건문에서 OR 연산자를 '||' 으로 표현하는 것과 비슷합니다.
// String Or Undefined Type.
let StringOrUndefined: string | undefined = undefined;

// Number Or Null Type.
let NumberOrNull: number | null = null;

// Value Type.
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

/* 클래스(Class) */
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

interface Person {
  name: string;
  // ? : Optional Field
  age?: number;
}

// 다른 언어와 마찬가지로 인터페이스가 인터페이스를 상속 받을 수 있습니다.
interface Developer extends Person {
  techs: string[];
}

const person: Person = {
  name: "김이나",
  age: 1,
};

const expert: Developer = {
  name: "김이나 개발자",
  techs: ["C#", "TypeScript"],
};

const people: Person[] = [person, expert];

/* Type Alias */
type Computer = {
  device: string;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// Interface extends 역할
type SmartPhone = Computer & {
  company: string;
  model: string;
};

const Galaxy: SmartPhone = {
  device: "SmartPhone",
  company: "Samsung",
  model: "Galaxy",
};

const iPhone: SmartPhone = {
  device: "SmartPhone",
  company: "Apple",
  model: "iPhone",
};

type Phone = Computer[];
const phone: Phone = [Galaxy, iPhone];

/* 제네릭(Generics) */
// 여러 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.
// any라는 타입이 있지만 모든 타입을 받아들이기 때문에 TypeScript를 사용하는 의미가 없습니다.

// 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있습니다.
function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

// Queue : 선입선출(First In First Out)
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  Enqueue(item: T) {
    this.list.push(item);
  }

  Dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.Enqueue(0);
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
queue.Enqueue(4);
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
