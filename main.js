//Ecoute pour le bouton de contact

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

//Ajout dynamique des projets de portefolio
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

// Écoute pour le bouton de contact

document.addEventListener('DOMContentLoaded', function () {
    const boutonPortfolio = document.getElementById('portfolio-btn');
    const boutonContact = document.getElementById('contact-btn');
    const svgPortfolio = document.querySelector('.svg-portfolio');
    const svgContact = document.querySelector('.svg-contact');

    boutonContact.addEventListener('mouseover', function () {
        boutonPortfolio.classList.remove('bg-primary', 'text-white');
        boutonPortfolio.classList.add('bg-transparent');
        svgPortfolio.classList.add('hidden');

        boutonContact.classList.add('bg-primary', 'text-white');
        svgContact.classList.remove('hidden');
    });

    boutonContact.addEventListener('mouseout', function () {
        boutonPortfolio.classList.add('bg-primary', 'text-white');
        boutonPortfolio.classList.remove('bg-transparent');
        svgPortfolio.classList.remove('hidden');

        boutonContact.classList.remove('bg-primary', 'text-white');
        svgContact.classList.add('hidden');
    });
});

// Ajout dynamique des projets de portfolio
document.addEventListener('DOMContentLoaded', function () {
    const boutonPortfolio = document.getElementById('portfolio-btn');
    const boutonContact = document.getElementById('contact-btn');
    const svgPortfolio = document.querySelector('.svg-portfolio');
    const svgContact = document.querySelector('.svg-contact');

    boutonContact.addEventListener('mouseover', function () {
        boutonPortfolio.classList.remove('bg-primary', 'text-white');
        boutonPortfolio.classList.add('bg-transparent');
        svgPortfolio.classList.add('hidden');

        boutonContact.classList.add('bg-primary', 'text-white');
        svgContact.classList.remove('hidden');
    });

    boutonContact.addEventListener('mouseout', function () {
        boutonPortfolio.classList.add('bg-primary', 'text-white');
        boutonPortfolio.classList.remove('bg-transparent');
        svgPortfolio.classList.remove('hidden');

        boutonContact.classList.remove('bg-primary', 'text-white');
        svgContact.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé et analysé");

    fetch('./projet.json') // Chemin pour accéder au fichier projet.json qui contient les données des projets
        .then(response => {
            console.log("Récupération de projects.json...");
            if (!response.ok) {
                throw new Error('La réponse du réseau n\'était pas correcte ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Données des projets chargées: ", data);
            const conteneurPortfolio = document.querySelector('.grid');
            if (!conteneurPortfolio) {
                console.error("Conteneur de portfolio non trouvé");
                return;
            }
            data.forEach(projet => {
                const projetHTML = `
                <div class="bg-slate-500 rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
                    <img src="${projet.image}" alt="${projet.title}" class="w-full h-64 object-cover transition-opacity hover:opacity-80 duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-gray-800 transition-colors text-center hover:text-orange-500 duration-300">${projet.title}</h3>
                        <p class="mt-2 text-gray-500">${projet.description}</p>
                        <p class="mt-2 text-gray-500">Date: ${projet.date}</p>
                        <p class="mt-2 text-gray-500">Catégorie: ${projet.category}</p>
                        <p class="mt-2 text-gray-500 font-bold">Tags: ${projet.tags.join(', ')}</p>
                        <button class="mx-auto text-center mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
                        <a href="${projet.link}">Lien du projet</a></button>
                    </div>
                </div>
                `;
                conteneurPortfolio.insertAdjacentHTML('beforeend', projetHTML);
            });            
        })
        .catch(error => console.error('Erreur lors du chargement des projets:', error));
});



