// @flow
import React from 'react';
import {Line} from './line';
import type {Field} from '../game';

type BoardProps = {
    field: Field,
    isWinCell: (number, number) => boolean,
    onCellClick: (number, number) => mixed
}

export const Board = ({field, isWinCell, onCellClick}: BoardProps) => (
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
