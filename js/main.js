// const ACTIVE = "active";
// const button = document.querySelectorAll(".button");
// const sec1 = document.getElementById("section01");
// const sec2 = document.getElementById("section02");
// const sec3 = document.getElementById("section03");
// const section = document.querySelectorAll("section");
// const input = document.querySelectorAll("input");

// button.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("test");
//     section.forEach((sec) => {
//       sec.style.display = "block";
//     });
//   });
// });

const testBtn = document.querySelectorAll("[data-target]");

testBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const test = document.querySelector(btn.dataset.target);
    test.classList.add("active");

    noMeetHandler();
    groupHandler();
  });
});

// 안 만난다 체크했을 때 제일 마지막 섹션으로 이동함
const noMeetHandler = () => {
  const checkNo = document.getElementById("meet_no");
  const checkBtn = document.getElementById("noBtn");
  const sectionLast = document.getElementById("sectionLast");

  checkBtn.addEventListener("click", () => {
    const isCheck = checkNo.checked;
    if (isCheck === true) {
      console.log("true");
      sectionLast.style.zIndex = Z_INDEX;
    }
  });
};

//

// group 체크했을 때 입력창 나타났다가 체크 해제하면 사라짐
const groupHandler = () => {
  const group = document.getElementById("group");
  const private = document.getElementById("private");
  const groupName = document.getElementById("group_name");
  const testButton = document.getElementById("testButton");

  group.addEventListener("click", () => {
    const isCheck = group.checked;
    if (isCheck === true) {
      groupName.required = true;
      groupName.style.display = "block";
      testButton.disabled = true;
    }
  });

  private.addEventListener("click", () => {
    const isCheck = private.checked;
    if (isCheck === true) {
      groupName.required = false;
      groupName.style.display = "none";
      testButton.disabled = false;
    }
  });
};
