// Navigation - Toggle Header/Hamburger Menu
function toggleHeader() {
    const header = document.getElementById('mainHeader');
    if (header) {
        header.classList.toggle('hidden');
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');
        let isValid = true;

        if (nameInput.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        const phoneValue = phoneInput.value.trim();
        const phonePattern = /^\+?[0-9\s\-()]{7,15}$/;
        if (phoneValue !== '' && !phonePattern.test(phoneValue)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
            isValid = false;
        }

        if (messageInput.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
}

// Academic PLanner
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

if (addBtn) {
    addBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text === '') {
            alert('Please enter a task.');
            return;
        }
        
        const item = document.createElement('li');

        const span = document.createElement('span');
        span.className = "taskText";
        span.textContent = text;

        const btnGroup = document.createElement('div');
        btnGroup.className = 'btnGroup';


        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.addEventListener('click', () => item.classList.toggle('completed'));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => item.remove());

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(deleteBtn);
        item.appendChild(span);
        item.appendChild(btnGroup);

        taskList.appendChild(item);

        taskInput.value = '';
    });
}