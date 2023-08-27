let faqAnswer = document.querySelectorAll('.faq-container');

faqAnswer.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains('active')) {
            event.classList.remove('active');
        } else {
            event.classList.add('active');
        }
    });
});