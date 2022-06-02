const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// console.log([tabActive]);

tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

/**============Tabs UI (Auto run) ============================= */
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");
// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");
// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.scrollWidth + "px";

// var isPause = false;
// var indexCurrent = 0;

// tabs.forEach((tab, index) => {
//   tab.onclick = function () {
//     active(index);
//     indexCurrent = index;
//   };
// });

// $(".tabs").onmouseover = function () {
//   isPause = true;
// };
// $(".tabs").onmouseout = function () {
//   isPause = false;
// };
// setInterval(function () {
//   // console.log("chay");
//   if (isPause === false) {
//     active(indexCurrent);
//     if (indexCurrent == tabs.length - 1) {
//       indexCurrent = 0;
//     } else {
//       indexCurrent++;
//     }
//   }
// }, 1000);

// function active(index) {
//   var pane = panes[index];
//   var tab = tabs[index];
//   $(".tab-item.active").classList.remove("active");
//   $(".tab-pane.active").classList.remove("active");
//   line.style.left = tabs[index].offsetLeft + "px";
//   line.style.width = tabs[index].scrollWidth + "px";
//   tab.classList.add("active");
//   pane.classList.add("active");
// }
