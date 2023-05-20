import React, { useEffect, useState } from "react";
import CommentList from "./components/CommentList";

const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [count]);

    return (
        <div className='container'>
            <CommentList />
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default About;
