document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginArea = document.getElementById('loginArea');
    const profileArea = document.getElementById('profileArea');
    const wrapper = document.querySelector('.wrapper');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = document.getElementById('userInput').value.trim();
        const pass = document.getElementById('passInput').value;

        // Credentials Check
        if ((user === "sami" || user === "Md. Emtiaz Hossain Sami") && pass === "12345") {
            // Animated Transition
            loginArea.style.opacity = '0';
            setTimeout(() => {
                loginArea.style.display = 'none';
                profileArea.style.display = 'block';
            }, 400);
        } else {
            alert("Bhul Credentials! Username: sami, Password: 12345");
        }
    });

    document.querySelector('.icon-close').addEventListener('click', () => {
        wrapper.style.transition = '0.5s';
        wrapper.style.transform = 'scale(0)';
        wrapper.style.opacity = '0';
    });
});
