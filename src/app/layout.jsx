import React from 'react';
import './layout.css';
import {ResetButton} from '../components/reset-button';
import {Board} from '../components/board';
import {Info} from '../components/info';

export const Layout =
    ({
         onResetClick,
         snapshot,
         isWinCell,
         onCellClick,
         canReset
     }) => (
        <div className="layout">
            <ResetButton onClick={onResetClick} disable={!canReset}/>
            <div className="layout__field-container">
                <Board
                    field={snapshot.field}
                    onCellClick={onCellClick}
                    isWinCell={isWinCell}
                />
            </div>
            <Info snapshot={snapshot} />
        </div>
    );
