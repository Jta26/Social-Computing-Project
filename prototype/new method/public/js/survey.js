

let surveyID = localStorage.getItem('SurveyID');

let enterBtn = document.querySelector('.IDbtn');
let IDinput = document.querySelector('.IDin');
let IDmodal = document.querySelector('.IDmodalBackdrop');

if (!surveyID) {
    IDmodal.style.display = 'block';
    enterBtn.addEventListener('click', function() {
        localStorage.setItem('SurveyID', IDinput.value);
        IDmodal.style.display = 'none';
    });
}



function displayModal() {
    let modal = document.querySelector('.modalBackdrop');
    let IDfield = document.querySelector('.IdField');
    let finished = document.querySelector('.finish');
    finished.style.display = 'none';
    IDfield.innerHTML = 'Your ID Number is: ' + localStorage.getItem('SurveyID');
    modal.style.display = 'block';
}