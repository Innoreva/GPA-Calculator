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
  
  //A temporary variable to check if credit is selected or not
  let g=0;
  
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
        Number(marksarray[i].value) > 0
      ) {
        score =
          score +
          (Math.floor((Number(marksarray[i].value) - 1) / 10) + 1) *
            Number(creditsarray[i].value);
        totalCredits += Number(creditsarray[i].value);
      } else f = 1;
    } else if (Number(marksarray[i].value) > 0) {
      g = 1;
    }
  }
  
  //Stores final result.
  let result = 0;
  result = score / totalCredits ? (score / totalCredits).toFixed(2) : 0;
  
  //final logic to print the output.
  if (result != 0&&f==0&&g==0) {
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
      if (result < 6) remarks = "Try to improve your performance. Good luck!";
      else if (result < 8) remarks = "Good performance. Keep improving!";
      document.querySelector(
        "#GradePointResult h2"
      ).textContent = `${fname} ${lname}, ${reg} has got ${result} GPA in ${sem}${suffix} semester`;
      document.querySelector("#GradePointResult h3").textContent = remarks;
    }
  } else if (f == 1) {
    document.querySelector("#GradePointResult h2").textContent = "";
    document.querySelector("#GradePointResult h3").textContent = "";
    alert(
      "Marks is either unfilled or beyond the range of 0 to 100 for some subjects. Rectify and try again."
    );
  } else if (g == 1) {
    document.querySelector("#GradePointResult h2").textContent = "";
    document.querySelector("#GradePointResult h3").textContent = "";
    alert(
      "Credit points have not been selected for some subjects. Rectify and try again."
    );
  } else {
    document.querySelector(
      "#GradePointResult h2"
    ).textContent = `No Data filled`;
  }
});

//Code for dark and light mode

if(localStorage.getItem('darkmode')===null){
  localStorage.setItem('darkmode',"false");
}

if(localStorage.getItem('darkmode')==="true"){
  document.querySelector("body").classList.remove("body2");
  document.querySelector("body").classList.add("body1");
 
  document.querySelectorAll("li a")[0].classList.add("a1");
  document.querySelectorAll("li a")[1].classList.add("a1");
  document.querySelectorAll("li a")[2].classList.add("a1");
  document.querySelectorAll("li a")[3].classList.add("a1");
  document.querySelectorAll("li a")[4].classList.add("a1");
  document.querySelectorAll("li a")[5].classList.add("a1");
  document.querySelectorAll("li a")[6].classList.add("a1");

  document.querySelector("#box1").classList.add("box1");
}

if(localStorage.getItem('darkmode')==="false"){
  document.querySelector("body").classList.remove("body1");
  document.querySelector("body").classList.add("body2");

  document.querySelectorAll("li a")[0].classList.remove("a1");
  document.querySelectorAll("li a")[1].classList.remove("a1");
  document.querySelectorAll("li a")[2].classList.remove("a1");
  document.querySelectorAll("li a")[3].classList.remove("a1");
  document.querySelectorAll("li a")[4].classList.remove("a1");
  document.querySelectorAll("li a")[5].classList.remove("a1");
  document.querySelectorAll("li a")[6].classList.remove("a1");

  document.querySelector("#box1").classList.remove("box1");

}


//Code for dark mode

  
  document.querySelector(".mode1").addEventListener("click", function(){
  document.querySelector("body").classList.remove("body2");
  document.querySelector("body").classList.add("body1");
 
  document.querySelectorAll("li a")[0].classList.add("a1");
  document.querySelectorAll("li a")[1].classList.add("a1");
  document.querySelectorAll("li a")[2].classList.add("a1");
  document.querySelectorAll("li a")[3].classList.add("a1");
  document.querySelectorAll("li a")[4].classList.add("a1");
  document.querySelectorAll("li a")[5].classList.add("a1");
  document.querySelectorAll("li a")[6].classList.add("a1");

  document.querySelector("#box1").classList.add("box1");

  localStorage.setItem('darkmode',"true");
  
 })


//Code for light mode



  document.querySelector(".mode2").addEventListener("click", function(){
  document.querySelector("body").classList.remove("body1");
  document.querySelector("body").classList.add("body2");

  document.querySelectorAll("li a")[0].classList.remove("a1");
  document.querySelectorAll("li a")[1].classList.remove("a1");
  document.querySelectorAll("li a")[2].classList.remove("a1");
  document.querySelectorAll("li a")[3].classList.remove("a1");
  document.querySelectorAll("li a")[4].classList.remove("a1");
  document.querySelectorAll("li a")[5].classList.remove("a1");
  document.querySelectorAll("li a")[6].classList.remove("a1");

  document.querySelector("#box1").classList.remove("box1");

  localStorage.setItem('darkmode',"false");
 })



