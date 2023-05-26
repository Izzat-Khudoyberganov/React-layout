import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Headphones from "./components/Headphones";
import axios from "axios";
import Form from "./components/Form";

const Home = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos`
        );
        if (res.status === 200) {
            setData(res.data);
        } else {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header name={"info"} />
            <Collection />
            <Headphones info={data} />
            <Form />
        </>
    );
};
export default Home;
