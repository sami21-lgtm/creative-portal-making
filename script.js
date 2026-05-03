document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginArea = document.getElementById('loginArea');
    const profileArea = document.getElementById('profileArea');

    // Apnar Credentials
    const validUser = "sami"; 
    const validPass = "12345";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = document.getElementById('userInput').value.trim();
        const pass = document.getElementById('passInput').value;

        // Login Check Logic
        if ((user === "sami" || user === "Md. Emtiaz Hossain Sami") && pass === "12345") {
            loginArea.style.display = 'none';
            profileArea.style.display = 'block';
        } else {
            alert("Bhul Credentials! Username: sami, Password: 12345");
        }
    });

    // Close Button logic
    document.querySelector('.icon-close').addEventListener('click', () => {
        document.querySelector('.wrapper').style.transform = 'scale(0)';
    });
});
