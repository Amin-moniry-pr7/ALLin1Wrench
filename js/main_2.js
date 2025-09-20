class SemiCircleScroll {
    constructor() {
        this.sections = [
            { id: 'info', title: 'What I Offer' },
            { id: 'contact', title: 'About Me' },
            { id: 'tools', title: 'Connect With Me' },
            { id: 'about', title: 'The Roadmap' },
            { id: 'services', title: 'My Skills & Expertise' }
        ];
        this.currentSection = 0;
        this.isScrolling = false;
        this.scrollLockTime = 2000;
        this.slidesVisited = Array(this.sections.length).fill(false);
        this.semicircle = document.getElementById('semicircleNav');
        this.init();
    }

    init() {
        document.getElementById('semicircleText').textContent = this.sections[this.currentSection].title;
        this.slidesVisited[this.currentSection] = true;
        this.bindEvents();
        document.body.style.overflow = 'hidden';
    }

    allSlidesViewed() {
        return this.slidesVisited.every(visited => visited === true);
    }

    bindEvents() {
        const handleInteraction = (event, direction) => {
            if (this.isScrolling) {
                event.preventDefault();
                return;
            }

            const isFirstSection = this.currentSection === 0;
            const isLastSection = this.currentSection === this.sections.length - 1;
            const isGoingUp = direction === 'up';
            const isGoingDown = direction === 'down';

            if (isFirstSection && isGoingUp) {
                event.preventDefault();
                return;
            }

            if (isLastSection && isGoingDown) {
                if (this.allSlidesViewed()) {
                    document.body.style.overflow = 'auto';
                    return;
                } else {
                    event.preventDefault();
                    return;
                }
            }

            event.preventDefault();

            if (isGoingDown) {
                this.nextSection();
            } else if (isGoingUp) {
                this.prevSection();
            }
        };

        document.addEventListener('wheel', e => {
            const direction = e.deltaY > 0 ? 'down' : 'up';
            handleInteraction(e, direction);
        }, { passive: false });

        let touchStartY = 0;
        document.addEventListener('touchstart', e => {
            touchStartY = e.touches[0].clientY;
        }, { passive: false });

        document.addEventListener('touchmove', e => {
            if (document.body.style.overflow === 'auto' && document.documentElement.scrollTop < 1) {
                const currentY = e.touches[0].clientY;
                if (touchStartY < currentY) {
                    document.body.style.overflow = 'hidden';
                }
            }

            if (this.isScrolling) { e.preventDefault(); return; }

            const currentY = e.touches[0].clientY;
            const deltaY = touchStartY - currentY;

            if (Math.abs(deltaY) > 40) {
                const direction = deltaY > 0 ? 'down' : 'up';
                handleInteraction(e, direction);
                touchStartY = currentY;
            }
        }, { passive: false });

        document.addEventListener('keydown', e => {
            const keyMap = { "ArrowDown": 'down', "PageDown": 'down', "ArrowUp": 'up', "PageUp": 'up' };
            if (keyMap[e.key]) {
                handleInteraction(e, keyMap[e.key]);
            }
        });
    }

    nextSection() {
        if (this.currentSection < this.sections.length - 1) {
            this.currentSection++;
            this.updateDisplay();
        }
    }

    prevSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.isScrolling = true;
        this.slidesVisited[this.currentSection] = true;

        const semicircleText = document.getElementById('semicircleText');
        this.semicircle.classList.add('rotating');
        semicircleText.style.opacity = '0';

        setTimeout(() => {
            semicircleText.textContent = this.sections[this.currentSection].title;
            semicircleText.style.opacity = '1';
            document.querySelectorAll('.section').forEach((section, index) => {
                section.classList.toggle('active', index === this.currentSection);
            });
        }, 400);

        setTimeout(() => {
            this.semicircle.classList.remove('rotating');
        }, 1000);

        setTimeout(() => {
            this.isScrolling = false;
        }, this.scrollLockTime);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SemiCircleScroll();
});