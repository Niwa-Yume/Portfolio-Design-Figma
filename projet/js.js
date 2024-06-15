document.addEventListener('DOMContentLoaded', () => {
    fetch('../projet.json')
        .then(response => response.json())
        .then(projects => {
            const techIcons = {
                "HTML": '<img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML Icon" class="icon-img" width="25" height="25" />',
                "CSS": '<img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS Icon" class="icon-img" width="25" height="25" />',
                "JavaScript": '<img src="https://cdn-icons-png.flaticon.com/512/919/919828.png" alt="JavaScript Icon" class="icon-img" width="25" height="25" />',
                "PHP": '<img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="PHP Icon" class="icon-img" width="25" height="25" />',
                "MySQL": '<img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL Icon" class="icon-img" width="25" height="25" />',
                "Python": '<img src="https://cdn-icons-png.flaticon.com/512/919/919852.png" alt="Python Icon" class="icon-img" width="25" height="25" />',
                "Django": '<img src="https://cdn-icons-png.flaticon.com/512/919/919831.png" alt="Django Icon" class="icon-img" width="25" height="25" />',
                "API": '<img src="https://cdn-icons-png.flaticon.com/512/2906/2906260.png" alt="API Icon" class="icon-img" width="25" height="25" />',
                "TailwindCSS": '<img src="../assets/icon tools/tailwindcss-icon.svg" alt="Tailwind CSS" class="w-8 h-8">',
                "Telegram": '<img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram Icon" class="icon-img" width="25" height="25" />',
                "WordPress": '<img src="https://cdn-icons-png.flaticon.com/512/174/174881.png" alt="WordPress Icon" class="icon-img" width="25" height="25" />',
                "Laravel": '<img src="/assets/icon/laravel.svg" alt="WordPress Icon" class="icon-img" width="25" height="25" />',
            };

            const projectsGrid = document.getElementById('projects-grid');

            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card', 'text-center', 'bg-white', 'rounded-full', 'shadow-md', 'overflow-hidden', 'p-4', 'm-2');
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="rounded-xl mx-auto w-full h-48 object-contain">
                    <h3 class="mt-4 text-lg font-semibold text-black">${project.title}</h3>
                    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">${project.description}</p>
                    <div class="flex flex-wrap justify-center gap-2 mt-2">
                        ${project.tags.map(tag => `<span class="inline-block p-1 bg-zinc-200  rounded-md">${techIcons[tag] || tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="text-white mt-4 block bg-primary py-2 px-4 rounded-full w-fit mx-auto">Voir plus</a>
                `;
                projectsGrid.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
