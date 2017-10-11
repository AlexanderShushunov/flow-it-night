import React from 'react';
import './reset-button.css';

export const ResetButton = ({onClick, disabled}) => (
    <button className="reset-button" onClick={onClick} disabled={disabled}>
        Погнали по новой
    </button>
);
