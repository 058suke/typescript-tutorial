# Variables

TypeScript特有の型を含む変数（定数）定義の書き方を取り上げる。  
また、おさらいとしてJavaScriptのデータ型についても一部取り上げる。

## 型定義（一部）
- JavaScriptのデータ型は8種類あり、2つに分類できる。
```
1. プリミティブ型
2. オブジェクト
```  

### 1. プリミティブ型

#### 特徴
- イミュータブル: 値を直接変更できない。
- プロパティを持たない
  - `null`、`undefined`にはプロパティがない。
  - `number`や`string`も同じプリミティブ型だが、autoboxingによってプリミティブ型をオブジェクトに自動変換することでプロパティを持つようになる。

```typescript
null.length; // エラー
undefined.length; // エラー
"string".length; // 6 
```

#### 種類
- string
- number
- boolean
- null
- undefined
- bigint
- symbol

```typescript
const a: string = 'hello!';
const b: number = 100;
const c: boolean = true;
```

### リテラル型
- TypeScriptのみ。
- プリミティブ型のうち、特定の数値/文字列/真偽値のみを代入できる型。
- 特定の1つの値だけを指定するよちも、ユニオン型（`|`区切り）と組み合わせて使うことが多い。

```typescript
// 特定の数値のみを代入できるリテラル型
let one: 1 = 1;   // 代入可能
let one: 1 = 100; // 数値だけど代入不可能。

// 特定の文字列のみを代入できるリテラル型
let string: "string" = "string"; // OK
let string: "string" = "String"; // NG

// 特定の真偽値のみを代入できるリテラル型
let isTrue: true = true;  // OK
let isTrue: true = false; // NG

// ユニオン型を使う
let mobileOS: "iOS" | "Android";
```


### 2. オブジェクト

#### 特徴
- プリミティブ型以外はすべてオブジェクト。
  - 配列、関数など。

#### オブジェクトリテラル
- `{}`で囲み、オブジェクトを定義する。
  - もちろん`new Object()`でも定義可能。
```typescript
// オブジェクトプロパティの型を定義
let book: {
  title: string;
  author: string;
  price: number
};

book = {
  title: "title",
  author: "author",
  price: 1000
}


// 関数を含むオブジェクト
const calc = {
  // 関数の定義は、下記どちらの書き方でもOK
  sum: function (a: number, b: number): number {
    return a + b;
  },
  multiple(a: number, b: number): number {
    return a * b;
  }
}
```


#### 配列
```typescript
// 配列の書き方は2パターンある。
let d: Array<number> = [1, 2, 3];
let e: number[] = [1, 2, 3];
```

### any型
- TypeScriptのみ。
- プリミティブ、オブジェクト関係なく、何の型でも代入可能な型。

```typescript
let anything: any;

// 以下すべてOK
anything = 1;
anything = "string";
anything = true;
anything = {
  title: "title",
  description: "none"
};
```

### 列挙型（enum）
- 列挙型名は型として扱うことができる。
```typescript
enum Kyushu {
  Fukuoka,
  Saga,
  Nagasaki,
  Kumamoto,
  Oita,
  Kagoshima,
  Miyazaki
}
let prefecture: Kyushu = Kyushu.Fukuoka;

```