let links = document.getElementsByClassName("nav-link");
console.log(links.length);

for(let i=0;i<links.length;i++){
        links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("link-active");
        
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" link-active", "");
        }
    
        // Add the active class to the current/clicked button
        this.className += " link-active";
      });
};

const addCourse = function() {
  document.getElementById("course-form").style.display="block";
  document.getElementById("form-container").style.display="flex";
};


window.onclick = function(event) {
  if (event.target == document.getElementById("course-form")) {
    document.getElementById("form-container").style.display="none";
    document.getElementById("course-form").style.display="none";
  }
}

const closeForm = function() {
  document.getElementById("course-form").style.display="none";
  document.getElementById("form-container").style.display="none";
};