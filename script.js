const studentForm = document.getElementById('studentForm')
const studentsContainer = document.querySelector('.students')
const btnEl = document.querySelector('.btn')
const nameInput = studentForm['name']
const ageInput = studentForm['age']
const rollInput = studentForm['roll']

// retrieve student obj data from local storage
const students = JSON.parse(localStorage.getItem('students')) || []

const addStudents = (name, age, roll) => {
    students.push({name, age, roll})
    // save student obj data to local storage
    localStorage.setItem('students', JSON.stringify(students))
    return {name, age, roll}
}

// pass in destructured object to the function
const createStudentElement = ({name, age, roll}) => {
    // create dom elements
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h3')
    const studentAge = document.createElement('p')
    const studentRoll = document.createElement('p')
    // add text content to dom elements
    studentName.innerText = `Student name: ${name}`
    studentAge.innerText = `Student age: ${age}`
    studentRoll.innerText = `Student roll: ${roll}`
    // append dom elements to parent div
    studentDiv.append(studentName, studentAge, studentRoll)
    studentsContainer.appendChild(studentDiv)
}

students.forEach(createStudentElement)

studentForm.addEventListener('submit', event => {
    event.preventDefault()

    // create new student
    const newStudent = addStudents(nameInput.value, ageInput.value, rollInput.value)
    createStudentElement(newStudent)

    // empty the form after data submission
    nameInput.value = ''
    ageInput.value = ''
    rollInput.value = ''
})