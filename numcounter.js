document.addEventListener("DOMContentLoaded", function () {
    const counterIte = document.getElementsByClassName('count');
    console.log("LOADED");
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                let count = 0;
                const maxCount = parseInt(counter.textContent);
                let intervalId; // Declare a variable to store the interval ID

                function updateCounter() {
                    counter.textContent = count;
                }

                function startAnimation(duration) {
                    intervalId = setInterval(increaseCounter, duration); // Initial interval
                }

                function stopAnimation() {
                    clearInterval(intervalId); // Clear the interval when the animation is complete
                }

                function increaseCounter() {
                    if (count < maxCount) {
                        count += 1;
                        updateCounter();

                        if (maxCount < 200) {
                            // Update the interval based on maxCount / count ratio
                            if (maxCount / count >= 4) {
                                clearInterval(intervalId);
                                startAnimation(50);
                            } else if (maxCount / count < 4 && maxCount / count >= 3) {
                                clearInterval(intervalId);
                                startAnimation(40);
                            } else if (maxCount / count < 3 && maxCount / count >= 2) {
                                clearInterval(intervalId);
                                startAnimation(30);
                            } else {
                                clearInterval(intervalId);
                                startAnimation(20);
                            }
                        } else {
                            clearInterval(intervalId);
                            startAnimation(20);
                        }
                    } else {
                        stopAnimation(); // Stop the animation when it's complete
                    }
                }

                // Start the counter when the element is in the viewport
                updateCounter();
                startAnimation(20); // Initial animation with the shortest interval

                // Once the counter starts, we don't need to observe it anymore
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    // Start observing each counter element
    for (let i = 0; i < counterIte.length; i++) {
        observer.observe(counterIte[i]);
    }
});
