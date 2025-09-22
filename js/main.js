document.addEventListener('DOMContentLoaded', () => {
    // Function to load the header and attach navigation event listeners
    function loadHeader() {
        // Fetch header.html. Path is relative to main.html
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                const headerContainer = document.getElementById('header-container');
                if (headerContainer) {
                    headerContainer.innerHTML = html;

                    // After the header is loaded, find the buttons inside it and add event listeners
                    const headerButtons = headerContainer.querySelectorAll('.header-button');
                    headerButtons.forEach(button => {
                        const buttonText = button.textContent.trim();

                        if (buttonText === 'Log in') {
                            button.addEventListener('click', () => {
                                // Navigate to login.html (path relative from main.html)
                                window.location.href = 'login.html';
                            });
                        }

                        if (buttonText === 'Sign up') {
                            button.addEventListener('click', () => {
                                // Navigate to login.html with a parameter to show the sign-up form
                                window.location.href = 'login.html?mode=signup';
                            });
                        }
                    });
                }
            })
            .catch(error => {
                console.error('Failed to load header:', error);
            });
    }

    // Call the function to load the header
    loadHeader();

    // --- Original timeline and animation logic from your old main.js file ---
    const stations = document.querySelectorAll('.station');
    const runningAnimations = new Map();

    stations.forEach(station => {
        const color = station.dataset.stationColor;
        if (color) {
            station.style.setProperty('--station-color', color);
        }
    });

    function animatePercentage(element, finalPercentage) {
        if (runningAnimations.has(element)) return;

        let currentPercentage = 0;
        const duration = 2000;
        const speed = 25;
        const increment = finalPercentage / (duration / speed);

        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= finalPercentage) {
                currentPercentage = finalPercentage;
                clearInterval(interval);
                runningAnimations.delete(element);
            }
            element.textContent = `${Math.floor(currentPercentage)}%`;
        }, speed);

        runningAnimations.set(element, interval);
    }

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const percentageSpan = entry.target.querySelector('.percentage');
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (percentageSpan && percentageSpan.dataset.percentage) {
                    animatePercentage(percentageSpan, parseInt(percentageSpan.dataset.percentage));
                }
            } else {
                entry.target.classList.remove('visible');
                if (percentageSpan) {
                    if (runningAnimations.has(percentageSpan)) {
                        clearInterval(runningAnimations.get(percentageSpan));
                        runningAnimations.delete(percentageSpan);
                    }
                    percentageSpan.textContent = '0%';
                }
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.5 });

    stations.forEach(station => cardObserver.observe(station));

    const pathElements = document.querySelectorAll('#master-path-container path');
    const pathData = [];
    pathElements.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        pathData.push({ element: path, length: length, station: document.getElementById(path.id.replace('path-', '')) });
    });

    function handlePathAnimation() {
        const wh = window.innerHeight;
        pathData.forEach(data => {
            if (!data.station) return;
            const stationRect = data.station.getBoundingClientRect();
            let progress = (wh * 1.0 - stationRect.top) / (wh * 0.4);
            progress = Math.max(0, Math.min(1, progress));
            data.element.style.strokeDashoffset = data.length * (1 - progress);
        });
    }

    window.addEventListener('scroll', handlePathAnimation, { passive: true });
    handlePathAnimation();
});