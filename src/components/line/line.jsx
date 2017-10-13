// @flow
import React from 'react';
import './line.css';
import {Cell} from '../cell';
import type {Row} from '../../game';

type LineProps = {
    number: number,
    row: Row,
    isWinCell: (number, number) => boolean,
    onCellClick: (number, number) => mixed
}


export const Line = ({number, row, isWinCell, onCellClick}: LineProps) => (
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
