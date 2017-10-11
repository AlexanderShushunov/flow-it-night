import React from 'react';
import {isNormalCell, TicTacToe} from '../game';
import {Layout} from './layout';

export class Controller extends React.Component {

    state = {
        snapshot: TicTacToe.initial
    };

    selectCell = (row, column) => this.setState(
        ({snapshot}) => ({
            snapshot: TicTacToe.next(snapshot, row, column)
        })
    );

    resetGame = () => this.setState({
        snapshot: TicTacToe.initial
    });

    isWinCell = (row, column) => !isNormalCell(this.state.snapshot)(row, column);

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

