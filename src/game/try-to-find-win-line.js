import {find, times, every} from 'lodash';
import {is} from '../utils/is';

const LINES = [
    ...times(3, row => times(3, column => ({row, column}))),
    ...times(3, column => times(3, row => ({row, column}))),
    times(3, row => ({row, column: row})),
    times(3, row => ({row, column: 2 - row}))
];

const areAllCellsSelectedByOnePlayer = field =>
    line => {
        const lineValues = line.map(({row, column}) => field[row][column]);
        return every(lineValues, is('X')) || every(lineValues, is('O'));
    };

export const tryToFindWinLine = field => find(LINES, areAllCellsSelectedByOnePlayer(field));
