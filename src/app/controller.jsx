// @flow
import * as React from 'react';
import {isNormalCell, TicTacToe} from '../game';
import type {Snapshot} from '../game';
import {Layout} from './layout';

export class Controller extends React.Component<{}, { snapshot: Snapshot }> {

    state = {
        snapshot: TicTacToe.initial
    };

    selectCell = (row: number, column: number) => this.setState(
        ({snapshot}) => ({
            snapshot: TicTacToe.next(snapshot, row, column)
        })
    );

    resetGame = () => this.setState({
        snapshot: TicTacToe.initial
    });

    isWinCell = (row: number, column: number) => !isNormalCell(this.state.snapshot)(row, column);

    render() {
        return (<Layout
            onResetClick={this.resetGame}
            snapshot={this.state.snapshot}
            isWinCell={this.isWinCell}
            onCellClick={this.selectCell}
            canReset={this.state.snapshot.result !== 'turn'}
        />);
    }
}

