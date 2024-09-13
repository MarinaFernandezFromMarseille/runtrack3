const tiles = Array.from(document.querySelectorAll('.tile'));
const emptyTile = document.getElementById('empty');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');

// Initialisation du plateau avec une configuration aléatoire
function shuffleTiles() {
    const shuffledTiles = tiles.sort(() => Math.random() - 0.5);
    shuffledTiles.forEach((tile, index) => {
        document.getElementById('game-container').appendChild(tile);
    });
    message.textContent = '';
    restartButton.style.display = 'none';
}

// Vérification si une tuile peut se déplacer dans la case vide
function canMove(tile) {
    const tilePos = tile.getBoundingClientRect();
    const emptyPos = emptyTile.getBoundingClientRect();
    
    const isAdjacent = Math.abs(tilePos.top - emptyPos.top) + Math.abs(tilePos.left - emptyPos.left) === emptyPos.width;
    return isAdjacent;
}

// Déplacer une tuile
function moveTile(tile) {
    if (canMove(tile)) {
        // Echanger les positions des tuiles
        emptyTile.parentNode.insertBefore(tile, emptyTile);
    }
}

// Vérifier si la configuration est gagnante
function checkWin() {
    const currentTiles = Array.from(document.querySelectorAll('.tile'));
    const correctOrder = tiles.every((tile, index) => tile.id === `tile${index + 1}`);
    
    if (correctOrder) {
        message.textContent = 'Vous avez gagné !';
        restartButton.style.display = 'block';
        // Bloquer le jeu
        tiles.forEach(tile => tile.removeEventListener('click', handleClick));
    }
}

// Gestion du clic sur une tuile
function handleClick(e) {
    moveTile(e.target);
    checkWin();
}

// Initialisation du jeu
function initGame() {
    shuffleTiles();
    tiles.forEach(tile => tile.addEventListener('click', handleClick));
}

// Recommencer la partie
restartButton.addEventListener('click', initGame);

// Lancer la première partie
initGame();
