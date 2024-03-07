import React, {useState} from 'react';

const Box = ({id, color, boxW, boxH, handleRemove}) => {
    const remove = () => {
        handleRemove(id)
    }

    return (
        <div>
        <div className="box" style={{backgroundColor: `${color}`, height: `${boxW}px`, width:`${boxH}px`}}>
        </div>
        <button onClick={remove}>X</button>
        </div>
    )
}

export default Box