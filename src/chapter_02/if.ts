let userName = "nka21";

if (userName !== "") {
  console.log("ちゃんと名前があってえらい！");
} else {
  console.log("名前を入力してください！");
  userName = "名無し";
}

const num: number = 20;

if (num < 0) {
  console.log("numは負の数です");
} else if (num === 0) {
  console.log("numは0です");
} else {
  console.log("numは正の数です");
}
