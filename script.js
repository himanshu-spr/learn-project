const model = {
  students : new Map([
    [ 1,    
    {
      name: "Himanshu",
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
      code: "CSE102",
      credits: 9
    }],
    ["CSE103",
    {
      name: "Database Management System",
      prof: "John Doe",
      strength: 20,
      branch: "CSE",
      year: 1,
      code: "CSE103",
      credits: 10
    }],
    [ "CSE104",
      {
      name: "Computer Networks",
      prof: "John Doe",
      strength: 25,
      branch: "CSE",
      year: 1,
      code: "CSE104",
      credits: 11
    }],
    [ "CSE105",
      {
      name: "Compiler Systems",
      prof: "John Doe",
      strength: 34,
      branch: "CSE",
      year: 1,
      code: "CSE105",
      credits: 13
    }],
    ["CSE106",
    {
      name: "Artificial Intelligence",
      prof: "John Doe",
      strength: 36,
      branch: "CSE",
      year: 1,
      code: "CSE106",
      credits: 10
    }],
    ["ME103",
    {
      name: "Fluid Mechanics",
      prof: "John Doe",
      strength: 41,
      branch: "ME",
      year: 1,
      code: "ME103",
      credits: 11
    }],
    ["ME104",
    {
      name: "Solid Mechanics",
      prof: "John Doe",
      strength: 29,
      branch: "ME",
      year: 1,
      code: "ME104",
      credits: 12
    }],
    ["ME106",
    {
      name: "Material Science",
      prof: "John Doe",
      strength: 22,
      branch: "ME",
      year: 1,
      code: "ME106",
      credits: 12
    }],
    ["EE102",
    {
      name: "Control System Engineering",
      prof: "John Doe",
      strength: 21,
      branch: "EE",
      year: 1,
      code: "EE102",
      credits: 10
    }],
    ["EE103",
    {
      name: "Rotating AC Machines",
      prof: "John Doe",
      strength: 15,
      branch: "EE",
      year: 1,
      code: "EE103",
      credits: 9
    }],
    ["EE104",
    {
      name: "VLSI Technology and Design",
      prof: "John Doe",
      strength: 43,
      branch: "EE",
      year: 1,
      code: "EE104",
      credits: 12
    }],
    ["ECE102",
    {
      name: "Semiconductors",
      prof: "John Doe",
      strength: 32,
      branch: "ECE",
      year: 1,
      code: "ECE102",
      credits: 10
    }],
    ["ECE103",
    {
      name: "Electronics System",
      prof: "John Doe",
      strength: 26,
      branch: "ECE",
      year: 1,
      code: "ECE103",
      credits: 10
    }],
    ["ECE104",
    {
      name: "Analog Communication",
      prof: "John Doe",
      strength: 19,
      branch: "ECE",
      year: 1,
      code: "ECE104",
      credits: 13
    }],
    ["CE102",
    {
      name: "Waste Management",
      prof: "John Doe",
      strength: 31,
      branch: "CE",
      year: 1,
      code: "CE102",
      credits: 12
    }],
    ["CE103",
    {
      name: "Transportation Engineering",
      prof: "John Doe",
      strength: 27,
      branch: "CE",
      year: 1,
      code: "CE103",
      credits: 10
    }],
    ["CE104",
    {
      name: "Structural Analysis",
      prof: "John Doe",
      strength: 33,
      branch: "CE",
      year: 1,
      code: "CE104",
      credits: 13
    }],
  ]),
  filter: {
    year: 0,
    branch: "0",
    sortValue: "0",
    gridView: true,
    searchString: ""
  },
  branchCourses: new Map([
    [
      "CSE", [
        "CSE102",
        "CSE103",
        "CSE104",
        "CSE105",
        "CSE106",
      ]
    ],
    [
      "ME", [
        "ME103",
        "ME104",
        "ME106",
      ]
    ],
    [
      "ECE", [
        "ECE102",
        "ECE103",
        "ECE104",
      ]
    ],
    [
      "EE", [
        "EE102",
        "EE103",
        "EE104",
      ]
    ],
    [
      "CE", [
        "CE102",
        "CE103",
        "CE104",
      ]
    ]
  ]),
  branchColor: {
    "CSE": "#fcbdbd",
    "ME": "#fcfa72",
    "ECE": "#9efa87",
    "EE": "#87faf8",
    "CE": "#fcbdfb"
  }
};

const controller = {
  init: function() {
    navBarView.initializeCountrySelect();
  },

  getCountries:  async function() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const resJSON = await res.json();
    
    const allCountries = resJSON.map((country) => {
      return country.name;
    });

    return allCountries;
  },

  getFilterYear: function() {
    return model.filter.year;
  },

  getFilterBranch: function() {
    return model.filter.branch;
  },

  getSearchString: function() {
    return model.filter.searchString;
  },

  getBranchAllCourses: function(course) {
    return model.branchCourses.get(course);
  },

  getBranchColor: function(code){
    return model.branchColor[code];
  },

  getCourseNameFromCode: function(code){
    return model.courses.get(code)['name'];
  },

  getCourseCredits: function(code){
    return model.courses.get(code)['credits'];
  },

  getCourseDetails: function(code) {
    return model.courses.get(code);
  },

  getStudents: function() {
    return Array.from(model.students.values());
  },

  getStudent: function(id){
    return model.students.get(id);
  },

  getCourses: function() {
    return Array.from(model.courses.values());
  },

  getView: function(){
    return (model.filter.gridView)? "grid" : "list";
  },

  setFilterYear: function(value) {
    model.filter.year = value;
  },
  
  setFilterBranch: function(value) {
    model.filter.branch = value;
  },
  
  setFilterSort: function(value) {
    model.filter.sortValue = value;
  },

  setToggleView: function(){
    model.filter.gridView = !model.filter.gridView;
  },

  setFilterSearchString: function(value) {
    model.filter.searchString = value;
  },

  addCourse: function(courseCode, newCourse){
    model.courses.set(courseCode,newCourse);
  },

  getSortValue: function(){
    return model.filter.sortValue;
  }
};

const navBarView = {
  initializeCountrySelect: async function(){
    const countryForm = document.forms.country;
    const countrySelectElement = countryForm.querySelector("#country");

    const allCountries = await controller.getCountries();
    const countriesOptionElements = allCountries.map((country) => {
      return (`<option value=${country}>${country}</option>`);
    });
    
    countrySelectElement.innerHTML = countriesOptionElements;
  }
}

const studentView = {
  init: function() {
    this.studentContainer = document.getElementById("student-info");
    this.render();
  },

  getModifyCourseElement: function(student, courseCode) {
    const mainContainer = document.createElement("div");
    mainContainer.className = "modify-course-element-container";

    const codeElement = document.createElement("div");
    codeElement.className = "modify-course-info-element bold";
    
    const codeInfo = document.createElement("p");
    codeInfo.innerHTML = courseCode;
    codeElement.append(codeInfo);

    const nameElement = document.createElement("div");
    nameElement.className = "modify-course-info-element bold";
    nameElement.classList.add("modify-course-info-name-element");

    const nameInfo = document.createElement("p");
    nameInfo.innerHTML = controller.getCourseNameFromCode(courseCode);
    nameElement.append(nameInfo);

    const creditElement = document.createElement("div");
    creditElement.className = "modify-course-info-element bold";

    const creditInfo = document.createElement("p");
    creditInfo.innerHTML = controller.getCourseCredits(courseCode);
    creditElement.append(creditInfo);

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

    // mainContainer.append(infoElement);
    mainContainer.append(codeElement);
    mainContainer.append(nameElement);
    mainContainer.append(creditElement);
    mainContainer.append(modifyButtonContainer);
    return mainContainer;
  },

  getHeaderRow: function() {
    const headerRowElement = document.createElement("div");
    headerRowElement.className = "modify-course-header-row";
    
    const codeText= document.createElement("p");
    codeText.innerHTML = "Code";

    const nameText = document.createElement("p");
    nameText.innerHTML = "Course Name";

    const creditText = document.createElement("p");
    creditText.innerHTML = "Credits";

    const modifyText = document.createElement("p");
    modifyText.innerHTML = "Modify selection";

    headerRowElement.append(codeText);
    headerRowElement.append(nameText);
    headerRowElement.append(creditText);
    headerRowElement.append(modifyText);

    return headerRowElement;
  },

  editCourse: function(event) {
    if(event.target.className !== "fa fa-edit") return;

    const curStudentElement = event.target.parentNode.parentNode;

    const curStudentID = curStudentElement.querySelector("#student-id");
    let idString = curStudentID.innerText.split(' ')[1];

    const curStudent = controller.getStudent(parseInt(idString));
    
    // //  pop-up form
    const backgroundElement = document.getElementById("modify-course-background")
    const containerElement = document.getElementById("modify-course-container")
    const heading = containerElement.querySelector(".modify-course-container-heading");

    heading.innerHTML = "Modify " + curStudent.name.split(" ")[0] + "'s Courses";

    const resultContainer = containerElement.querySelector(".student-course-modify-container");
    resultContainer.innerHTML = '';
    
    resultContainer.append(this.getHeaderRow());

    const curBranch = curStudent.branch;
    const branchAllCourses = controller.getBranchAllCourses(curBranch);
    
    branchAllCourses.forEach((courseCode) => {
      resultContainer.append(this.getModifyCourseElement(curStudent,courseCode));
    });

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

  getCourseTakenElement : function(courseCode){
    const mainContainer = document.createElement("div");
    mainContainer.className = "show-course-element-container bold";
   
    const codeInfo = document.createElement("p");
    codeInfo.innerHTML = courseCode;

    const nameInfo = document.createElement("p");
    nameInfo.innerHTML = controller.getCourseNameFromCode(courseCode);

    mainContainer.append(codeInfo);
    mainContainer.append(nameInfo);

    return mainContainer;
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

    const curStudent = controller.getStudent(parseInt(idString));
    
    //  pop-up form
    const backgroundElement = document.getElementById("show-course-background")
    const containerElement = document.getElementById("show-course-container")
    const heading = containerElement.querySelector(".show-course-container-heading");

    heading.innerHTML = curStudent.name.split(" ")[0] + "'s Courses";

    const resultContainer = containerElement.querySelector(".student-course-container");
    resultContainer.innerHTML = '';
    
    if(curStudent.courseTaken.size == 0){
      resultContainer.append(this.getEmptyPlaceholderElement());
    }else {
      curStudent.courseTaken.forEach((course) => {
        resultContainer.append(this.getCourseTakenElement(course));
      });
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
    studentName.classList.add("bold");
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

  getGridCourseElem: function(course) {
    const outerContainer = document.createElement("div");
    outerContainer.className = "course-grid";

    outerContainer.style.backgroundColor = controller.getBranchColor(course.branch);

    const courseNameElement = document.createElement("div");
    courseNameElement.className = "course-grid-name";

    const courseName = document.createElement("h2");
    courseName.className = "course-grid-heading bold";
    courseName.innerHTML = course.name;

    const courseNameTooltip = document.createElement("span");
    courseNameTooltip.className = "course-grid-name--tooltip";
    courseNameTooltip.innerHTML = course.name;
    
    const courseProf = document.createElement("p");
    courseProf.className = "course-grid-prof";
    courseProf.innerHTML = `<em> Taught by Prof. ${course.prof}</em>`;

    const courseMetaInfo = document.createElement("div");
    courseMetaInfo.className = "course-grid-meta-info";
  
    const courseBranch = document.createElement("p");
    courseBranch.className = "course-grid-branch";
    courseBranch.innerHTML = `Branch: ${course.branch}`;

    const courseYear = document.createElement("p");
    courseYear.className = "course-grid-year";
    courseYear.innerHTML = `Year: ${course.year}`;

    const courseCode = document.createElement("p");
    courseCode.className = "course-grid-code";
    courseCode.innerHTML = `Code: ${course.code}`;

    courseMetaInfo.append(courseCode);
    courseMetaInfo.append(courseBranch);
    courseMetaInfo.append(courseYear);

    courseNameElement.append(courseName);
    courseNameElement.append(courseNameTooltip);
    courseNameElement.append(courseProf);
    courseNameElement.append(courseMetaInfo);

    //strength element

    const courseStrengthElement = document.createElement("div");
    courseStrengthElement.className = "course-grid-opted";

    const courseNumber = document.createElement("h2");
    courseNumber.className = "course-grid-number bold";
    courseNumber.innerHTML = course.strength;

    const courseStrengthText = document.createElement("p");
    courseStrengthText.className = "course-grid-num-info";
    courseStrengthText.innerHTML = "students opted this course.";

    courseStrengthElement.append(courseNumber);
    courseStrengthElement.append(courseStrengthText);

    // edit element

    const editElement = document.createElement("div");
    editElement.className = "course-grid-edit";
    const editLink = document.createElement("button");
    editLink.className = "course-grid-edit-btn";
    editLink.innerHTML = `<i class="fa fa-edit"></i>`; 

    editElement.append(editLink); 
    
    outerContainer.append(courseNameElement);
    outerContainer.append(courseStrengthElement);
    outerContainer.append(editElement);

    courseName.onmouseover = function(){
      courseNameTooltip.style.display = "inline";
    }

    courseName.onmouseout = function(){
      courseNameTooltip.style.display = "none";
    }

    return outerContainer;
  },

  getListViewPropElement: function(prop, value) {
    const coursePropElement = document.createElement("div");
    coursePropElement.className = "course-list-prop";

    const courseProp = document.createElement("p");
    courseProp.innerHTML = value;

    if(prop == "code"){
      courseProp.className = "course-list-code";
    }

    coursePropElement.append(courseProp);

    if(prop == "name"){
      const courseNameTooltip = document.createElement("span");
      courseNameTooltip.className = "course-list-name--tooltip";
      courseNameTooltip.innerHTML = value;

      courseProp.onmouseover = function(){
        courseNameTooltip.style.display = "inline";
      }
  
      courseProp.onmouseout = function(){
        courseNameTooltip.style.display = "none";
      }

      coursePropElement.append(courseNameTooltip);
    }

    return coursePropElement;
  },

  getListHeaderRow: function() {
    const headerRowElement = document.createElement("div");
    headerRowElement.className = "course-list-header-row";
    
    const codeText= document.createElement("p");
    codeText.innerHTML = "Code";

    const nameText = document.createElement("p");
    nameText.innerHTML = "Course Name";

    const profText = document.createElement("p");
    profText.innerHTML = "Professor";

    const branchText = document.createElement("p");
    branchText.innerHTML = "Branch";

    const yearText = document.createElement("p");
    yearText.innerHTML = "Year";

    const strengthText = document.createElement("p");
    strengthText.innerHTML = "Strength";

    headerRowElement.append(codeText);
    headerRowElement.append(nameText);
    headerRowElement.append(profText);
    headerRowElement.append(branchText);
    headerRowElement.append(yearText);
    headerRowElement.append(strengthText);

    return headerRowElement;
  },

  getListCourseElem: function(course) {
    const outerContainer = document.createElement("div");
    outerContainer.className = "course-list bold";

    outerContainer.style.backgroundColor = controller.getBranchColor(course.branch);
    
    coursePropList = ['code', 'name', 'prof', 'branch', 'year', 'strength'];
    // code
    coursePropList.forEach((prop) =>  {
      const propElement = this.getListViewPropElement(prop,course[prop]);
      
      outerContainer.append(propElement);
    });

    // edit element

    const editElement = document.createElement("div");
    editElement.className = "course-list-edit";
    const editLink = document.createElement("button");
    editLink.className = "course-list-edit-btn";
    editLink.innerHTML = `<i class="fa fa-edit"></i>`; 

    editElement.append(editLink); 
    
    outerContainer.append(editElement);

    return outerContainer;
  },
  
  getEmptyPlaceholderElement: function() {
    const placeholderText = document.createElement("p");
    placeholderText.innerHTML = "No courses! Try other filters.";
    placeholderText.className = "placeholder-text bold";

    return placeholderText;
  },

  render: function() {
    const courses = controller.getCourses();
    this.courseContainer.innerHTML = '';

    this.modifyOrder(courses);
    
    let resCourses = courses.filter((course) => {
      const filterYear = controller.getFilterYear();
      const filterBranch = controller.getFilterBranch();

      return (((course.year == filterYear) || filterYear == 0)
      &&
      (((course.branch == filterBranch) || filterBranch == "0")));
    });

    // search value

    resCourses = resCourses.filter((course) => {
      const searchString = controller.getSearchString().toLowerCase();
      const curCourseName = course.name.toLowerCase();
      
      return curCourseName.includes(searchString);
    });
    
    if(resCourses.length == 0) {
      this.courseContainer.append(this.getEmptyPlaceholderElement());
      return;
    }

    if(controller.getView() == "list"){
      this.courseContainer.append(this.getListHeaderRow());
    }

    resCourses.forEach((course) =>  {
      let curElement = null;
      if(controller.getView() == "grid") {
        curElement = this.getGridCourseElem(course);      
      }else{
        curElement = this.getListCourseElem(course);      
      }
      this.courseContainer.append(curElement);
    });
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

      let newCourse = {       
        name: courseName,
        prof: "John Doe",
        strength: 0,
        branch: courseBranch,
        year: courseYear,
        code: courseCode
      };

      controller.addCourse(courseCode, newCourse);

      formElement.style.display="none";
      backgroundElement.style.display="none";

      callback();
    };
  },

  editCourse: function(event, callback) {
    // getting current course
    if(event.target.className !== "fa fa-edit") return;
    const curCourseElement = event.target.parentNode.parentNode.parentNode;
      
    let codeString = null;

    if(controller.getView() == "grid"){
      curCourseCode = curCourseElement.querySelector(".course-grid-code"); 
      codeString = curCourseCode.innerText.split(' ')[1];
    }else{
      curCourseCode = curCourseElement.querySelector(".course-list-code");
      codeString = curCourseCode.innerText;
    }

    const curCourse = controller.getCourseDetails(codeString);  
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

      controller.addCourse(courseCode, newCourse);
      
      formElement.style.display="none";
      backgroundElement.style.display="none";
  
      callback();
    };
  
  },

  modifyOrder: function(courses) {
    const sortValue = controller.getSortValue();

    switch (sortValue) {
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
  const courseView = document.forms.courseView;
  const courseSearch = document.forms.courseSearch;

  courseYearFilter.year.onchange = () => {
    controller.setFilterYear(courseYearFilter.year.value);
    coursesView.render();
  }

  courseBranchFilter.branch.onchange = () => {
    controller.setFilterBranch(courseBranchFilter.branch.value);
    coursesView.render();
  }

  courseSort.sort.onchange = () => {
    controller.setFilterSort(courseSort.sort.value);
    coursesView.render();
  }

  courseView.view.onchange = () => {
    controller.setToggleView();
    coursesView.render();
  }

  courseSearch.onsubmit = (e) => {
    e.preventDefault();
    controller.setFilterSearchString(courseSearch.search.value);
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

controller.init();
