## FizzBuzz問題 1~100
- 3の倍数でなく、5の倍数でもないときは整数をそのまま出力する。
- 3の倍数であり、5の倍数でないときは整数の代わりにFizzを出力する。
- 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する。
- 3の倍数であり、5の倍数でもあるときは整数の代わりにFizzBuzzを出力する

### 設計
配列に各要素を格納して、最後にどのように出力するのかを決める
1. 「3かつ5の倍数」の実装 (FizzBuzz)
2. 「3の倍数であり、5の倍数ではない」の実装 (Fizz)
3. 「5の倍数であり、3の倍数ではない」の実装 (Buzz)
4. 「どちらの倍数でもない」の実装 (数字をそのまま)