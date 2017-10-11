import React from 'react';
import './line.css';
import {Cell} from '../cell';

export const Line = ({number, row, isWinCell, onCellClick}) => (
    <div className="row">
        {row.map(
            (token, index) => (
                <Cell
                    key={`${number} x ${index}`}
                    token={token}
                    highlight={isWinCell(number, index)}
                    onClick={() => onCellClick(number, index)}
                />
            )
        )}
    </div>
);
