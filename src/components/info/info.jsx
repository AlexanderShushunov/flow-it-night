import React from 'react';
import './info.css';

export const Info = ({snapshot}) => (
    <div className="info">
        {formatState(snapshot)}
    </div>
);

function formatState(snapshot) {
    switch (snapshot.result) {
        case 'draw':
            return 'Ничья';
        case 'win':
            return formatWinner(snapshot.winner);
        default:
            return `Ход ${snapshot.player}`;
    }
}

function formatWinner(winner) {
    if (winner === 'X') {
        return 'Кресты рулят!';
    } else {
        return 'Нолики всех порвали!';
    }
}
