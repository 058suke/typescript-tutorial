// これはエラーが起きる。
const a: Number = 1;
// const b: String = a;

// これはOK
const c: Number = 1;
const d: Number = c;

// 配列は2パターンの書き方がある。
let array1: Array<string> = ['apple', 'banana', 'peach'];
let array2: string[] = ['apple', 'banana', 'peach'];
let array3: string[] = [];
array3 = array2;
console.log(array3);