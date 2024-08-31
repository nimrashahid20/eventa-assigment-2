
// 1. Create a signup form and display form data in your web
// page on submission.

const form = document.getElementById('submission')

form.addEventListener('submit',function(event){
event.preventDefault();

const name =document.getElementById("name").value;
const email = document.getElementById('email').value;  
const password = document.getElementById("password").value;

document.getElementById("displayName").textContent = name;
document.getElementById("displayEmail").textContent = email;
document.getElementById("displayPassword").textContent = password;
            
document.getElementById('formData').style.display = 'block';
});      


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readmore(){
    const moretext = document.querySelector(".moretext")
    const btnText = document.querySelector("read-more-btn")
    if (moretext.style.display === "none") {
              moretext.style.display = "inline";
               btnText.textContent = "Read Less";
           } else {
              moretext.style.display = "none";
               btnText.textContent = "Read More";
           }

}


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

const studentForm = document.getElementById('form2');
const studentTable = document.querySelector('.student-table tbody');
const editFormContainer = document.getElementById('editFormContainer');
const editForm = document.getElementById('editForm');
let students = [];
let editIndex = null;

// Add student
studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    const student = { name, age, grade };
    students.push(student);
    renderTable();
    studentForm.reset();
});

// Render the table
function renderTable() {
    studentTable.innerHTML = ''; // Clear the table before rendering
    students.forEach((student, index) => {
        const row = studentTable.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.age;
        row.insertCell(2).textContent = student.grade;

        // Actions: Edit and Delete buttons
        const actionsCell = row.insertCell(3);
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(index);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);
        actionsCell.appendChild(deleteButton);
    });
}

// Edit student
function editStudent(index) {
    editIndex = index;
    const student = students[index];
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGrade').value = student.grade;
    editFormContainer.classList.remove('hidden');
}

// Update student
editForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const grade = document.getElementById('editGrade').value;

    students[editIndex] = { name, age, grade };
    renderTable();
    editFormContainer.classList.add('hidden');
});

// Delete student
function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

// Cancel editing
document.getElementById('cancelEdit').addEventListener('click', function() {
    editFormContainer.classList.add('hidden');
});













