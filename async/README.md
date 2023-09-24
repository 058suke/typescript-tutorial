# Asynchronous

- JavaScript/TypeScriptは、シングルプロセス、シングルスレッドで動作する。
  - プログラムが直列に処理される（上から下に、1つずつ順番に処理される）。
- チキンライス作りで非同期処理を考えてみる。

```text
# レシピ
1. 炊飯器でお米を炊く(15分)
2. 玉ねぎ、鶏肉を細かく切る
3. フライパンにバターを入れて温める(1分)
4. 玉ねぎを入れて焼く
5. 鶏肉を入れて焼く
6. ご飯を入れて混ぜる
7. コンソメとケチャップを入れて混ぜる 
```

## 同期処理の場合
レシピの1から順番に行うので、お米が炊けてから材料を切る。
※でも実際は時間の有効活用をしたいので、お米を炊いてる間に材料を切って焼くところまでやっておきたい。

## 非同期処理の場合
お米を炊いている間に、材料を切ったり焼いたりを進めておいて、炊き終わったらご飯を入れて混ぜるようにする。

### Promiseやasync/awaitがない時代の書き方

`setTimeout()`を使って書く。

```javascript
function cookRice() {
  console.log('お米を炊き始めました');
  setTimeout(() => {
    console.log('お米が炊けました');
  }, 900000); // 1000ms * 60sec * 15min
}

function cutOnionAndChicken() {
  console.log('玉ねぎ、鶏肉を細かく切りました');
  console.log('');
}

function heatFryingPanWithButter() {
  console.log('フライパンにバターを入れて温め始めました');
  setTimeout()
}
```
