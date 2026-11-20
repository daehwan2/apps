// 앱 목록. 새 앱은 맨 위에 한 덩어리 추가하고 icons/<id>.png (256x256) 를 넣으면 끝.
// type: "게임" 또는 "앱", color: 카드 색(아이콘 대표색).
// ios: 앱스토어 숫자 ID, android: 패키지 이름. 아직 없는 스토어는 "" 로 둔다.
window.APPS = [
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
