import React from 'react';
import {Line} from './line';

export const Board = ({field, isWinCell, onCellClick}) => (
    <div>
        {field.map(
            (row, index) => (
                <Line
                    key={index}
                    number={index}
                    row={row}
                    isWinCell={isWinCell}
                    onCellClick={onCellClick}
                />
            )
        )}
    </div>
);
