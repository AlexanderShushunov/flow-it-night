import './try-to-find-win-line';
import {tryToFindWinLine} from './try-to-find-win-line';

describe('tryToFindWinLine', () => {
    test('should return  horizontal winLine of X if it exist', () => {
        expect(tryToFindWinLine([
            ['X', 'O', 'empty'],
            ['X', 'X', 'X'],
            ['empty', 'O', 'O']
        ])).toEqual([
            {row: 1, column: 0},
            {row: 1, column: 1},
            {row: 1, column: 2}
        ]);
    });

    test('should return vertical winLine of O if it exist', () => {
        expect(tryToFindWinLine([
            ['O', 'X', 'empty'],
            ['O', 'empty', 'X'],
            ['O', 'X', 'O']
        ])).toEqual([
            {row: 0, column: 0},
            {row: 1, column: 0},
            {row: 2, column: 0}
        ]);
    });

    test('should return diagonal winLine of O if it exist', () => {
        expect(tryToFindWinLine([
            ['O', 'X', 'empty'],
            ['O', 'O', 'X'],
            ['empty', 'X', 'O']
        ])).toEqual([
            {row: 0, column: 0},
            {row: 1, column: 1},
            {row: 2, column: 2}
        ]);
    });

    test('should return undefined if there is not winLine', () => {
        expect(tryToFindWinLine([
            ['O', 'X', 'empty'],
            ['O', 'empty', 'X'],
            ['empty', 'X', 'O']
        ])).toBeUndefined();
    });
});

