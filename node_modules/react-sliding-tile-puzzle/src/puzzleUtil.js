import React, { Component } from 'react';

const sleep = milliseconds =>
    new Promise(resolve => setTimeout(resolve, milliseconds));

const manhattanCost = (goalArr, curArr) => {
    let count = 0;

    for (let i = 0; i < curArr.length; i++) {
        for (let j = 0; j < curArr[i].length; j++) {
            if (curArr[i][j] !== goalArr[i][j] && curArr[i][j] !== '') {
                for (let k = 0; k < goalArr.length; k++) {
                    for (let f = 0; f < goalArr[k].length; f++) {
                        if (goalArr[k][f] === curArr[i][j]) {
                            count += Math.abs(k - i) + Math.abs(f - j);
                        }
                    }
                }
            }
        }
    }
    return count;
};

const moves = ['up', 'down', 'left', 'right'];

const moveUp = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.y - 1 >= 0 &&
        curArr[blankElement.y - 1][blankElement.x] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y - 1][blankElement.x];
        newCurArr[blankElement.y - 1][blankElement.x] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveDown = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.y + 1 < curArr.length &&
        curArr[blankElement.y + 1][blankElement.x] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y + 1][blankElement.x];
        newCurArr[blankElement.y + 1][blankElement.x] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveLeft = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.x - 1 >= 0 &&
        curArr[blankElement.y][blankElement.x - 1] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y][blankElement.x - 1];
        newCurArr[blankElement.y][blankElement.x - 1] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const moveRight = (blankElement, curArr) => {
    const newCurArr = JSON.parse(JSON.stringify(curArr));
    let moved = false;
    if (
        blankElement.x + 1 < curArr[blankElement.y].length &&
        curArr[blankElement.y][blankElement.x + 1] !== ''
    ) {
        newCurArr[blankElement.y][blankElement.x] =
            newCurArr[blankElement.y][blankElement.x + 1];
        newCurArr[blankElement.y][blankElement.x + 1] = '';
        moved = true;
    }
    return [newCurArr, moved];
};

const Piece = props => {
    const { image, size, side, x, y, blankElement, isOver } = props;

    return (
        <div
            style={{
                width: `${side}px`,
                height: `${side}px`,
                margin: '0 -1px -1px',
                border: '1px solid black',
                backgroundImage: `url(${image})`,
                backgroundSize: `${size}px ${size}px`,
                backgroundPosition: `-${x}px -${y}px`,
                opacity: `${isOver || !blankElement ? '1' : '0.2'}`,
                cursor: `${blankElement ? 'default' : 'hover'}`,
            }}
        />
    );
};

const Cell = props => {
    const { image, size, level, position, max, isOver } = props;
    const side = size / level;
    const blankElement = position === '';
    const pos = blankElement ? max : position;
    const x = (pos % level) * side;
    const y = Math.floor(pos / level) * side;

    return (
        <div className="piece">
            <Piece
                position={pos}
                image={image}
                size={size}
                side={side}
                x={x}
                y={y}
                blankElement={blankElement}
                isOver={isOver}
            />

            <style>{`
          .piece:hover {
            opacity: 0.8;
          }
        `}</style>
        </div>
    );
};

export {
    sleep,
    manhattanCost,
    moves,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    Cell,
    Piece,
};
