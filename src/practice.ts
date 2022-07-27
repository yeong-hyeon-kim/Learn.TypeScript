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
