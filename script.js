// Simple workflow: Toggle visibility of subjects
const viewBtn = document.getElementById('viewBtn');
const subjectList = document.getElementById('subjectList');

viewBtn.addEventListener('click', function() {
    if (subjectList.classList.contains('hidden')) {
        subjectList.classList.remove('hidden');
        viewBtn.textContent = "Hide Subjects";
    } else {
        subjectList.classList.add('hidden');
        viewBtn.textContent = "View Subjects";
    }
});