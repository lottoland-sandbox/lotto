



function submitForm() {
    const event_properties = {};

    // Simulate form submission outcome
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber < 34) {
        event_properties.Outcome = 'failure';
        const errors = ['InvalidCredentials', 'System_Unavailable', 'Ban', 'MaximumAttempts','GamstopBan', 'DuplicateSuspicion', 'EmailNotFound'];
        const randomErrorIndex = Math.floor(Math.random() * errors.length);
        event_properties.Error = errors[randomErrorIndex];
        alert('login Failure');
    } else {
        event_properties.Outcome = 'success';
        const statuses = ['verified', 'unverified'];
        const randomStatusIndex = Math.floor(Math.random() * statuses.length);
        event_properties.Status = statuses[randomStatusIndex];
        alert('login Success');
    }

    // Tracking
    event_properties['Name'] = 'account';
    event_properties['Domain'] = Domain;
    event_properties['Feature'] = Feature;
    
    amplitude.track('outcome', event_properties);

    // Redirect
    // window.location.href = "confirmation.html" + window.location.search;
}



function trackInteraction(event) {
    const target = event.target;
    let trackType, trackName, trackContainer, trackObject, trackCategory, trackValue;
    
    if (target.tagName === 'INPUT' && target.hasAttribute('data-track-name')) {
        trackType = 'click';
        trackValue="firstfocusin";
    } else if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        trackType = 'click';
         trackValue = target.getAttribute('data-track-value') || '';
    } else if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        trackType = 'click';
         trackValue = target.getAttribute('data-track-value') || '';
    }

    if (trackType) {
        trackName = target.getAttribute('data-track-name');
        trackContainer = target.getAttribute('data-track-container') || '';
        trackObject = target.getAttribute('data-track-object') || '';
        trackCategory = target.getAttribute('data-track-category') || '';
        trackOutcome = target.getAttribute('data-track-outcome') || '';
       


        const event_properties = {
            'Name': trackName,
            'Container': trackContainer,
            'Object': trackObject,
            'Category': trackCategory,
            'Value': trackValue,
            'Status': trackOutcome,
            'Feature': Feature,
            'Domain': Domain
        };

     if (trackName === 'submit' && outcome !== '') {
    trackType = 'outcome';
}
        
        amplitude.track(trackType, event_properties);
    }
}

// Event listeners
document.addEventListener('click', trackInteraction);
