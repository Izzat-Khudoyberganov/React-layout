import React, { useEffect, useState } from "react";
import CommentList from "./components/CommentList";

const About = () => {
    return (
        <div className='container'>
            <CommentList />
            {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
        </div>
    );
};

export default About;
