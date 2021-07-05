const model = {
  students : new Map([
    [ 1,    
    {
      name: "John Doe",
      id: 1,
      year: 1,
      branch: "CSE",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set(["CSE102", "CSE103"])
    }],
    [ 2,    
      {
        name: "John Doe",
        id: 2,
        year: 1,
        branch: "CSE",
        imgSrc: "./assets/images/head-659652_1280.png",
        courseTaken: new Set()
      }],
    [ 3,    
    {
      name: "John Doe",
      id: 3,
      year: 1,
      branch: "ME",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set(["ME103", "ME106"])
    }],
    [ 4,    
    {
      name: "John Doe",
      id: 4,
      year: 1,
      branch: "EE",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set()
    }],
    [ 5,    
    {
      name: "John Doe",
      id: 5,
      year: 1,
      branch: "ECE",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set()
    }],
    [ 6,    
    {
      name: "John Doe",
      id: 6,
      year: 1,
      branch: "CE",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set()
    }],
    [ 7,    
    {
      name: "John Doe",
      id: 7,
      year: 1,
      branch: "EE",
      imgSrc: "./assets/images/head-659652_1280.png",
      courseTaken: new Set()
    }],
  ]),
  courses: new Map([
    [ "CSE102"
      ,{
      name: "Operating Systems",
      prof: "John Doe",
      strength: 40,
      branch: "CSE",
      year: 1,
      code: "CSE102"
    }],
    ["CSE103",
    {
      name: "Database Management Systems",
      prof: "John Doe",
      strength: 20,
      branch: "CSE",
      year: 1,
      code: "CSE103"
    }],
    [ "CSE104",
      {
      name: "Computer Networks",
      prof: "John Doe",
      strength: 25,
      branch: "CSE",
      year: 1,
      code: "CSE104"
    }],
    [ "CSE105",
      {
      name: "Compiler Systems",
      prof: "John Doe",
      strength: 34,
      branch: "CSE",
      year: 1,
      code: "CSE105"
    }],
    ["CSE106",
    {
      name: "Artificial Intelligence",
      prof: "John Doe",
      strength: 36,
      branch: "CSE",
      year: 1,
      code: "CSE106"
    }],
    ["ME103",
    {
      name: "Fluid Mechanics",
      prof: "John Doe",
      strength: 41,
      branch: "ME",
      year: 1,
      code: "ME103"
    }],
    ["ME104",
    {
      name: "Solid Mechanics",
      prof: "John Doe",
      strength: 29,
      branch: "ME",
      year: 1,
      code: "ME104"
    }],
    ["ME106",
    {
      name: "Material Science",
      prof: "John Doe",
      strength: 22,
      branch: "ME",
      year: 1,
      code: "ME106"
    }],
    ["EE102",
    {
      name: "Control System Engineering",
      prof: "John Doe",
      strength: 21,
      branch: "EE",
      year: 1,
      code: "EE102"
    }],
    ["EE103",
    {
      name: "Rotating AC Machines",
      prof: "John Doe",
      strength: 15,
      branch: "EE",
      year: 1,
      code: "EE103"
    }],
    ["EE104",
    {
      name: "VLSI Technology and Design",
      prof: "John Doe",
      strength: 43,
      branch: "EE",
      year: 1,
      code: "EE104"
    }],
    ["ECE102",
    {
      name: "Semiconductors",
      prof: "John Doe",
      strength: 32,
      branch: "ECE",
      year: 1,
      code: "ECE102"
    }],
    ["ECE103",
    {
      name: "Electronics System",
      prof: "John Doe",
      strength: 26,
      branch: "ECE",
      year: 1,
      code: "ECE103"
    }],
    ["ECE104",
    {
      name: "Analog Communication",
      prof: "John Doe",
      strength: 19,
      branch: "ECE",
      year: 1,
      code: "ECE104"
    }],
    ["CE102",
    {
      name: "Waste Management",
      prof: "John Doe",
      strength: 31,
      branch: "CE",
      year: 1,
      code: "CE102"
    }],
    ["CE103",
    {
      name: "Transportation Engineering",
      prof: "John Doe",
      strength: 27,
      branch: "CE",
      year: 1,
      code: "CE103"
    }],
    ["CE104",
    {
      name: "Structural Analysis",
      prof: "John Doe",
      strength: 33,
      branch: "CE",
      year: 1,
      code: "CE104"
    }],
  ]),
  filter: {
    year: 0,
    branch: "0",
    sortValue: "0"
  },
  branchCourses: new Map([
    [
      "CSE", {
        "CSE102": "Operating Systems",
        "CSE103": "Database Management Systems",
        "CSE104": "Computer Networks",
        "CSE105": "Compiler Systems",
        "CSE106": "Artificial Intelligence",
      }
    ],
    [
      "ME", {
        "ME103": "Fluid Mechanics",
        "ME104": "Solid Mechanics",
        "ME106": "Material Science",
      }
    ],
    [
      "ECE", {
        "ECE102": "Semiconductors",
        "ECE103": "Electronics System",
        "ECE104": "Analog Communication",
      }
    ],
    [
      "EE", {
        "EE102": "Control System Engineering",
        "EE103": "Rotating AC Machines",
        "EE104": "VLSI Technology and Design",
      }
    ],
    [
      "CE", {
        "CE102": "Waste Management",
        "CE103": "Transportation Engineering",
        "CE104": "Structural Analysis",
      }
    ]
  ])
};

const controller = {

  getBranchAllCourses: function(course) {
    return model.branchCourses.get(course);
  },

  getStudents: function() {
    return Array.from(model.students.values());
  },

  getCourses: function() {
    return Array.from(model.courses.values());
  },
};

const studentView = {
  init: function() {
    this.studentContainer = document.getElementById("student-info");
    this.render();
  },

  getModifyCourseElement: function(student, courseCode, courseName) {
    const mainContainer = document.createElement("div");
    mainContainer.className = "modify-course-element-container";

    const infoElement = document.createElement("div");
    infoElement.className = "modify-course-info-element";

    const codeInfo = document.createElement("p");
    codeInfo.innerHTML = courseCode;

    const nameInfo = document.createElement("p");
    nameInfo.innerHTML = courseName;

    infoElement.append(codeInfo);
    infoElement.append(nameInfo);

    // add remove buttons

    const modifyButtonContainer = document.createElement("div");
    modifyButtonContainer.className = "modify-course-button-container";

    const addButton = document.createElement("button");
    addButton.className = "modify-course-button";
    addButton.innerHTML = '<i class="fa fa-plus-square"></i>';

    const removeButton = document.createElement("button");
    removeButton.className = "modify-course-button";
    removeButton.innerHTML = '<i class="fa fa-minus-square"></i>';
    
    if (student.courseTaken.has(courseCode)) {
      addButton.setAttribute("disabled", true);
      mainContainer.classList.add("taken-course");
      
      addButton.classList.add("taken-course-button");
      removeButton.classList.add("taken-course-button");
    } else {
      removeButton.setAttribute("disabled", true);
    }

    addButton.onclick = function() {
      removeButton.removeAttribute("disabled");
      this.setAttribute("disabled", true);
      mainContainer.classList.add("taken-course");
      
      addButton.classList.add("taken-course-button");
      removeButton.classList.add("taken-course-button");

      student.courseTaken.add(courseCode);
      
    }

    removeButton.onclick = function() {
      addButton.removeAttribute("disabled");
      this.setAttribute("disabled", true);
      mainContainer.classList.remove("taken-course");

      addButton.classList.remove("taken-course-button");
      removeButton.classList.remove("taken-course-button");

      student.courseTaken.delete(courseCode);
    }

    modifyButtonContainer.append(addButton);
    modifyButtonContainer.append(removeButton);

    mainContainer.append(infoElement);
    mainContainer.append(modifyButtonContainer);
    return mainContainer;
  },

  editCourse: function(event) {
    if(event.target.className !== "fa fa-edit") return;

    const curStudentElement = event.target.parentNode.parentNode;

    const curStudentID = curStudentElement.querySelector("#student-id");
    let idString = curStudentID.innerText.split(' ')[1];

    const curStudent = model.students.get(parseInt(idString));
    
    // //  pop-up form
    const backgroundElement = document.getElementById("modify-course-background")
    const containerElement = document.getElementById("modify-course-container")
    
    const resultContainer = containerElement.querySelector(".student-course-modify-container");
    resultContainer.innerHTML = '';
    
    const curBranch = curStudent.branch;
    const branchAllCourses = controller.getBranchAllCourses(curBranch);
    
    for (let courseCode in branchAllCourses){
      resultContainer.append(this.getModifyCourseElement(curStudent,courseCode,branchAllCourses[courseCode]));
    }

    backgroundElement.style.display = "block";
    containerElement.style.display = "flex";
    
    window.onclick = function(event) {
      if (event.target == backgroundElement) {
        containerElement.style.display="none";
        backgroundElement.style.display="none";
        return; 
      }
     }

    const closeElement = document.getElementById("modify-student-course-close");
    closeElement.onclick = function() {  
      backgroundElement.style.display="none";      
      containerElement.style.display="none";
    }
  },

  getCourseTakenElement : function(course){
    const listItem = document.createElement("li");
    listItem.innerHTML = course;
    listItem.className = "course-taken-item";
    return listItem;
  },
  
  getEmptyPlaceholderElement: function() {
    const noCoursePlaceholder = document.createElement("p");
    noCoursePlaceholder.innerHTML = "No Courses Taken!";
    noCoursePlaceholder.className = "no-course-taken";

    return noCoursePlaceholder;
  },

  viewCourse: function(event) {

    if(event.target.className !== "student-course-taken") return;

    const curStudentElement = event.target.parentNode;
    const curStudentID = curStudentElement.querySelector("#student-id");
    let idString = curStudentID.innerText.split(' ')[1];

    const curStudent = model.students.get(parseInt(idString));
    
    //  pop-up form
    const backgroundElement = document.getElementById("show-course-background")
    const containerElement = document.getElementById("show-course-container")
    
    const resultContainer = containerElement.querySelector(".student-course-container");
    resultContainer.innerHTML = '';
    
    if(curStudent.courseTaken.size == 0){
      resultContainer.append(this.getEmptyPlaceholderElement());
    }else {
      const resultListElement = document.createElement("ul");

      curStudent.courseTaken.forEach((course) => {
        resultListElement.append(this.getCourseTakenElement(course));
      });

      resultContainer.append(resultListElement);
    }

    backgroundElement.style.display = "block";
    containerElement.style.display = "flex";
    
    window.onclick = function(event) {
      if (event.target == backgroundElement) {
        containerElement.style.display="none";
        backgroundElement.style.display="none";
        return; 
      }
     }

    const closeElement = document.getElementById("student-course-close");
    closeElement.onclick = function() {  
      backgroundElement.style.display="none";      
      containerElement.style.display="none";
    }
 
  },
  
  getStudentElem: function(student) {
    const outerContainer = document.createElement("div");
    outerContainer.className = "student";

    const imgElement = document.createElement("img");
    imgElement.className = "student-img";
    imgElement.src = student.imgSrc;

    const detailElement = document.createElement("div");
    detailElement.className = "student-details";

    const studentName = document.createElement("p");
    studentName.className = "student-text";
    studentName.classList.add("student-name");
    studentName.innerHTML = student.name;

    const studentID = document.createElement("p");
    studentID.className = "student-text";
    studentID.id = "student-id";
    studentID.innerHTML = `<strong>ID: </strong> ${student.id}`;

    const studentYear = document.createElement("p");
    studentYear.className = "student-text";
    studentYear.innerHTML = `<strong>Year: </strong> ${student.year}`;
    
    const studentBranch = document.createElement("p");
    studentBranch.className = "student-text";
    studentBranch.innerHTML = `<strong>Branch: </strong> ${student.branch}`;

    detailElement.append(studentName);
    detailElement.append(studentID);
    detailElement.append(studentYear);
    detailElement.append(studentBranch);

    // courses taken
    const courseElement = document.createElement("button");
    courseElement.className = "student-course-taken";
    courseElement.innerHTML = "Courses Taken";

    const modifyCourseElement = document.createElement("a");
    modifyCourseElement.className = "modify-course-taken";
    modifyCourseElement.innerHTML = `<i class="fa fa-edit"></i>`; 

    outerContainer.append(imgElement);
    outerContainer.append(detailElement);
    outerContainer.append(courseElement);
    outerContainer.append(modifyCourseElement);

    return outerContainer;
  },

  render: function() {
    const students = controller.getStudents();
    this.studentContainer.innerHTML = '';
    
    for (student of students) {
      const curElement = this.getStudentElem(student);
      this.studentContainer.append(curElement);
    }
  }
};



const coursesView = {
  init: function() {
    this.courseContainer = document.getElementById("course-result-container");
    //this.courseAddBtn = document.getElementById("course-add-btn");
    this.render();
  },

  getCourseElem: function(course) {
    const outerContainer = document.createElement("div");
    outerContainer.className = "course";

    const courseNameElement = document.createElement("div");
    courseNameElement.className = "course-name";

    const courseName = document.createElement("h2");
    courseName.className = "course-heading";
    courseName.innerHTML = course.name;

    const courseProf = document.createElement("p");
    courseProf.className = "course-prof";
    courseProf.innerHTML = `<em> Taught by Prof. ${course.prof}</em>`;

    const courseMetaInfo = document.createElement("div");
    courseMetaInfo.className = "course-meta-info";
  
    const courseBranch = document.createElement("p");
    courseBranch.className = "course-branch";
    courseBranch.innerHTML = `Branch: ${course.branch}`;

    const courseYear = document.createElement("p");
    courseYear.className = "course-year";
    courseYear.innerHTML = `Year: ${course.year}`;

    const courseCode = document.createElement("p");
    courseCode.className = "course-code";
    courseCode.innerHTML = `Code: ${course.code}`;

    courseMetaInfo.append(courseCode);
    courseMetaInfo.append(courseBranch);
    courseMetaInfo.append(courseYear);

    courseNameElement.append(courseName);
    courseNameElement.append(courseProf);
    courseNameElement.append(courseMetaInfo);

    //strength element

    const courseStrengthElement = document.createElement("div");
    courseStrengthElement.className = "course-opted";

    const courseNumber = document.createElement("h2");
    courseNumber.className = "course-number";
    courseNumber.innerHTML = course.strength;

    const courseStrengthText = document.createElement("p");
    courseStrengthText.className = "course-num-info";
    courseStrengthText.innerHTML = "students opted this course.";

    courseStrengthElement.append(courseNumber);
    courseStrengthElement.append(courseStrengthText);

    // edit element

    const editElement = document.createElement("div");
    editElement.className = "course-edit";
    const editLink = document.createElement("button");
    editLink.className = "course-edit-btn";
    editLink.innerHTML = `<i class="fa fa-edit"></i>`; 

    editElement.append(editLink); 
    
    outerContainer.append(courseNameElement);
    outerContainer.append(courseStrengthElement);
    outerContainer.append(editElement);

    return outerContainer;
  },

  getEmptyPlaceholderElement: function() {
    const placeholderText = document.createElement("p");
    placeholderText.innerHTML = "No courses! Try other filters.";
    placeholderText.className = "placeholder-text";

    return placeholderText;
  },

  render: function() {
    const courses = controller.getCourses();
    this.courseContainer.innerHTML = '';

    this.modifyOrder(courses);

    const resCourses = courses.filter((course) => {
      return (((course.year == model.filter.year) || model.filter.year == 0)
      &&
      (((course.branch == model.filter.branch) || model.filter.branch == "0")));
    });
    
    if(resCourses.length == 0) {
      this.courseContainer.append(this.getEmptyPlaceholderElement());
      return;
    }

    for (course of resCourses) {
      const curElement = this.getCourseElem(course);      
      this.courseContainer.append(curElement);
    }
  },

  addCourse: function(event, callback) {
    //console.log(callback);
    const backgroundElement = document.getElementById("course-form")
    const formElement = document.forms.addCourse;

    backgroundElement.style.display = "block";
    formElement.style.display = "flex";
    
    window.onclick = function(event) {
      if (event.target == backgroundElement) {
        formElement.style.display="none";
        backgroundElement.style.display="none";

        return; 
      }
     }

    formElement.onsubmit = (event) => {
      event.preventDefault();
      let courseName = formElement.coursename.value;
      let courseBranch = formElement.branch.value;
      let courseYear = formElement.year.value;
      let courseCode = formElement.coursecode.value.toUpperCase();

      if(model.courses.get(courseCode)){
        alert("hii");
      }

      let newCourse = {       
        name: courseName,
        prof: "John Doe",
        strength: 0,
        branch: courseBranch,
        year: courseYear,
        code: courseCode
      };

      model.courses.set(courseCode,newCourse);
      
      formElement.style.display="none";
      backgroundElement.style.display="none";

      callback();
    };
  },

  editCourse: function(event, callback) {
    // getting current course
    if(event.target.className !== "fa fa-edit") return;
    const curCourseElement = event.target.parentNode.parentNode.parentNode;
  
    const curCourseCode = curCourseElement.querySelector(".course-code");
    let codeString = curCourseCode.innerText.split(' ')[1];
    
    const curCourse = model.courses.get(codeString);
  
    // pop-up form
    const backgroundElement = document.getElementById("edit-course-form")
    const formElement = document.forms.editCourse;
    
    formElement.coursename.value = curCourse.name;
    formElement.branch.value = curCourse.branch;
    formElement.year.value = curCourse.year;
    formElement.coursecode.value = curCourse.code;
  
    backgroundElement.style.display = "block";
    formElement.style.display = "flex";
    
    window.onclick = function(event) {
      if (event.target == backgroundElement) {
        formElement.style.display="none";
        backgroundElement.style.display="none";
        return; 
      }
     }
     formElement.onsubmit = (event) => {
      event.preventDefault();
      let courseName = formElement.coursename.value;
      let courseBranch = formElement.branch.value;
      let courseYear = formElement.year.value;
      let courseCode = formElement.coursecode.value.toUpperCase();
  
      let newCourse = {       
        name: courseName,
        prof: "John Doe",
        strength: curCourse.strength,
        branch: courseBranch,
        year: courseYear,
        code: courseCode
      };

      model.courses.set(courseCode,newCourse);
      
      formElement.style.display="none";
      backgroundElement.style.display="none";
  
      callback();
    };
  
  },

  modifyOrder: function(courses) {
    switch (model.filter.sortValue) {
      case "0":
        break;
      case "1":
        courses.sort((a,b) => {
          return (a.strength-b.strength);
        });
        break;
      case "-1":
        courses.sort((a,b) => {
          return (b.strength-a.strength);
        });
        break;
      default:
        break;
    }
  }
};

// for courses page

if(document.getElementById("course-add-btn")){
  
  //adding new course

  const courseAddBtn = document.getElementById("course-add-btn");
  courseAddBtn.addEventListener("click", () => {
    coursesView.addCourse(event, coursesView.render.bind(coursesView));
  });

  // course filters

  const courseYearFilter = document.forms.courseYearInput;
  const courseBranchFilter = document.forms.courseBranchInput;
  const courseSort = document.forms.courseSort;

  courseYearFilter.year.onchange = () => {
    model.filter.year = courseYearFilter.year.value;
    coursesView.render();
  }

  courseBranchFilter.branch.onchange = () => {
    model.filter.branch = courseBranchFilter.branch.value;
    coursesView.render();
  }

  courseSort.sort.onchange = () => {
    model.filter.sortValue = courseSort.sort.value;
    coursesView.render();
  }

  // update course 

  const coursesContainer = document.getElementById("course-result-container");
  coursesContainer.addEventListener("click", () => {
    coursesView.editCourse(event, coursesView.render.bind(coursesView));
  });
}

// for students page

if(document.getElementById("student-info")) {
  // course view
  const studentTakenCourse = document.getElementById("student-info");
  studentTakenCourse.addEventListener("click", studentView.viewCourse.bind(studentView));

  // edit course 
  const editTakenCourse = document.getElementById("student-info");
  editTakenCourse.addEventListener("click", studentView.editCourse.bind(studentView));

}