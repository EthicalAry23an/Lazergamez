document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const gamesContainer = document.getElementById('games-container');

    // Expanded dummy data for games
    const gamesData = [
        { title: 'GTA V', image: 'gta.jpeg', description: 'Experience the dynamic world of Los Santos in this open-world adventure.', warning: 'WARNING: This game is pirated. For the original, click the buy button below.', price: 199, downloadLink: 'https://7launcher.com/dl/7l_gta-v_latest_setup.exe' },
        { title: 'Cyberpunk 2077', image: 'cyberpunk-2077-cover.png', description: 'Dive into the futuristic world of Cyberpunk 2077 and explore the massive city of Night City.', downloadLink: 'https://se7en.ws/files/7l_cyberpunk2077_setup.exe' },
        { title: 'Palworld', image: 'pal.jpeg', description: 'Discover the mysterious world of Palworld with captivating creatures and epic adventures.', downloadLink: 'https://se7en.ws/files/7l_palworld_setup.exe' },
        { title: 'RDR 2', image: 'rdr2-cover.webp', description: 'Explore the vast landscapes of the American frontier in this epic tale of life in America’s unforgiving heartland.', downloadLink: 'https://se7en.ws/files/7l_rdr2_setup.exe' },
        { title: 'Forza Horizon 5', image: 'forzah5-cover.webp', description: 'Experience the ultimate driving adventure with stunning graphics and a vibrant, ever-evolving open-world landscape.', downloadLink: 'https://se7en.ws/files/7l_forzah5_setup.exe' },
        { title: 'American Truck Simulator', image: 'ruck.jpeg', description: 'Travel across America as king of the road, a trucker who delivers important cargo across impressive distances.', downloadLink: 'https://se7en.ws/files/7l_ats_setup.exe' },
        { title: 'GTA IV', image: 'gta4.jpeg', description: 'Explore the gritty, urban underworld of Liberty City in this open-world classic.', downloadLink: '#' },
        { title: 'CS:GO', image: 'csgo.jpeg', description: 'Compete in one of the most popular and intense multiplayer FPS games.', downloadLink: 'https://se7en.ws/files/7l_csgo_setup.exe' },
        { title: 'Fortnite', image: 'fortnite-poster.jpg', description: 'Jump into the chaotic battle royale action of Fortnite.', downloadLink: '#' },
        { title: 'Left 4 Dead 2', image: 'left-4-dead-2-cover.webp', description: 'Survive the zombie apocalypse in this action-packed cooperative shooter.', downloadLink: 'https://se7en.ws/files/7l_left4dead2_setup.exe' },
        { title: 'No Man\'s Sky', image: 'no-mans-sky-poster-1.png', description: 'Explore the vast universe, discover new planets, and survive in a procedurally generated galaxy.', downloadLink: 'https://se7en.ws/files/7l_nomanssky_setup.exe' },
        { title: 'House Flipper 2', image: 'house-flipper-2-cover.webp', description: 'Become a one-person renovation crew and remodel houses to your heart’s content.', downloadLink: 'https://se7en.ws/files/7l_houseflipper2_setup.exe' },
    ];

    // Function to display games
    function displayGames(games) {
        gamesContainer.innerHTML = '';
        games.forEach((game, index) => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');
            gameCard.style.animationDelay = `${index * 0.1}s`;
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    ${game.warning ? `<p class="warning-note">${game.warning}</p>` : ''}
                    <div class="buttons">
                        <a href="${game.downloadLink}" class="download-btn">Download</a>
                        ${game.price ? `<a href="#" class="buy-btn">Buy - $${game.price}</a>` : ''}
                    </div>
                </div>
            `;
            gamesContainer.appendChild(gameCard);
        });
    }

    // Initial display of games
    displayGames(gamesData);

    // Search functionality (dummy implementation)
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const filteredGames = gamesData.filter(game => game.title.toLowerCase().includes(searchTerm));
        displayGames(filteredGames);
    });

    // Custom Cursor Implementation
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect for interactive elements (like buttons, links)
    const interactiveElements = document.querySelectorAll('a, button, .game-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            customCursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
    });
});
