const gridItems = document.getElementsByClassName('grid-item');

const Gameboard = (function() {
    const gameboard = new Array(9).fill(null);

    function updateBoard(index, marker) {
        if (gameboard[index] === '') {
            gameboard[index] = marker;
        }
    };

    function resetBoard() {
        gameboard.fill(null);
    }

    function getBoard() {
        const gameboardCopy = Array.from(gameboard);
        return gameboardCopy;
    }

})();

const GameController = (function() {

})();

function Player(name, marker) {
    return { name, marker };
}

