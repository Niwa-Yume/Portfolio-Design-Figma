document.addEventListener('DOMContentLoaded', function () {
    const portfolioBtn = document.getElementById('portfolio-btn');
    const contactBtn = document.getElementById('contact-btn');
    const svgPortfolio = document.querySelector('.svg-portfolio');
    const svgContact = document.querySelector('.svg-contact');

    contactBtn.addEventListener('mouseover', function () {
        portfolioBtn.classList.remove('bg-primary', 'text-white');
        portfolioBtn.classList.add('bg-transparent');
        svgPortfolio.classList.add('hidden');

        contactBtn.classList.add('bg-primary', 'text-white');
        svgContact.classList.remove('hidden');
    });

    contactBtn.addEventListener('mouseout', function () {
        portfolioBtn.classList.add('bg-primary', 'text-white');
        portfolioBtn.classList.remove('bg-transparent');
        svgPortfolio.classList.remove('hidden');

        contactBtn.classList.remove('bg-primary', 'text-white');
        svgContact.classList.add('hidden');
    });
});
