// @flow
type Player = 'X'|'O';

export type Token = 'X'|'O'|'empty';

export type Row = Array<Token>;

export type Field = Array<Row>;

type Position = {
    row: number,
    column: number
};

type Line = Array<Position>;

type Turn = {
    field: Field,
    player: Player,
    result: 'turn'
}

type Draw = {
    field: Field,
    result: 'draw'
}

type Win = {
    field: Field,
    result: 'win',
    winner: Player,
    winLine: Line
}

export type Snapshot = Turn|Draw|Win
