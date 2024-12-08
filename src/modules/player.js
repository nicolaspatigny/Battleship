import { Gameboard } from './gameboard';

export class Player {
    constructor(name, isComputer = false) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = new Gameboard();
        this.movesMade = new Set();
    }

    makeMove(x, y, enemyBoard) {
        if (!enemyBoard) return false;
        
        if (this.isComputer) {
            return this.makeRandomMove(enemyBoard);
        }
        
        const moveKey = `${x},${y}`;
        if (this.movesMade.has(moveKey)) return false;
        
        this.movesMade.add(moveKey);
        return enemyBoard.receiveAttack(x, y);
    }

    makeRandomMove(enemyBoard) {
        if (!enemyBoard) return false;
        
        for (let attempts = 0; attempts < 100; attempts++) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const moveKey = `${x},${y}`;
            
            if (!this.movesMade.has(moveKey)) {
                this.movesMade.add(moveKey);
                const result = enemyBoard.receiveAttack(x, y);
                if (result) return result;
            }
        }
        
        return false;
    }
}