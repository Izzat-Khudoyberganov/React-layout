import React, { useState } from "react";
import "./style.css";

const Calculate = () => {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [result, setResult] = useState(0);

    const incrementCount = (count) => {
        return count == firstCount
            ? setFirstCount(firstCount + 1)
            : setSecondCount(secondCount + 1);
    };

    const decrementCount = (count) => {
        return count == firstCount
            ? setFirstCount(firstCount - 1)
            : setSecondCount(secondCount - 1);
    };

    const calculateCount = () => {
        setResult(firstCount + secondCount);
    };

    return (
        <div className='calculate-wrapper'>
            <div className='container'>
                <div className='box'>
                    <div className='box-elements'>
                        <div className='count-box'>
                            <div className='count'>{firstCount}</div>
                            <div className='btn-group'>
                                <button
                                    className='count-btn increment-btn'
                                    onClick={() => incrementCount(firstCount)}
                                >
                                    Increment
                                </button>
                                <button
                                    className='count-btn'
                                    onClick={() => decrementCount(firstCount)}
                                >
                                    Decrement
                                </button>
                            </div>
                        </div>
                        <span className='operator'>+</span>
                        <div className='count-box'>
                            <div className='count'>{secondCount}</div>
                            <div className='btn-group'>
                                <button
                                    className='count-btn increment-btn'
                                    onClick={() => incrementCount(secondCount)}
                                >
                                    Increment
                                </button>
                                <button
                                    className='count-btn'
                                    onClick={() => decrementCount(secondCount)}
                                >
                                    Decrement
                                </button>
                            </div>
                        </div>
                        <span className='operator'>=</span>
                        <span className='count'>{result}</span>
                    </div>
                    <button className='result-btn' onClick={calculateCount}>
                        Result
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculate;
