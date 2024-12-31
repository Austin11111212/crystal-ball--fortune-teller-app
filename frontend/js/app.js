$(document).ready(function() {
    // Get today's date
    const today = new Date().toDateString();
    
    // Retrieve last visit date and click count from localStorage
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const clickCount = localStorage.getItem('clickCount');

    // If last visit date is not today's date, reset click count
    if (lastVisitDate !== today) {
        localStorage.setItem('clickCount', 0); // Reset the click count
        localStorage.setItem('lastVisitDate', today); // Store today's date
    }

    // If click count is 3 or more, disable the button and show a message
    if (clickCount >= 3) {
        disableButton();
        $('#fortune-text').text('You have reached the maximum number of fortunes for today. Come back tomorrow!');
    }

    // Handle the click event on the fortune button
    $('#fortune-btn').click(function() {
        // If button is disabled, return early
        if ($(this).prop('disabled')) {
            return;
        }

        // Play the sound when the image is clicked, always start fresh
        var audio = document.getElementById("click-sound");

        // Reset audio and start from the beginning each time it's clicked
        audio.currentTime = 0; // Restart the audio to the beginning
        audio.play();

        // Fetch the fortune from the backend API
        $.get('http://localhost:3000/fortune', function(data) {
            // Display the fortune on the page
            $('#fortune-text').text(data.fortune);
        }).fail(function() {
            // Handle errors if the API request fails
            $('#fortune-text').text("Oops! Something went wrong.");
        });

        // Increment the click count
        let newClickCount = parseInt(localStorage.getItem('clickCount') || 0);
        newClickCount++;
        localStorage.setItem('clickCount', newClickCount); // Store the new click count

        // Disable the button if the user clicks 3 times
        if (newClickCount >= 3) {
            disableButton();
            $('#fortune-text').text('You have reached the maximum number of fortunes for today. Come back tomorrow!');
        }
    });

    // Function to disable the button and prevent any further clicks
    function disableButton() {
        $('#fortune-btn').prop('disabled', true).css({
            'cursor': 'not-allowed', // Make the button look disabled
            'opacity': 0.5
        }).off('click');  // Remove click event handler to prevent further clicks
    }

    // Stop the music when the user is about to leave the page
    $(window).on('beforeunload', function() {
        var audio = document.getElementById("click-sound");
        if (!audio.paused) {
            audio.pause();  // Pause the audio
            audio.currentTime = 0;  // Reset the audio to the start
        }
    });
});
