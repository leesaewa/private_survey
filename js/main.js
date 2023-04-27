const ACTIVE = "active";
const button = document.querySelectorAll("[data-target]");
let value = "";

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dataLink = document.querySelector(btn.dataset.target);
    dataLink.classList.add(ACTIVE);

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
      sectionLast.classList.add(ACTIVE);
    }
  });
};

//

// group 체크했을 때 입력창 나타났다가 체크 해제하면 사라짐
const groupHandler = () => {
  const group = document.getElementById("group");
  const private = document.getElementById("private");
  const checkYes = document.querySelector(".check-yes");
  const groupName = document.getElementById("group_name");
  const groupBtn = document.getElementById("groupBtn");

  group.addEventListener("click", () => {
    const isCheck = group.checked;
    if (isCheck === true) {
      groupName.required = true;
      checkYes.style.display = "block";
      groupBtn.disabled = true;

      groupName.addEventListener("keyup", () => {
        if (!groupName.value) {
          groupBtn.disabled = true;
        } else {
          groupBtn.disabled = false;
        }
      });
    }
  });

  private.addEventListener("click", () => {
    const isCheck = private.checked;
    if (isCheck === true) {
      groupName.required = false;
      checkYes.style.display = "none";
      groupBtn.disabled = false;
    }
  });
};
