const Z_INDEX = "999";

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

const section = document.querySelectorAll("section");

const testBtn = document.querySelectorAll("[data-target]");

testBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(btn.dataset.target).style.zIndex = Z_INDEX;
  });
});
