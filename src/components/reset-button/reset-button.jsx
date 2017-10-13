// @flow
import React from 'react';
import './reset-button.css';

type ResetButtonProps = {
    onClick: () => mixed,
    disabled: boolean
}

export const ResetButton = ({onClick, disabled}: ResetButtonProps) => (
    <button className="reset-button" onClick={onClick} disabled={disabled}>
        Погнали по новой
    </button>
);
