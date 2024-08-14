// プリミティブ型

/*
文字列、数値、真偽値、BigInt、null、undefined、シンボル
*/

/*
リテラルとは、何らかの値を生み出すための式
数値リテラルとは、数値を現すためのリテラル
*/
const binary = 0b1010; // 2進数リテラル 先頭に0b
const octal = 0o755; // 8進数リテラル 先頭に0o
const hexadecimal = 0xff; // 16進数リテラル 先頭に0x

console.log(binary, octal, hexadecimal);

// 指数を表すリテラル
const big = 1e8; // 1x10^8
const small = 4e-5; // 1x10^-5

console.log(big, small);

// 数値リテラルは数字の間に"_"を挟むことができる
const million = 1_000_000; // e以外の表現方法

console.log(million);

/*
BigInt: ES2020から追加された
任意精度の整数を表すプリミティブ
任意精度とは、どれだけ大きな数でも誤差なく表すことができる
*/
const bignum: bigint = (123n + 456n) * 2n; // 整数の後にnが付く
console.log(bignum);

/*
BigIntは、整数しか扱えないため
除算の結果が小数になる（割り切れない）場合は整数に丸め
られる
*/
const result = 5n / 2n;
console.log(result);

// BigIntは、普通の整数と混ぜて使うことができない
// const wrong = 100n + 50;

/*
テンプレートリテラル
*/
const str1: string = "Hello";
const str2: string = "world!";
console.log(`${str1} ${str2}`);

console.log(`123 + 456 = ${123 + 456}`);

/*
真偽値リテラル
nullとundefined
「データがない」という状況
*/
const val1 = null;
const val2 = undefined;

console.log(val1, val2);

const n: null = null;
const u: undefined = undefined;

/*
プリミティブの変換
数値から文字列に変換
*/
import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("文字列を入力してください:", (line) => {
  // 文字列が入力されるとここが実行される
  const result = line + 1000;
  console.log(result);
  rl.close();
});

/*
プリミティブの変換
lineを文字列から数値に変換してから実行
*/
const rl2 = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl2.question("文字列を入力してください:", (line) => {
  // 文字列が入力されるとここが実行される
  const num = Number(line);
  const result = num + 1000;
  console.log(result);
  rl2.close();
});
