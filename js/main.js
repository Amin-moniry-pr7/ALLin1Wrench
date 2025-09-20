document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(r => r.ok ? r.text() : null)
        .then(html => { if (html) document.getElementById('header-container').innerHTML = html; })
        .catch(() => {});
});
document.addEventListener('DOMContentLoaded', () => {
    const stations = document.querySelectorAll('.station');
    const runningAnimations = new Map();
    stations.forEach(station => {
        const color = station.dataset.stationColor;
        if (color) station.style.setProperty('--station-color', color);
    });
    function animatePercentage(element, finalPercentage) {
        if (runningAnimations.has(element)) return;
        let currentPercentage = 0;
        const duration = 2000, speed = 25, increment = finalPercentage / (duration / speed);
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
                if (percentageSpan && percentageSpan.dataset.percentage) animatePercentage(percentageSpan, parseInt(percentageSpan.dataset.percentage));
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
