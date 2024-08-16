import { hasSubscribers } from "node:diagnostics_channel";

// コンパイルエラー 算術演算子には、numberやbigIntのような数値を渡さなければならない
const str: string = "123";
// console.log(str * 100);

// 変数の前に +単行演算子を扱うことで、stringからnumberへ
const str2: string = "123";
// console.log(+str2 * 100);

/*
  インクリメントとデクリメント
*/
console.log("後置インクリメント");
let foo = 10;
console.log(foo++); // 10
console.log(foo++); // 11

console.log("前置インクリメント");
let foo2 = 10;
console.log(++foo2); // 11
console.log(++foo2); // 12

console.log("後置デクリメント");
let foo3 = 10;
console.log(foo3--); // 10
console.log(foo3--); // 9

console.log("前置デクリメント");
let foo4 = 10;
console.log(--foo4); // 9
console.log(--foo4); // 8

/*
  可読性を上げるための、記述法
*/
let foo5 = 10;
foo5++;
console.log(foo5); // 11

/*
  データがないことを表現するときの区別の仕方
  || と ?? の使い分け
  ||: 空文字列や0、falseなども"ない"ものとして区別
  ??: nullまたはundefinedの時のみ"ない"ものとして区別
*/
const secret = process.env.SECRET ?? "default";
// SECRETにnullまたはundefinedの時のみ、"データがない"と判別
console.log(`secretは${secret}です`);
