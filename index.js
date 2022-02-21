//Actions performed when "Enter Student Details" button is pressed.
document.querySelector(".btn").addEventListener("click", () => {
  document.getElementById("briefing").style.display = "none";
  document.getElementById("name").style.transitionDuration = "1s";
  document.getElementById("name").style.transform = "translateY(-120px)";
  setTimeout(() => {
    document.querySelector(".content").style.display = "inherit";
  }, 1000);
});

//Actions performed when "submit" button is pressed.
document.getElementById("submit").addEventListener("click", () => {
 
  //first name.
  let fname = document.getElementById("fname").value;
  fname = fname.charAt(0).toUpperCase() + fname.slice(1);
  
  //last name.
  let lname = document.getElementById("lname").value;
  lname = lname.charAt(0).toUpperCase() + lname.slice(1);
  
  //registration number.
  let reg = document.getElementById("reg").value.toUpperCase();
  
  //semester
  let sem = document.getElementById("inputSemester").value;
  
  //Stores the sum of marks*credit of each subject.
  let score = 0;
  
  //A temporary variable to check if marks in any field is out of bound or not
  let f=0;
  
  //contains all the marks entered.
  let marksarray = document.getElementsByClassName("marks");
  
  //contains all the credits entered.
  let creditsarray = document.getElementsByClassName("credit");
  
  //stores the sum of credits entered.
  let totalCredits = 0;
  
  for (let i = 0; i < marksarray.length; i++) {
    if (creditsarray[i].value != "Credit Point") {
     if (
        Number(marksarray[i].value) <= 100 &&
        Number(marksarray[i].value) >= 0
      ) {
        score =
          score +
          (Number(marksarray[i].value) / 10 + 1) *
            Number(creditsarray[i].value);
        totalCredits += Number(creditsarray[i].value);
      } else f = 1;
    }
  }
  
  //Stores final result.
  let result = 0;
  result = score / totalCredits ? (score / totalCredits).toFixed(2) : 0;
  
  //final logic to print the output.
  if (result != 0&&f==0) {
    let suffix = "th";
    if (sem == 1) suffix = "st";
    else if (sem == 2) suffix = "nd";
    else if (sem == 3) suffix = "rd";

    if (fname == "") alert("Please Enter First Name");
    else if (lname == "") alert("Please Enter Last Name");
    else if (reg == "") alert("Please enter registration number");
    else if (sem === "Choose Semester") alert("Please select semester");
    else {
      let remarks = "Well Done!";
      if (result < 4) remarks = "Try to improve your performance. Good luck!";
      else if (result < 5) remarks = "Good performance. Keep improving!";
      document.querySelector(
        "#GradePointResult h2"
      ).textContent = `${fname} ${lname}, ${reg} has got ${result} GPA in ${sem}${suffix} semester`;
      document.querySelector("#GradePointResult h3").textContent = remarks;
    }
  } else if (f == 1) {
    document.querySelector("#GradePointResult h2").textContent = "";
    document.querySelector("#GradePointResult h3").textContent = "";
    alert(
      "Marks entered in some subjects are beyond the range of 0 to 100. Rectify and try again."
    );
  } else {
    document.querySelector(
      "#GradePointResult h2"
    ).textContent = `No Data filled`;
  }
});
