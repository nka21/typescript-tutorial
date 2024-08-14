# 文と式の違い
## 文
- 基本的に`;`で終わる
- 変数宣言など
- `const greeting = "Hello,";`

## 式
- 文の中にあるもの
- 文字列リテラルという種類の式 `"Hello"`

# constとlet
**極力constを使って変数を宣言すべき**
> constという機能があるにもかかわらずあえてletを使うということは、プログラムを読む人に対して「この変数
> はあとで再代入されますよ」という意思表示をしていることになります。
## const
- 再代入が不可能
```ts
const greeting = "Hello, ";
greeting = greeting + "world!";
// Error: Cannot assign to 'greeting' because it is a constant.
```

## let
- 再代入が可能
```ts
let greeting = "Hello, ";
greeting = greeting + "world!";
// "Hello, world!"が表示される
```
- 宣言時に値を代入しなくても良い
```ts
let greeting, target;
greeting = "Hello, ";
target = "world!";
console.log(greeting + target);
```