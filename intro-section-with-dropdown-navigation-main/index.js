let nav = document.querySelector('.nav');
let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let featuresItem = document.querySelector('.features-item');
let companyItem = document.querySelector('.company-item');
let featuresList = document.querySelector('.features-list');
let companyList = document.querySelector('.company-list');

openBtn.addEventListener('click', () => {
    document.documentElement.style.backgroundColor = '#00000050';
    nav.classList.toggle('toggle');
});

closeBtn.addEventListener('click', () => {
    document.documentElement.style.backgroundColor = '#fff';
    nav.classList.remove('toggle');
});

featuresItem.addEventListener('click', () => {
    featuresList.style.display = 'block';
    featuresList.classList.toggle('features-toggle');
    if (!featuresList.classList.contains('features-toggle')) {
        featuresList.style.display = 'none';
    }
});

companyItem.addEventListener('click', () => {
    companyList.style.display = 'block';
    companyList.classList.toggle('company-toggle');
    if (!companyList.classList.contains('company-toggle')) {
        companyList.style.display = 'none';
    }
});