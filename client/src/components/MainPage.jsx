import React from "react";
import CreateSaiyan from "./CreateSaiyan";
import DisplaySaiyans from "./DisplaySaiyans";
import FightSaiyan from "./FightSaiyan";
import { useState, useEffect } from "react";
import axios from "axios";
const AllSaiyans = () => {
    const [allSaiyans, setAllSaiyans] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/saiyan")
            .then((res) => {
                setAllSaiyans(res.data);
                console.log("Fetched data:", res.data);
            })
            .catch((err) => console.log(err))
    }, []);
    return (
        <div className="container">
            <CreateSaiyan allSaiyans={allSaiyans} setAllSaiyans={setAllSaiyans} />
            <DisplaySaiyans allSaiyans={allSaiyans} setAllSaiyans={setAllSaiyans} />
            <FightSaiyan allSaiyans={allSaiyans} setAllSaiyans={setAllSaiyans} />
        </div>

    )
}
export default AllSaiyans
