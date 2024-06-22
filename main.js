document.addEventListener('DOMContentLoaded', function () {
    // Gestion des boutons de contact et portfolio
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

// Ajout dynamique des projets de portfolio
document.addEventListener('DOMContentLoaded', () => {
    const projectNames = ["Petit Onion", "Scoubi dog maitre chien", "App météo API + BOT AI"]; // Remplacez ces noms par ceux de vos projets
    fetch('/projet.json')
        .then(response => response.json())
        .then(projects => {
            const selectedProjects = projects.filter(project => projectNames.includes(project.title));
            const projectsGrid = document.getElementById('projects-grid');

            selectedProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card', 'text-center', 'bg-white', 'dark:bg-zinc-800', 'rounded-xl', 'shadow-md', 'overflow-hidden', 'p-4', 'm-2', 'transition-transform', 'transform', 'hover:scale-105', 'duration-300','justify-center','items-center','flex-col');
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class=" mx-auto w-full h-48 object-contain">
                    <h3 class="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">${project.title}</h3>
                    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">${project.description}</p>
                    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Date:</strong> ${project.date}</p>
                    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><strong>Catégorie:</strong> ${project.category}</p>
                    <a href="${project.link}" class="text-white mt-4 block bg-primary py-2 px-4 rounded-full hover:bg-primary-light">Voir plus</a>
                `;
                projectsGrid.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des projets:', error));
});
