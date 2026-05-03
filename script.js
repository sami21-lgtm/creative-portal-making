document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const buttons = document.querySelectorAll('.toggle-btns button');

    // Toggle logic (Sign In / Sign Up button switch)
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Form submission logic
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Input field theke data neya
        const usernameInput = form.querySelector('input[type="email"]').value; // Image 2 onushare ekhane email/username thakbe
        const passwordInput = form.querySelector('input[type="password"]').value;

        // Apnar fixed credentials
        const validName = "Md. Emtiaz Hossain Sami";
        const validPass = "12345";

        // Login Check
        if (usernameInput === validName && passwordInput === validPass) {
            alert(`Welcome back, ${validName}! Login Successful.`);
            // Ekhane apni chaile onno page-e redirect korte paren
            // window.location.href = "dashboard.html";
        } else {
            alert("Invalid Credentials! Please try again.");
        }
    });
});
