import React from 'react';
import './cell.css';

export const Cell = ({token, highlight, onClick}) => (
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