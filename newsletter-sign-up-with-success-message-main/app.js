let container = document.querySelector('.container');
let thankyouContainer = document.querySelector('.thank-you--container');
let submitBtn = document.querySelector('.submit-btn');
let dismissBtn = document.querySelector('.dismiss-btn');
let emailInput = document.getElementById('email');

emailInput.addEventListener('keyup', () => {
    if (emailInput.value === "") {
        console.log("Input is empty.");
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.style.visibility = 'hidden';
    container.style.opacity = '0';
    thankyouContainer.style.display = 'block';
});

dismissBtn.addEventListener('click', (e) => {
    e.preventDefault();
    thankyouContainer.style.display = 'none';
    container.style.visibility = 'visible';
    container.style.opacity = '1';
});