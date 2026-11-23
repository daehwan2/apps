// 앱 목록. 새 앱은 맨 위에 한 덩어리 추가하고 icons/<id>.png (256x256) 를 넣으면 끝.
// type: "게임" 또는 "앱", color: 카드 색(아이콘 대표색).
// ios: 앱스토어 숫자 ID, android: 패키지 이름. 아직 없는 스토어는 "" 로 둔다.
window.APPS = [
  { id: "dino-sneak", type: "게임", color: "#2f7d76", name: "공룡 몰래 하기", desc: "공룡이 자는 동안만 살금살금! 60판 눈치 게임", ios: "6837283590", android: "" },
  { id: "crusoe-escape", type: "게임", color: "#f5b82e", name: "무인도 탈출기", desc: "카드를 뒤집어 살아남는 무인도 탈출 카드 게임", ios: "", android: "com.crusoeescape.game" },
  { id: "building-smash", type: "게임", color: "#e23d3d", name: "건물 부수기", desc: "떨어지는 건물을 칼 한 자루로! 60스테이지 액션", ios: "6836839953", android: "com.buildingsmash.game" },
  { id: "bomb-dodge", type: "게임", color: "#ff8a2b", name: "폭탄피하기", desc: "터지기 전에 피해라! 50스테이지 도전", ios: "6835925150", android: "com.bombdodge.game" },
  { id: "nemo-count", type: "게임", color: "#5b7083", name: "네모 세기", desc: "숫자 합 퍼즐", ios: "6836317802", android: "com.nemocount.game" },
  { id: "fruits-bell", type: "게임", color: "#ff4f86", name: "후르츠 벨", desc: "실시간 1대1 종치기 대결", ios: "6791893061", android: "com.haligali.app" },
  { id: "nyong", type: "앱", color: "#3fa9f5", name: "뇽뇽이", desc: "습관 만들기, 66일 챌린지", ios: "6664070484", android: "com.sixsixdaylaw" },
];

window.storeUrl = function (app, os) {
  if (os === "ios" && app.ios) return "https://apps.apple.com/kr/app/id" + app.ios;
  if (os === "android" && app.android) return "https://play.google.com/store/apps/details?id=" + app.android;
  return "";
};
window.detectOS = function () {
  var ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
  return "other";
};
