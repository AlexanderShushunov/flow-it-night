// @flow
import React from 'react';
import './cell.css';
import type {Token} from '../../game';

type CellProps = {
    token: Token,
    highlight: boolean,
    onClick: () => mixed
}

export const Cell = ({token, highlight, onClick}: CellProps) => (
    <div
        className={`cell ${tokenToClass(token)} ${highlightToClass(highlight)}`}
        onClick={onClick}
    />
);

function tokenToClass(token) {
    switch (token) {
        case 'X':
            return 'cell--X';
        case 'O':
            return 'cell--O';
        default:
            return '';
    }
}

function highlightToClass(highlight) {
    if (highlight) {
        return 'cell--highlight';
    } else {
        return '';
    }
}