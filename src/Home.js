import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Headphones from "./components/Headphones";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <>
            <Header />
            {/* <Collection info={data} /> */}
            <Headphones info={data} />
            <p>hiiiii</p>
        </>
    );
};
export default Home;
