// @flow
import {some, cloneDeep, times, constant, flatten} from 'lodash';
import {tryToFindWinLine} from './try-to-find-win-line';
import {is} from '../utils/is';
import type {Snapshot} from './model';

export const TicTacToe: {
    initial: Snapshot,
    next: (Snapshot, number, number) => Snapshot
} = {
    initial: {
        field: times(3, () => times(3, constant('empty'))),
        result: 'turn',
        player: toss()
    },
    next: (snapshot, row, column) => {
        if (!possibleSelection(snapshot, row, column)) {
            return snapshot;
        }
        if (snapshot.result !== 'turn') {
            return snapshot;
        }
        const newField = select(snapshot, row, column);
        const winLine = tryToFindWinLine(newField);
        if (winLine) {
            return {
                field: newField,
                result: 'win',
                winner: snapshot.player,
                winLine
            };
        }
        if (areAllCellsSelected(newField)) {
            return {
                field: newField,
                result: 'draw'
            };
        }
        return {
            field: newField,
            result: 'turn',
            player: changePlayer(snapshot)
        };
    }
};

export const isNormalCell = (snapshot: Snapshot) => {
    if (snapshot.result !== 'win') {
        return (row: number, column: number) => true;
    }
    const {winLine} = snapshot;
    return (row: number, column: number) =>
        !some(winLine, {row, column});
};

function toss() {
    return Math.random() > 0.5 ? 'X' : 'O';
}

function possibleSelection({field}, row, column) {
    return field[row][column] === 'empty';
}

function select({field, player}, row, column) {
    const newField = cloneDeep(field);
    newField[row][column] = player;
    return newField;
}

function changePlayer({player}) {
    if (player === 'X') {
        return 'O';
    }
    return 'X';
}

const areAllCellsSelected = field => !some(flatten(field), is('empty'));
