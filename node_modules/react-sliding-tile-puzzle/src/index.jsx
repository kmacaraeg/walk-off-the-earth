import React, { Component } from 'react';
import _ from 'lodash';
import '../semantic/semantic.min.css';
import * as PuzzleUtil from './puzzleUtil';
import { Clickable } from 'react-clickable';

class SlidingTilePuzzle extends Component {
    constructor(props) {
        super(props);
        const [blankElement, newArr] = this.generatePuzzle({ x: 2, y: 2 }, [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, ''],
        ]);
        this.state = {
            isOver: false,
            isSolvingPuzzle: false,
            newPuzzle: false,
            patternBoard: [[0, 1, 2], [3, 4, 5], [6, 7, '']],
            shuffledBoard: newArr,
            blankElement: blankElement,
        };
    }

    generatePuzzle = (blankElement, goalArr) => {
        let newArr = JSON.parse(JSON.stringify(goalArr));
        let newBlankElement = JSON.parse(JSON.stringify(blankElement));
        const moveFunc = [
            PuzzleUtil.moveUp,
            PuzzleUtil.moveDown,
            PuzzleUtil.moveLeft,
            PuzzleUtil.moveRight,
        ];
        const max = 300;
        const min = 1;
        const iterations = Math.floor(Math.random() * (max - min + 1)) + min;

        for (let i = 0; i < iterations; i++) {
            const nextMove = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            const [newestArr, moved] = moveFunc[nextMove](
                newBlankElement,
                newArr
            );
            if (moved) {
                newArr = newestArr;
                switch (PuzzleUtil.moves[nextMove]) {
                    case 'up':
                        newBlankElement.x = newBlankElement.x;
                        newBlankElement.y = newBlankElement.y - 1;
                        break;
                    case 'down':
                        newBlankElement.x = newBlankElement.x;
                        newBlankElement.y = newBlankElement.y + 1;
                        break;
                    case 'left':
                        newBlankElement.x = newBlankElement.x - 1;
                        newBlankElement.y = newBlankElement.y;
                        break;
                    case 'right':
                        newBlankElement.x = newBlankElement.x + 1;
                        newBlankElement.y = newBlankElement.y;
                        break;
                }
            }
        }
        return [newBlankElement, newArr];
    };

    solvePuzzle = (
        goalArr,
        root,
        maxSteps,
        skipBranch,
        blankElement,
        curArr
    ) => {
        if (PuzzleUtil.manhattanCost(goalArr, curArr) === 0) {
            this.setState({ isOver: true, isSolvingPuzzle: false });
            console.log(JSON.stringify(curArr));
            return root;
        } else if (maxSteps === root + 1) {
            this.setState({ isSolvingPuzzle: false });
            return `Could not solve puzzle in ${maxSteps} iterations.`;
        }
        console.log(JSON.stringify(curArr));
        try {
            const [up, movedUP] = PuzzleUtil.moveUp(blankElement, curArr);
            const [down, movedDOWN] = PuzzleUtil.moveDown(blankElement, curArr);
            const [left, movedLEFT] = PuzzleUtil.moveLeft(blankElement, curArr);
            const [right, movedRIGHT] = PuzzleUtil.moveRight(
                blankElement,
                curArr
            );

            let costs = [
                skipBranch === 'up' || !movedUP
                    ? [].concat(...JSON.parse(JSON.stringify(goalArr))).length +
                      1000
                    : PuzzleUtil.manhattanCost(goalArr, up),
                skipBranch === 'down' || !movedDOWN
                    ? [].concat(...JSON.parse(JSON.stringify(goalArr))).length +
                      1000
                    : PuzzleUtil.manhattanCost(goalArr, down),
                skipBranch === 'left' || !movedLEFT
                    ? [].concat(...JSON.parse(JSON.stringify(goalArr))).length +
                      1000
                    : PuzzleUtil.manhattanCost(goalArr, left),
                skipBranch === 'right' || !movedRIGHT
                    ? [].concat(...JSON.parse(JSON.stringify(goalArr))).length +
                      1000
                    : PuzzleUtil.manhattanCost(goalArr, right),
            ];

            const minCost = PuzzleUtil.moves[costs.indexOf(Math.min(...costs))];

            const pos = {};
            let newCurArr = [];
            let newSkipBranch = 'none';
            switch (minCost) {
                case 'up':
                    pos.x = blankElement.x;
                    pos.y = blankElement.y - 1;
                    newCurArr = up;
                    newSkipBranch = 'down';
                    break;
                case 'down':
                    pos.x = blankElement.x;
                    pos.y = blankElement.y + 1;
                    newCurArr = down;
                    newSkipBranch = 'up';
                    break;
                case 'left':
                    pos.x = blankElement.x - 1;
                    pos.y = blankElement.y;
                    newCurArr = left;
                    newSkipBranch = 'right';
                    break;
                case 'right':
                    pos.x = blankElement.x + 1;
                    pos.y = blankElement.y;
                    newCurArr = right;
                    newSkipBranch = 'left';
                    break;
            }

            PuzzleUtil.sleep(500).then(() => {
                this.setState({ shuffledBoard: newCurArr, blankElement: pos });
                return this.solvePuzzle(
                    goalArr,
                    root + 1,
                    maxSteps,
                    newSkipBranch,
                    pos,
                    newCurArr
                );
            });
        } catch (err) {
            this.setState({ isSolvingPuzzle: false });
            return err;
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.solvePuzzle !== this.props.solvePuzzle &&
            this.state.isSolvingPuzzle === false
        ) {
            this.setState({ isSolvingPuzzle: true }, () => {
                this.solvePuzzle(
                    this.state.patternBoard,
                    0,
                    this.props.maxIterations || 50,
                    'none',
                    this.state.blankElement,
                    this.state.shuffledBoard
                );
            });
        }

        if (prevProps.newPuzzle !== this.props.newPuzzle) {
            const [blankElement, newArr] = this.generatePuzzle({ x: 2, y: 2 }, [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, ''],
            ]);
            this.setState({
                isOver: false,
                shuffledBoard: newArr,
                blankElement: blankElement,
            });
        }
    }

    moveCurrentTile = (tilePos, blankElementPos, curArr) => {
        const newCurArr = JSON.parse(JSON.stringify(curArr));
        let moved = false;

        if (
            tilePos.y === blankElementPos.y &&
            (tilePos.x === blankElementPos.x - 1 ||
                tilePos.x === blankElementPos.x + 1)
        ) {
            newCurArr[blankElementPos.y][blankElementPos.x] =
                newCurArr[tilePos.y][tilePos.x];
            newCurArr[tilePos.y][tilePos.x] = '';
            moved = true;
        } else if (
            tilePos.x === blankElementPos.x &&
            (tilePos.y === blankElementPos.y - 1 ||
                tilePos.y === blankElementPos.y + 1)
        ) {
            newCurArr[blankElementPos.y][blankElementPos.x] =
                newCurArr[tilePos.y][tilePos.x];
            newCurArr[tilePos.y][tilePos.x] = '';
            moved = true;
        }
        return [newCurArr, moved];
    };

    handleClick = param => e => {
        const [newCurArr, moved] = this.moveCurrentTile(
            param,
            this.state.blankElement,
            this.state.shuffledBoard
        );
        if (moved) {
            this.setState({ shuffledBoard: newCurArr, blankElement: param });
        }
    };

    renderSquares() {
        const { image, size, level } = this.props;
        const positions = this.state.shuffledBoard;

        const squares = positions.map((arr, y) => {
            return arr.map((element, x) => {
                return (
                    <Clickable
                        key={element}
                        onClick={this.handleClick({ x, y })}
                    >
                        <PuzzleUtil.Cell
                            key={element}
                            size={size}
                            image={image}
                            level={3}
                            position={element}
                            max={_.flatten(this.state.patternBoard).length - 1}
                            isOver={this.state.isOver}
                        />
                    </Clickable>
                );
            });
        });

        return _.flatten(squares);
    }

    render() {
        const size = this.props.size;

        return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: 0,
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            >
                {this.renderSquares()}
            </div>
        );
    }
}

export default SlidingTilePuzzle;
