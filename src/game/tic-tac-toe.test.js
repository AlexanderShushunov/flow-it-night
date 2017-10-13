// @flow
import {TicTacToe} from './tic-tac-toe';

const EMPTY_FIELD = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty']
];

describe('TicTacToe.intial', () => {
    test('should have the correct field', () => {
        expect(
            TicTacToe.initial.field
        ).toEqual(EMPTY_FIELD);
    });
});

describe('TicTacToe.next', () => {
    describe('should return the same snapshot if the game is over', () => {
        test('(win)', () => {
            const winSnapshot = {
                result: 'win',
                field: EMPTY_FIELD,
                winner: 'X',
                winLine: []
            };
            expect(
                TicTacToe.next(winSnapshot, 0, 0)
            ).toBe(winSnapshot);
        });
        test('(draw)', () => {
            const drawSnapshot = {
                result: 'draw',
                field: EMPTY_FIELD
            };
            expect(
                TicTacToe.next(drawSnapshot, 0, 0)
            ).toBe(drawSnapshot);
        });
    });

    const turnSnapshot = {
        result: 'turn',
        field: [
            ['X', 'empty', 'X'],
            ['empty', 'O', 'empty'],
            ['empty', 'empty', 'O']
        ],
        player: 'X'
    };

    test('should return the same snapshot if the cell is occupied', () => {
        expect(
            TicTacToe.next(turnSnapshot, 0, 0)
        ).toBe(turnSnapshot);
    });

    test('should change a player, if the turn is correct', () => {
        expect(
            (TicTacToe.next(turnSnapshot, 1, 0): any).player // If type is wrong, test will fail. Perfect )
        ).toBe('O');
    });

    test('should occupy the cell, if the turn is correct', () => {
        expect(
            TicTacToe.next(turnSnapshot, 1, 0).field[1][0]
        ).toBe('X');
    });

    test('should detect win winning turn', () => {
        expect(
            TicTacToe.next(turnSnapshot, 0, 1).result
        ).toBe('win');
    });
});
