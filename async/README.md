# Asynchonous

- JavaScript/TypeScriptは、シングルプロセス、シングルスレッドで動作する。
  - プログラムが直列に処理される（上から下に、1つずつ順番に処理される）。
- チキンライス作りで非同期処理を考えてみる。

```text
# レシピ
1. 炊飯器でお米を炊く(15分)
2. 玉ねぎ、鶏肉を細かく切る
3. フライパンにバターを入れて温める
4. 玉ねぎを入れて焼く
5. 鶏肉を入れて焼く
6. ご飯を入れて混ぜる
7. コンソメとケチャップを入れて混ぜる 
```

### 同期処理の場合
レシピの1から順番に行うので、お米が炊けてから材料を切る。
※でも実際は時間の有効活用をしたいので、お米を炊いてる間に材料を切って焼くところまでやっておきたい。

### 非同期処理の場合
お米を炊いている間に、材料を切ったり焼いたりを進めておいて、炊き終わったらご飯を入れて混ぜるようにする。
