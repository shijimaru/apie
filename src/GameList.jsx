import React from 'react';
import './style.css';

class GameList extends React.Component {
    fetchGames() {
        fetch('https://api.rawg.io/api/games?key=bcfbb4b8279e45f198b04f1a13ae063c')
            .then(response => response.json())
            .then(data => {
                const gamesList = data.results.map(game => `
                    <li>
                        <h2>${game.name}</h2>
                        <img src="${game.background_image}" alt="${game.name}" width="200" />
                        <p>Рейтинг: ${game.rating}</p>
                    </li>`);
                    
                document.getElementById('games').innerHTML = gamesList;
            });
    }

    render() {
        this.fetchGames()
        return (
            <div>
                <h1>Список игр</h1>
                <ul id="games"></ul>
            </div>
        );
    }
}

export default GameList;

