$(document).ready(function () {
    // Get today's date
    const today = new Date().toDateString();

    // Retrieve last visit date and click count from localStorage
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    let clickCount = parseInt(localStorage.getItem('clickCount') || 0);

    console.log("Last visit date:", lastVisitDate); // Debugging
    console.log("Today's date:", today); // Debugging
    console.log("Click count:", clickCount); // Debugging

    // Reset click count if it's a new day
    if (lastVisitDate !== today) {
        resetClickCount(today);
    }

    // If the user has already reached the limit, disable the button
    if (clickCount >= 6) {
        displayLimitReachedMessage();
    }

    // Handle the fortune button click
    $('#fortune-btn').click(function () {
        if ($(this).prop('disabled')) return;

        playClickSound();

        // Fetch a fortune from the backend
        fetchFortune();

        // Increment click count and update localStorage
        clickCount++;
        localStorage.setItem('clickCount', clickCount);

        console.log("Click count after increment:", clickCount); // Debugging

        // Disable the button if the limit is reached
        if (clickCount >= 6) {
            displayLimitReachedMessage();
        }
    });

    // Listen for device motion (shake detection)
    setupShakeDetection();

    // Stop audio on page unload
    $(window).on('beforeunload', stopAudio);

    // FUNCTIONS

    // Reset the click count and store the current date
    function resetClickCount(date) {
        localStorage.setItem('clickCount', 0);
        localStorage.setItem('lastVisitDate', date);
        clickCount = 0;
        console.log("Click count reset for a new day."); // Debugging
    }

    // Disable the button and show the limit-reached message
    function displayLimitReachedMessage() {
        $('#fortune-btn').prop('disabled', true).css({
            cursor: 'not-allowed',
            opacity: 0.5,
        }).off('click'); // Remove click handler
        $('#fortune-text').text('You have reached the maximum number of fortunes for today. Come back tomorrow!');
    }

    // Play the button click sound
    function playClickSound() {
        const audio = document.getElementById("click-sound");
        if (audio) {
            audio.currentTime = 0; // Restart the audio
            audio.play();
        } else {
            console.error("Audio element not found!");
        }
    }

    // Fetch a fortune from the backend
    function fetchFortune() {
        $.get('http://localhost:3000/fortune')
            .done(function (data) {
                $('#fortune-text').text(data.fortune);
            })
            .fail(function () {
                $('#fortune-text').text("Oops! Something went wrong. Please try again later.");
            });
    }

    // Stop audio playback on page unload
    function stopAudio() {
        const audio = document.getElementById("click-sound");
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    // Set up shake detection
    function setupShakeDetection() {
        let lastX, lastY, lastZ, lastTime = 0;
        const shakeThreshold = 15; // Sensitivity

        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', function (event) {
                const currentTime = new Date().getTime();
                if (currentTime - lastTime > 100) {
                    const diffTime = currentTime - lastTime;
                    lastTime = currentTime;

                    const x = event.acceleration.x || 0;
                    const y = event.acceleration.y || 0;
                    const z = event.acceleration.z || 0;

                    const acceleration = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;

                    if (acceleration > shakeThreshold) {
                        triggerShakeEffect();
                    }

                    lastX = x;
                    lastY = y;
                    lastZ = z;
                }
            }, false);
        }
    }

    // Add a shaking effect to the button
    function triggerShakeEffect() {
        $('#fortune-btn').addClass('shake');
        setTimeout(() => {
            $('#fortune-btn').removeClass('shake');
        }, 500);
    }
});
