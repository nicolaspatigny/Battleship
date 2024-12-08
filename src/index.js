import './style.css';
import { Game } from './modules/game';
import { Ship } from './modules/ship';

class GameUI {
    constructor() {
        this.game = new Game();
        this.playerBoard = document.getElementById('player-board');
        this.computerBoard = document.getElementById('computer-board');
        this.messageDisplay = document.getElementById('message');
        this.setupPhase = document.getElementById('setup-phase');
        this.startGameButton = document.getElementById('start-game');
        this.rotateShipButton = document.getElementById('rotate-ship');
        
        this.ships = [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];
        
        this.currentShipIndex = 0;
        this.isHorizontal = true;
        
        this.initialize();
    }

    initialize() {
        this.createBoards();
        this.setupEventListeners();
        this.computerBoard.style.display = 'none';
        this.setMessage('Place your Carrier (length: 5)', 'info');
    }

    createBoards() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                this.playerBoard.appendChild(cell);
            }
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;
                this.computerBoard.appendChild(cell);
            }
        }
    }

    setupEventListeners() {
        this.rotateShipButton.addEventListener('click', () => {
            this.isHorizontal = !this.isHorizontal;
            this.clearPlacementHighlight();
        });

        this.playerBoard.addEventListener('mouseover', (e) => {
            if (this.currentShipIndex < this.ships.length) {
                this.handleShipPlacementPreview(e);
            }
        });

        this.playerBoard.addEventListener('mouseout', () => {
            this.clearPlacementHighlight();
        });

        this.playerBoard.addEventListener('click', (e) => {
            if (this.currentShipIndex < this.ships.length) {
                this.handleShipPlacement(e);
            }
        });

        this.computerBoard.addEventListener('click', (e) => {
            if (e.target.classList.contains('cell') && !this.game.gameOver) {
                const row = parseInt(e.target.dataset.row);
                const col = parseInt(e.target.dataset.col);
                this.handlePlayerMove(row, col);
            }
        });
    }

    handleShipPlacementPreview(e) {
        if (!e.target.classList.contains('cell')) return;

        this.clearPlacementHighlight();
        
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        const shipLength = this.ships[this.currentShipIndex].length;
        const cells = this.getShipPlacementCells(row, col, shipLength);

        if (cells) {
            cells.forEach(cell => cell.classList.add('valid-placement'));
        } else {
            const invalidCells = this.getInvalidPlacementCells(row, col, shipLength);
            invalidCells.forEach(cell => cell.classList.add('invalid-placement'));
        }
    }

    getShipPlacementCells(row, col, length) {
        const cells = [];
        
        for (let i = 0; i < length; i++) {
            const newRow = this.isHorizontal ? row : row + i;
            const newCol = this.isHorizontal ? col + i : col;
            
            if (newRow >= 10 || newCol >= 10) return null;
            
            const cell = this.playerBoard.children[newRow * 10 + newCol];
            if (cell.classList.contains('ship')) return null;
            
            cells.push(cell);
        }
        
        return cells;
    }

    getInvalidPlacementCells(row, col, length) {
        const cells = [];
        
        for (let i = 0; i < length; i++) {
            const newRow = this.isHorizontal ? row : row + i;
            const newCol = this.isHorizontal ? col + i : col;
            
            if (newRow < 10 && newCol < 10) {
                const cell = this.playerBoard.children[newRow * 10 + newCol];
                cells.push(cell);
            }
        }
        
        return cells;
    }

    clearPlacementHighlight() {
        const cells = this.playerBoard.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.classList.remove('valid-placement', 'invalid-placement');
        });
    }

    handleShipPlacement(e) {
        if (!e.target.classList.contains('cell')) return;

        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        const currentShip = this.ships[this.currentShipIndex];
        const ship = new Ship(currentShip.length);

        if (this.game.player.gameboard.placeShip(ship, row, col, this.isHorizontal)) {
            this.renderPlayerBoard();
            this.updateShipList();
            this.currentShipIndex++;

            if (this.currentShipIndex < this.ships.length) {
                const nextShip = this.ships[this.currentShipIndex];
                this.setMessage(`Place your ${nextShip.name} (length: ${nextShip.length})`, 'info');
            } else {
                this.startGame();
            }
        }
    }

    updateShipList() {
        const shipElements = document.querySelectorAll('.ships-to-place div');
        shipElements[this.currentShipIndex].classList.add('placed');
    }

    startGame() {
        this.setupPhase.style.display = 'none';
        this.computerBoard.style.display = 'grid';
        this.game.placeComputerShips();
        this.setMessage('Game started! Attack the computer\'s board.', 'success');
    }

    renderPlayerBoard() {
        const board = this.game.player.gameboard.getBoard();
        const cells = this.playerBoard.getElementsByClassName('cell');

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = cells[i * 10 + j];
                const boardCell = board[i][j];

                if (boardCell instanceof Ship) {
                    cell.classList.add('ship');
                }
            }
        }
    }

    handlePlayerMove(row, col) {
        const result = this.game.playTurn(row, col);
        if (result) {
            this.updateCell(this.computerBoard, row, col, result);
            this.setMessage(result === 'hit' ? 'Hit!' : 'Miss!', result === 'hit' ? 'success' : 'error');

            if (!this.game.gameOver) {
                setTimeout(() => {
                    this.handleComputerMove();
                }, 500);
            }
        }

        if (this.game.gameOver) {
            this.setMessage(`Game Over! ${result}`, 'success');
        }
    }

    handleComputerMove() { 
        const result = this.game.playTurn();
        if (result && result !== 'Player wins!' && result !== 'Computer wins!') {
            const lastMove = this.game.player.gameboard.getLastMove();
            if (lastMove) {
                this.updateCell(this.playerBoard, lastMove.x, lastMove.y, result);
            }
        }

        if (this.game.gameOver) {
            this.setMessage(`Game Over! ${result}`, 'success');
        }
    }

    updateCell(board, row, col, result) {
        const index = row * 10 + col;
        const cells = board.getElementsByClassName('cell');
        const cell = cells[index];

        if (result === 'hit') {
            cell.classList.add('hit');
            this.setMessage('Hit!', 'success');
        } else if (result === 'miss') {
            cell.classList.add('miss');
            this.setMessage('Miss!', 'error');
        } else if (result === 'sunk') {
            cell.classList.add('hit');
            
            const gameBoard = board === this.playerBoard ? 
                            this.game.player.gameboard : 
                            this.game.computer.gameboard;
            
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (gameBoard.board[i][j] === 'sunk') {
                        const sunkIndex = i * 10 + j;
                        cells[sunkIndex].classList.remove('hit');
                        cells[sunkIndex].classList.add('sunk');
                    }
                }
            }
            
            this.setMessage('Ship Sunk!', 'success');
        }
    }

    setMessage(text, type) {
        this.messageDisplay.textContent = text;
        this.messageDisplay.className = `message ${type}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GameUI();
});