

let trackingElement = document.querySelector('.trackerNotificationB');
let trackingbutton = document.querySelector('.trackBtn');
let trackingModal = document.querySelector('.trackingModalBackdrop');
trackingElement.addEventListener('mouseenter', showTrackingNotification);

trackingElement.addEventListener('click', function() {
    trackingModal.style.display = 'block';
});


trackingbutton.addEventListener('click', function() {
    trackingModal.style.display = 'none';
})