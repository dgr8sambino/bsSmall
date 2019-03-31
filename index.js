var resume;

var showSummary = true;
function toggleSummary() {
    showSummary = !showSummary;
    if (showSummary) {
      document.getElementById("summary").style.display = "block";
    } else {
      document.getElementById("summary").style.display = "none";
    }
}

var showEducation = true;
function toggleEducation() {
   showEducation = !showEducation;
   if (showEducation) {
     document.getElementById("education").style.display = "block";
   } else {
     document.getElementById("education").style.display = "none";
   }
}

var showExperience = true;
function toggleExperience() {
  showExperience = !showExperience;
  if (showExperience) {
    document.getElementById("experience").style.display = "block";
  } else {
    document.getElementById("experience").style.display = "none";
  }
}

var showSkills = true;
function toggleSkills() {
  showSkills = !showSkills;
  if (showSkills) {
    document.getElementById("skills").style.display = "block";
  } else {
    document.getElementById("skills").style.display = "none";
  }
}

function displayContactInfo() {
  document.getElementById("name").innerHTML = resume.name;
  document.getElementById("email").innerHTML = "<b>" + resume.email + "</b>";
  document.getElementById("phone").innerHTML = "<b>" + resume.phone + "</b>";
  document.getElementById("address").innerHTML = "<b>" + resume.address + "</b>";
}

function displaySummary() {
   let edu = document.getElementById('summary');
    edu.innerHTML =
        '<p class="summary">' + resume.sections[0].summText + '</p>'
      + '<br>';
}

 function displayEducation() {
   let edu = document.getElementById('education');

   edu.innerHTML =
       "<h3>" + resume.sections[1].school + "</h3>"
     + "<h4>" + resume.sections[1].major + "</h4>"
     + "<p>" + resume.sections[1].startEnd + "</p>"
     + "<p>" + resume.sections[1].gpa + "</p>"
     + "<h3>" + resume.sections[1].HSname + "</h3>"
     + "<h4>" + resume.sections[1].HSdegree + "</h4>"
     + "<p>" + resume.sections[1].HSstartEnd + "</p>"
     + "<p>" + resume.sections[1].HSgpa + "</p>"

     + "<br>";
}

function displayExperience() {
  let exp = document.getElementById("experience");
  let jobs = resume.sections[2].jobs;
  exp.innerHTML = "";
  for (let i=0; i<jobs.length; i++) {

    exp.innerHTML += '<h3 class="jrole">' + jobs[i].role + "</h3>";
    exp.innerHTML += "<h4>" + jobs[i].company + "</h4>";
    exp.innerHTML += "<p><i>" + jobs[i].startEnd + "</i></p>";
    exp.innerHTML += "<ul>";
    for (let j=0; j<jobs[i].tasks.length; j++) {
      exp.innerHTML += "<li>" + jobs[i].tasks[j] + "</li>";
    }
    exp.innerHTML += "</ul>";
  }

  exp.innerHTML += "<br>";
}

function displaySkills() {
   let edu = document.getElementById("skills");
   edu.innerHTML =
       "<li>" + resume.sections[3].sk1 + "</li>"
     + "<li>" + resume.sections[3].sk2 + "</li>"
     + "<li>" + resume.sections[3].sk3 + "</li>"
     + "<li>" + resume.sections[3].sk4 + "</li>"
     + "<li>" + resume.sections[3].sk5 + "</li>"

     + "<br>";
}

function displayFromJson() {
  displayContactInfo();
  displaySummary();
  displayEducation();
  displayExperience();
  displaySkills();

  $("#summaryHeading").click(toggleSummary);
  $("#educationHeading").click(toggleEducation);
  $("#experienceHeading").click(toggleExperience);
  $("#skillsHeading").click(toggleSkills);
}

$.getJSON("resume.json", function(data){
  console.log("it worked!");
  resume = data;
  displayFromJson();
});