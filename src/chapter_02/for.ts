/*
  最も基本的なfor文の形
  for (let 変数名 = 初期化式; 条件式; 更新式) 文
*/
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 += i;
}
console.log(sum1);

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i); // 2,4,6,8...
}
