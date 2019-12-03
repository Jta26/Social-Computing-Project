

let surveyID = localStorage.getItem('SurveyID');

if (!surveyID) {
    localStorage.setItem('SurveyID', Math.floor(Math.random() * 100000));
}

//called when 180 seconds have passed
function displayModal() {
    let modal = document.querySelector('.modalBackdrop');
    let IDfield = document.querySelector('.IdField');
    let finished = document.querySelector('.finish');
    finished.style.display = 'none';
    IDfield.innerHTML = 'Your ID Number is: ' + localStorage.getItem('SurveyID');
    modal.style.display = 'block';
}