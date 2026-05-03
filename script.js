document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('animeLoginForm');
    const loginBox = document.getElementById('loginBox');
    const profileBox = document.getElementById('profileBox');
    const wrapper = document.getElementById('mainWrapper');

    // Apnar Credentials
    const validUser = "sami"; 
    const validPass = "12345";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = document.getElementById('userInput').value.trim();
        const pass = document.getElementById('passInput').value;

        // Login Success Logic
        if ((user === validUser || user === "Md. Emtiaz Hossain Sami") && pass === validPass) {
            loginBox.style.display = 'none';
            profileBox.style.display = 'block';
            wrapper.style.height = '480px';
        } else {
            alert("Invalid Credentials! Please use 'sami' and '12345'.");
        }
    });

    document.querySelector('.icon-close').addEventListener('click', () => {
        wrapper.style.display = 'none';
    });
});
