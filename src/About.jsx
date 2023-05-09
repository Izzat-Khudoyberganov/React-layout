import React, { useState } from "react";

const About = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div className='container'>
            <div className='content  fd-col mt-5'>
                <h3 className='count'>{count}</h3>
                <div className='btn-group'>
                    <button
                        className='btn btn-green'
                        onClick={incrementCount}
                        disabled={count == 10}
                    >
                        Increment
                    </button>
                    <button className='btn btn-yellow' onClick={resetCount}>
                        Reset
                    </button>
                    <button
                        className='btn btn-red'
                        onClick={decrementCount}
                        disabled={count == 0}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

// npm i react-router-dom
// hook
// state
