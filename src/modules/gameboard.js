import { Ship } from './ship';

export class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.ships = [];
        this.missedAttacks = [];
        this.lastMove = null;
    }

    createBoard() {
        return Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeShip(ship, x, y, isHorizontal) {
        if (!this.isValidPlacement(ship, x, y, isHorizontal)) {
            return false;
        }

        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                this.board[x][y + i] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[x + i][y] = ship;
            }
        }

        this.ships.push(ship);
        return true;
    }

    isValidPlacement(ship, x, y, isHorizontal) {
        if (!ship || x < 0 || y < 0 || x >= 10 || y >= 10) return false;

        if (isHorizontal) {
            if (y + ship.length > 10) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) return false;
            }
        } else {
            if (x + ship.length > 10) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) return false;
            }
        }

        return true;
    }

    receiveAttack(x, y) {
        
        if (!Number.isInteger(x) || !Number.isInteger(y) || 
            x < 0 || x >= 10 || y < 0 || y >= 10) {
            return false;
        }

        
        this.lastMove = { x, y };

        const cell = this.board[x][y];

        
        if (cell === null) {
            this.board[x][y] = 'miss';
            this.missedAttacks.push({ x, y });
            return 'miss';
        }
        
        
        if (cell === 'miss' || cell === 'hit' || cell === 'sunk') {
            return false;
        }

        
        if (cell instanceof Ship) {
            const ship = cell;
            ship.hit();
            this.board[x][y] = 'hit';
            
            
            if (ship.isSunk()) {
                
                this.markShipAsSunk(ship);
                return 'sunk';
            }
            return 'hit';
        }

        return false;
    }

    markShipAsSunk(sunkShip) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] === sunkShip || this.board[i][j] === 'hit') {
                    let cell = this.board[i][j];
                    if (cell === sunkShip || (cell === 'hit' && this.wasPartOfShip(i, j, sunkShip))) {
                        this.board[i][j] = 'sunk';
                    }
                }
            }
        }
    }

    wasPartOfShip(x, y, ship) {
        if (x > 0 && this.board[x-1][y] === ship) return true;
        if (x < 9 && this.board[x+1][y] === ship) return true;
        if (y > 0 && this.board[x][y-1] === ship) return true;
        if (y < 9 && this.board[x][y+1] === ship) return true;
        return false;
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    getBoard() {
        return this.board;
    }
    
    getLastMove() {
        return this.lastMove;
    }
}