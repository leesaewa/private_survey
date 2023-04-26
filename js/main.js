const Z_INDEX = "999";
const button = document.querySelectorAll(".button");
const sec1 = document.getElementById("section01");
const sec2 = document.getElementById("section02");
const sec3 = document.getElementById("section03");
const section = document.querySelectorAll("section");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("test");
    section.forEach((sec) => {
      sec.style.display = "block";
    });
  });
});

const testFunction = () => {
  alert("check");
};

const testBtn = document.querySelectorAll("[data-target]");
const prev = document.querySelectorAll(".prev");

testBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const test = document.querySelector(btn.dataset.target);

    if (test.style.zIndex == Z_INDEX) {
      test.style.zIndex = 0;
    } else {
      test.style.zIndex = Z_INDEX;
    }
  });
});

const checkNo = document.getElementById("meet_no");
const checkBtn = document.getElementById("test");
const sectionLast = document.getElementById("sectionLast");

checkBtn.addEventListener("click", () => {
  const isCheck = checkNo.checked;
  if (isCheck === true) {
    console.log("true");

    sectionLast.style.zIndex = Z_INDEX;
  }
});

//

const groupHandler = () => {
  const group = document.getElementById("group");
  const private = document.getElementById("private");
  const groupName = document.getElementById("group_name");
  const testButton = document.getElementById("testButton");

  group.addEventListener("click", () => {
    const isCheck = group.checked;
    if (isCheck === true) {
      console.log("success");
      groupName.required = true;
      groupName.style.display = "block";
      testButton.disabled = true;

      // if (groupName.value.length == 0) {
      //   alert("입력해주세요");
      //   console.log(groupName.value.length);
      // } else if (groupName.value.length == 20) {
      //   testButton.disabled = false;
      // }
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
groupHandler();
