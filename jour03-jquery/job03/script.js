function shuffle() {
    var grid = document.getElementById("game-container");
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
}

function loadGame() {
    shuffle();
}

window.addEventListener('click', function (e) {
    if (e.target.className.includes('tile')) {
        var emptyTile = document.querySelector('.empty');

        // Vérifie si la tuile cliquée est adjacente à la tuile vide
        if (getDistance(e.target.offsetLeft, e.target.offsetTop, emptyTile.offsetLeft, emptyTile.offsetTop) <= 110) {
            // Échange les classes et les images de fond
            emptyTile.className = "tile";
            emptyTile.style.backgroundImage = e.target.style.backgroundImage;
            emptyTile.setAttribute("data-id", e.target.getAttribute("data-id"));
            
            e.target.className = "empty";
            e.target.style.backgroundImage = "";
            e.target.setAttribute("data-id", "9"); // La case vide est désormais la case 9
        }
    }

    checkVictory();
});

function getDistance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.sqrt(a * a + b * b);
}

function checkVictory() {
    var tiles = document.querySelectorAll('#game-container > div');
    var score = 0;



    // Vérifie si les tuiles sont dans l'ordre en utilisant l'attribut data-id
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].getAttribute('data-id') === '' + (i + 1)) {
            score++;
            console.log('un point en plus');
        }
    }

    console.log("score: " + score);

    if (score >= 8) {
        var victoryTile = document.querySelector('.victory');
        victoryTile.style.opacity = 1;
        console.log('tas gagné gros porc');
    }
}

// Start the game
loadGame();