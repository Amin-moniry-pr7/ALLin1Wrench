
// Load Header dynamically
fetch('../html/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        // After loading header, attach event listeners to its buttons
        const loginButtons = document.querySelectorAll('#header-container .header-button');
        loginButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Log in') {
                button.addEventListener('click', () => {
                    // Since we are already on the login page, just ensure the right panel is not active
                    document.getElementById('container').classList.remove('right-panel-active');
                });
            }
            if (buttonText === 'Sign up') {
                button.addEventListener('click', () => {
                   // On the login page, switch to the sign-up panel
                   document.getElementById('container').classList.add('right-panel-active');
                });
            }
        });
    })
    .catch(error => console.error('Error loading header:', error));


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const container = document.getElementById('container');

    if (mode === 'signup') {
        if (container) {
            container.classList.add('right-panel-active');
        }
    }
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const mobileSignUpLink = document.getElementById('mobileSignUpLink');
const mobileSignInLink = document.getElementById('mobileSignInLink');

if(signUpButton) {
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}

if(signInButton) {
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

if (mobileSignUpLink) {
    mobileSignUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("right-panel-active");
    });
}

if (mobileSignInLink) {
    mobileSignInLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("right-panel-active");
    });
}

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    notification.textContent = message;
    notification.style.backgroundColor = isError ? 'var(--primary-red)' : '#4CAF50';
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}
