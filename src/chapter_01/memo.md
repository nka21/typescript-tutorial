# tsconfig.json
```
"target": "es2020"
```
ES2020以下の構文のみ解釈可能 (デフォルトでは`es2016`)
デフォルトのままだと、`es2020`構文がトランスパイル　(JSの構文に戻る)　されてしまう

```
"module": "esnext"
```
Node.jsのverが、`ES Modules`を解釈できるため、それに合わせたオプション変更
指定しないと、その構文がトランスパイルされる。

```
"outDir": "./dist"
```
コンパイル先のディレクトリ指定
`/dist`は`.gitignore`に追加しよう。

```
"include": ["./src/**/*.ts"]
```
`/src`以下のすべての`.ts`ファイルがコンパイルの対象
`compilerOptions`の外に追加する必要があるため気を付ける