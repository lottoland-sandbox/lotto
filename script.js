// Global variables
let currentStep = 1;

// Functions
function nextStep(step) {
    updateStep(step, step + 1);
}

function prevStep(step) {
    updateStep(step, step - 1);
}

function updateStep(currentStep, nextStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${nextStep}`).classList.add('active');
    updateProgressBar(nextStep);

    // Tracking
    const event_properties = {
        'Id': 'register',
        'Category': 'Step ' + nextStep,
        'Display Type': 'impression',
        'Feature': Feature,
        'Domain': Domain
    };
    amplitude.track('display', event_properties);
}

function updateProgressBar(step) {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    const fillPercentage = Math.min((step - 1) / 4 * 100, 100);
    progressBarInner.style.width = `${fillPercentage}%`;
}

function submitForm() {
    const event_properties = {};

    // Simulate form submission outcome
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber < 34) {
        event_properties.Outcome = 'failure';
        const errors = ['Duplicate_Account', 'System_Unavailable', 'Fraud', 'Network_Issue'];
        const randomErrorIndex = Math.floor(Math.random() * errors.length);
        event_properties.Error = errors[randomErrorIndex];
        alert('Registration Failure');
    } else {
        event_properties.Outcome = 'success';
        const statuses = ['verified', 'unverified'];
        const randomStatusIndex = Math.floor(Math.random() * statuses.length);
        event_properties.Status = statuses[randomStatusIndex];
        alert('Registration Success');
    }

    // Tracking
    event_properties['Name'] = 'outcome';
    event_properties['Domain'] = Domain;
    event_properties['Feature'] = Feature;
    amplitude.track('outcome', event_properties);

    // Redirect
    // window.location.href = "confirmation.html" + window.location.search;
}

function redirectTo(url) {
    window.location.href = url + window.location.search;
}

function trackInteraction(event) {
    const target = event.target;
    let trackType, trackName, trackContainer, trackObject, trackCategory, trackValue;
    
    if (target.tagName === 'INPUT' && target.hasAttribute('data-track-name')) {
        trackType = 'focus';
    } else if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        trackType = 'click';
    } else if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        trackType = 'click';
    }

    if (trackType) {
        trackName = target.getAttribute('data-track-name');
        trackContainer = target.getAttribute('data-track-container') || '';
        trackObject = target.getAttribute('data-track-object') || '';
        trackCategory = target.getAttribute('data-track-category') || '';
        trackStatus = target.getAttribute('data-track-status') || '';

        if (trackType === 'focus') {
            trackValue = 'firstfocusin';
        }

        const event_properties = {
            'Name': trackName,
            'Container': trackContainer,
            'Object': trackObject,
            'Category': trackCategory,
            'Value': trackValue,
            'Status': trackStatus,
            'Feature': Feature,
            'Domain': Domain
        };

        amplitude.track(trackType, event_properties);
    }
}

// Event listeners
document.addEventListener('focusin', trackInteraction);
document.addEventListener('click', trackInteraction);
