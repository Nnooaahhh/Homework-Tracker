// Sample JavaScript for adding courses, homework, and assessments
const courseSelector = document.getElementById('courseSelector');
const assessmentCourseSelector = document.getElementById('assessmentCourseSelector');
const homeworkItems = document.getElementById('homeworkItems');

function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const option = document.createElement('option');
    option.text = courseName;
    courseSelector.add(option);
    assessmentCourseSelector.add(option.cloneNode(true));
}

function addHomework() {
    const courseIndex = courseSelector.selectedIndex;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const courseName = courseSelector.options[courseIndex].text;

    const li = document.createElement('li');
    li.textContent = `Course: ${courseName}, Description: ${description}, Due Date: ${dueDate}`;
    homeworkItems.appendChild(li);
}

function logAssessment() {
    const courseIndex = assessmentCourseSelector.selectedIndex;
    const assessmentName = document.getElementById('assessmentName').value;
    const assessmentType = document.getElementById('assessmentType').value;
    const courseName = assessmentCourseSelector.options[courseIndex].text;

    const li = document.createElement('li');
    li.textContent = `Course: ${courseName}, Assessment Name: ${assessmentName}, Type: ${assessmentType}`;
    homeworkItems.appendChild(li);
}
