# オブジェクトとは
## オブジェクトは、"連想配列"である
`{}`: **オブジェクトリテラル** (式の一種)

`プロパティ名: 式`: オブジェクトリテラル中のプロパティの定義

`プロパティアクセス`: プロパティの値を得ること

`式.プロパティ名`: プロパティアクセスのやり方

`要素,`: 「要素,」のセットで書くことによって、Gitのようなバージョン管理システムで、余計な差分を発生させない(新しい要素を追加した時に前の要素の最後に`,`を追加するという差分が発生しない)というメリットがある。

```ts
const obj1 = {
  foo: 123,
  bar: "Hello, world!",
};

console.log(obj1.foo); // 123
console.log(obj1.bar); // "Hello, world!"

const name = input ? input : "名無し";
const user = {
  name,
  age: 20,
};

const propName = "foo";
const obj2 = {
  [propName]: 123,
};
console.log(obj2.foo);
```
## スプレッド構文
`...式`: 別のオブジェクトから、プロパティをコピー
```ts
const obj1 = {
  bar: 456,
  baz: 789,
}

const obj2 = {
  foo: 123,
  ...obj1,
};

console.log(obj2); // { foo: 123, bar: 456, baz: 789 }
```

## オブジェクトはいつ"同じ"なのか
**明示的にコピーしなければ同じであある**
fooとbarにオブジェクトAを代入し、どちからの変数からオブジェクトAのプロパティを変更した場合、どちらも同じなため適用されてしまう

**明示的にコピー**とは、スプレッド構文のようなもので
オブジェクトを変数にコピーすること

### コピーと代入を使い分けよう
```ts
const foo = { num: 1234 };
const bar = foo;
console.log(bar.num); // 1234
bar.num = 0;
console.log(foo.num); // 0
```

```ts
const foo = { num: 1234 };
const bar = { ...foo }; // { num: 1234 }
console.log(bar.num); // 1234
bar.num = 0;
console.log(foo.num); // 1234
```