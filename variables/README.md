# Variables

## 型定義（一部）
### プリミティブ
- string
- number
- boolean

```javascript
const a: string = 'hello!';
const b: number = 100;
const c: boolean = true;
```

### 配列
```javascript
// 配列の書き方は2パターンある。
let d: Array<number> = [1, 2, 3];
let e: number[] = [1, 2, 3];
```

### 関数
```javascript
// 宣言
// 引数も戻り値も、型を定義できる。
function f1(x: string): number {
  return Number(x);
}

// 複数の引数を定義できる。
function f2(x: number, y: number): number {
  return x + y;
}

// オプションプロパティ（あってもなくてもよい任意のプロパティ）
// 下記の場合、y = undefinedとなり、number + undefinedで戻り値はNaNになる。
function f3(x: number, y?: number): number {
  return x + y;
}

// デフォルト値を指定できる
function f4(x: number, y: number = 0): number {
  return x + y;
}

// 可変長の引数も取れる
function f5(...nums: number[]): number => {
  return nums.reduce(function(sum, num){
    return sum + num;
  }, 0);
}

// 戻り値がない場合
function f6(x: number): void {
  console.log(x);
}
```