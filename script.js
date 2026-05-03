document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    const profileView = document.getElementById('profileView');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userInput = form.querySelector('input[type="text"]').value;
        const passInput = form.querySelector('input[type="password"]').value;

        // Apnar fixed credentials
        const validName = "Md. Emtiaz Hossain Sami";
        const validPass = "12345";

        if (userInput === validName && passInput === validPass) {
            // Login panel gulo hide hobe
            leftPanel.style.display = 'none';
            rightPanel.style.display = 'none';
            
            // Profile view show hobe
            profileView.style.display = 'block';
        } else {
            alert("Invalid Credentials! Try using your full name and password '12345'.");
        }
    });
});
