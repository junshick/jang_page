// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// about 추가 구현 - 다른 소개 보기 버튼을 구현하여 다른 개인적인 취미도 설명할 수 있게 구현해놓았음!
const intros = [
  "안녕하세요! 게임을 좋아하는 초보 개발자 장준수입니다!",
  "RPG와 스토리 중심 게임을 좋아합니다.",
  "여가 시간에는 새로운 게임을 플레이하여 개발자들의 게임 제작 의도를 감상하는 것이 취미입니다",
  "기초 CS 지식을 바탕으로, 직접 게임을 만들어보고 싶은 개발자 지망생입니다."
];

let introIndex = 0;

function changeIntro() {
  introIndex = (introIndex + 1) % intros.length;
  document.getElementById("introText").textContent = intros[introIndex];
}