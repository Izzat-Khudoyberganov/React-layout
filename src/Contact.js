import React, { useEffect, useState } from "react";
import Calculate from "./components/Calculate";

const Contact = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <>
            <Calculate info={data} />
        </>
    );
};
export default Contact;
