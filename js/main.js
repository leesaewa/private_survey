const ACTIVE = "active";
const button = document.querySelectorAll("[data-target]");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dataLink = document.querySelector(btn.dataset.target);
    dataLink.classList.add(ACTIVE);

    noMeetHandler();
    groupHandler();
    reasonHandler();
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

//input text 입력했는지 체크

// group 체크했을 때 입력창 나타났다가 체크 해제하면 사라짐
const groupHandler = () => {
  const group = document.getElementById("group");
  const private = document.getElementById("private");
  const checkYes = document.querySelector(".check-yes");
  const groupBtn = document.getElementById("groupBtn");
  const groupName = document.getElementById("group_name");

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

// 그 날 밖에 안 된다에 체크했을 때 입력창 나타났다가 체크 해제하면 사라짐
const reasonHandler = () => {
  const dateNo = document.getElementById("date_no");
  const dateOk = document.getElementById("date_ok");
  const checkYes = document.querySelector(".date-yes");
  const dateBtn = document.getElementById("dateBtn");
  const dateReason = document.getElementById("date_reason");

  dateNo.addEventListener("click", () => {
    const isCheck = dateNo.checked;
    if (isCheck === true) {
      dateReason.required = true;
      checkYes.style.display = "block";
      dateBtn.disabled = true;

      dateReason.addEventListener("keyup", () => {
        if (!dateReason.value) {
          dateBtn.disabled = true;
        } else {
          dateBtn.disabled = false;
        }
      });
    }
  });

  dateOk.addEventListener("click", () => {
    const isCheck = dateOk.checked;
    if (isCheck === true) {
      dateReason.required = false;
      checkYes.style.display = "none";
      dateBtn.disabled = false;
    }
  });
};
