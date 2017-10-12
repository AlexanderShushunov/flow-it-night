// @flow
export type Player = 'X'|'O'; // Union Type && Literal Type

export type Token = 'X'|'O'|'empty';

export type Row = Array<Token>; // Array Type. alt - Token[]

export type Field = Array<Row>;

export type Position = { // Object Type
    row: number,
    column: number
};

export type Line = Array<Position>;

export type Snapshot = {
    field: Field,
    result: 'turn'|'draw'|'win',
    player?: Player,               // Optional property
    winner?: Player,
    winLine?: Line
}
