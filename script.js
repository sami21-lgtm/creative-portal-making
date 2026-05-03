document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('animeLoginForm');
    const loginWrapper = document.getElementById('loginWrapper');
    const animeProfile = document.getElementById('animeProfile');
    const formBox = document.querySelector('.form-box.login');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    // FIXED CREDENTIALS
    const validUser = "sami"; // Apnar name o use korte paren
    const validPass = "12345";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = document.getElementById('animeUser').value.trim();
        const pass = document.getElementById('animePass').value;

        if ((user === validUser || user === "Md. Emtiaz Hossain Sami") && pass === validPass) {
            formBox.style.display = 'none';
            animeProfile.style.display = 'block';
            loginWrapper.style.height = '480px';
        } else {
            alert("Invalid Credentials! Please try 'sami' and '12345'");
        }
    });

    iconClose.addEventListener('click', () => {
        loginWrapper.style.transform = 'scale(0)';
    });

    btnPopup.addEventListener('click', () => {
        loginWrapper.style.transform = 'scale(1)';
        loginWrapper.style.display = 'flex';
    });
});
