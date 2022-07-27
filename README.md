## 📕 프로젝트 개요(Introduce Project)

### TS-Practice

* 예제로 TypeScript를 알아봅니다.

## 💡 타입 스크립트(TypeScript)?

* 타입스크립트(TypeScript)는 자바스크립트(JavaScript)의 확장 버전 입니다.
* 자바스크립트(JavaScript)와 달리 타입(Type)스크립트(Script) 이름 그대로 정적 타입을 명시할 수 있습니다.
* 동적 타입을 사용하는 자바스크립트(JavaScript)에서 발생할 수 있는 타입 에러들을 정적 타입 사용으로 미리 잡는 것이 타입스크립트(TypeScript)의 주된 목적입니다.
* 자바스크립트(JavaScript)
    * `"코드 어떻게든 실행시킬께~ 다만 문제가 없다는 건 보장할 수 없어..."`

* 타입스크립트(TypeScript)
    * `"이 부분 문제 있으니까 해결하고 실행할 할 수 있어 수정하면 이 부분은 문제 없이 실행할 수 있어!"`

### 기본 타입(Basic Type)

* 자바스크립트 기본 타입을 타입스크립트로 표현합니다.

```typescript
// 문자열 타입 : String Type.
const message: string = "Hello World";
// 숫자 타입 : Number Array Type.
const numbers: number[] = [1, 2, 3];
// 문자열 배열 타입 : String Array Type.
const messages: string[] = ["Hello", "World"];
// 논리 값 타입 : TureFalse boolean Type.
const TrueFalse: boolean = false;

// 조건문에서 OR 연산자를 '||' 으로 표현하는 것과 비슷합니다.
// Number Or Null Type.
let NumberOrNull: number | null = null;
// String Or Undefined Type.
let StringOrUndefined: string | undefined = undefined;
// Value Type.
let Energy: "Oil" | "Gas" | "Hydrogen" | "Atomic" | "Coal" | "Water";
```

### 함수 타입(Function Type)

* 자바스크립트 함수를 타입스크립트로 표현합니다.

```typescript
// function AnyFunc(매개 변수 : 타입) : number(반환 타입)
function Sum(x: number, y: number) : number{
  return x + y;
}

Sum(1, 2);

// 반환 타입이 없을 경우 void
function PrintSum(x: number, y: number): void {
  console.log(x + y);
}

PrintSum(1, 2);
```

### 제네릭(Generics)

* 여러 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.
* 선언 시 타입을 지정하지 않고 사용 시 타입을 지정합니다.

```typescript
function wrap<T>(param: T) {
  return {
    param,
  };
}

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

```

## 💻 개발 환경(Develop Environment)

### 세부 환경(Environment Detail)

||운영체제(OS)|언어(Language)|프레임워크(Framework)|비고(Remark)|
|-|:-:|:-:|:-:|:-:|
|명칭(Name)|![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white)|![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat-square&logo=TypeScript&logoColor=white)|||
|버전(Version)|`10, 11`|`4.7.4`|||

## 📖 비고(Remark)

* NPM(Node Package Manager) 초기화 : `npm init -y`
* 타입스크립트(TypeScript) 패키지 설치 : `npm i -g typescript`
* 타입스크립트 컴파일(Compile) :  `tsc`
* 타입스크립트 실행 : `node` [src/practice](./src/practice.ts)
