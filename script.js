
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

let dashboard_button = document.getElementById("dashboard-button");
let user_button = document.getElementById("user-button");
let forms_button = document.getElementById("forms-button");
let powerbi_button = document.getElementById("powerbi-button");

dashboard_button.addEventListener("click", ()=>{

    document.getElementById("dashboard-section").style.display = "block";
    document.getElementById("user-section").style.display = "none";
    document.getElementById("forms-section").style.display = "none";
    document.getElementById("powerbi-section").style.display = "none";
});

user_button.addEventListener("click", ()=>{

    document.getElementById("dashboard-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    document.getElementById("forms-section").style.display = "none";
    document.getElementById("powerbi-section").style.display = "none";
});

forms_button.addEventListener("click", ()=>{

    document.getElementById("dashboard-section").style.display = "none";
    document.getElementById("user-section").style.display = "none";
    document.getElementById("forms-section").style.display = "block";
    document.getElementById("powerbi-section").style.display = "none";
});

powerbi_button.addEventListener("click", ()=>{

    document.getElementById("dashboard-section").style.display = "none";
    document.getElementById("user-section").style.display = "none";
    document.getElementById("forms-section").style.display = "none";
    document.getElementById("powerbi-section").style.display = "block";
});



closeBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

// Sideber hover class to keep item selected 
let list = document.querySelectorAll('.sidebar li a');
function activateLink(){
  list.forEach((item) =>
  item.classList.remove('clicked'));
  this.classList.add('clicked');
}
list.forEach((item) =>
item.addEventListener('click', activateLink));



// Load Bootcamp pages

// Technical Page Load Function
$(document).ready( function() {
  $("#technical-page").on("click", function() {
      $("#content").load("./pages/technical.html");
  });
});

// Consulting Page Load Function
$(document).ready( function() {
  $("#consulting-page").on("click", function() {
      $("#content").load("./pages/consulting.html");
  });
});

// MLOps Page Load Function
$(document).ready( function() {
  $("#mlops-page").on("click", function() {
      $("#content").load("./pages/mlops.html");
  });
});

// Data Engineering Page Load Function
$(document).ready( function() {
  $("#data_engineering-page").on("click", function() {
      $("#content").load("./pages/data_eng.html");
  });
});

// Side-bar Button/Page relationships

// Certification Page
$(document).ready( function() {
  $("#certification-button").on("click", function() {
      $("#content").load("./pages/certification_page.html");
  });
});

// Forms Page
$(document).ready( function() {
  $("#forms-button").on("click", function() {
      $("#content").load("./pages/forms_page.html");
  });
});

// Default on load page - Dashboard
$(document).ready( function() {
      $("#content").load("./pages/dashboard_page.html");
});

// Dashboard Page
$(document).ready( function() {
  $("#dashboard-button").on("click", function() {
      $("#content").load("./pages/dashboard_page.html");
  });
});

// Power BI Page
$(document).ready( function() {
  $("#powerbi-button").on("click", function() {
      $("#content").load("./pages/powerbi_page.html");
  });
});

// User Page
$(document).ready( function() {
  $("#user-button").on("click", function() {
      $("#content").load("./pages/user_page.html");
  });
});

// Help Page
$(document).ready( function() {
  $("#help-button").on("click", function() {
      $("#content").load("./pages/help_page.html");
  });
});

// FAQ Page
$(document).ready( function() {
  $("#faq-button").on("click", function() {
      $("#content").load("./pages/faq_page.html");
  });
});
