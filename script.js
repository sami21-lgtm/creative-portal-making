document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const buttons = document.querySelectorAll('.toggle-btns button');

    // Toggle logic
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = form.querySelector('input[type="text"]').value;
        alert(`Welcome back, ${username}!`);
    });
});
