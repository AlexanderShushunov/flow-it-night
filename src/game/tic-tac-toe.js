import {some, cloneDeep, times, constant, flatten} from 'lodash';
import {tryToFindWinLine} from './try-to-find-win-line';
import {is} from '../utils/is';

export const TicTacToe = {
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
                result: 'drown'
            };
        }
        return {
            field: newField,
            result: 'turn',
            player: changePlayer(snapshot)
        };
    }
};

export const isNormalCell = ({winLine}) => {
    return (row, column) =>
        !some(winLine, {row, column});
};

function toss() {
    return Math.random > 0.5 ? 'Х' : 'O';
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
