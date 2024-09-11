let englishMarks = document.querySelector(".English");
let urduMarks = document.querySelector(".Urdu");
let mathsMarks = document.querySelector(".Maths");
let Name = document.querySelector(".Name");
let callalert = () => {
  console.log("English Marks:", englishMarks.value);
  console.log("Urdu Marks", urduMarks.value);
  console.log("Maths Marks", mathsMarks.value);
  console.log(
    "percentage :",
    ((Number(englishMarks.value) +
      Number(urduMarks.value) +
      Number(mathsMarks.value)) /
      300) *
      100,
    "%"
  );
};
let calculateGrade = (percentage) => {};
