


//Tracker stuffs
let ATrackerAcceptButton = document.querySelector('.ATrackerAcceptButton');
let ATrackerXButton = document.querySelector('.trackerXButton');
let notificationElement = document.querySelector('.trackerNotificationA');
ATrackerAcceptButton.addEventListener('click', AcceptATracker);
ATrackerXButton.addEventListener('click', AcceptATracker);
function CheckATrackerAcceptStatus() {
    
    let isChecked = localStorage.getItem('cookieChecked');
    if (!isChecked) {
        setTimeout(function() {
            notificationElement.style.bottom = '0px';
        }, 1500)
    }
}

function AcceptATracker() {
    localStorage.setItem('cookieChecked', true);
    //hide tracker
    notificationElement.style.bottom = '-200px';
}
CheckATrackerAcceptStatus();


