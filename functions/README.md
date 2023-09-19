# Functions

関数の書き方を取り上げる。

## JavaScriptでの基本構文
```typescript
// 1. 関数式
function func(引数) {
  // 処理の内容
};

// 2. 無名関数
const func = function () {
  // 処理の内容
};

// 3. アロー関数
const func = () => {
  // 処理の内容
}

// 4. 関数式（オブジェクトプロパティ）
const funcs = {
  func: function () {
    // 処理の内容
  }
};

func(); // 1〜3はこれで呼び出せる。
funcs.func(); // 4はこれで呼び出せる。
```


### TypeScriptで型注釈付きの関数を書く
```typescript
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
