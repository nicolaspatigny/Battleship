import { Ship } from './ship';
import { Player } from './player';

export class Game {
    constructor() {
        this.player = new Player('Player');
        this.computer = new Player('Computer', true);
        this.currentPlayer = this.player;
        this.gameOver = false;
    }

    initialize() {
    }

    placeComputerShips() {
        const ships = [
            new Ship(5),
            new Ship(4),
            new Ship(3),
            new Ship(3),
            new Ship(2)
        ];

        ships.forEach(ship => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                const isHorizontal = Math.random() < 0.5;
                placed = this.computer.gameboard.placeShip(ship, x, y, isHorizontal);
            }
        });
    }

    playTurn(x, y) {
        if (this.gameOver) return false;

        let result;
        
        if (this.currentPlayer === this.player && x !== undefined && y !== undefined) {
            result = this.player.makeMove(x, y, this.computer.gameboard);
            if (result) {
                if (this.computer.gameboard.allShipsSunk()) {
                    this.gameOver = true;
                    return 'Player wins!';
                }
                this.currentPlayer = this.computer;
                return result;
            }
        }
        
        if (this.currentPlayer === this.computer) {
            result = this.computer.makeRandomMove(this.player.gameboard);
            if (result) {
                if (this.player.gameboard.allShipsSunk()) {
                    this.gameOver = true;
                    return 'Computer wins!';
                }
                this.currentPlayer = this.player;
                return result;
            }
        }

        return false;
    }
}