let sum = 0;
let i = 1;

// 1から100までの合計を計算し、各ステップでの合計を表示
while (i <= 100) {
  sum += i;
  console.log(sum);
  i++;
}

// 無限ループを使用して、100を超えたらループを終了
i = 1; // 変数iを再初期化
while (true) {
  if (i > 100) {
    break;
  }
  sum += i;
  console.log(sum);
  i++;
}

// 1から100までの偶数を表示
i = 1; // 変数iを再初期化
while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
