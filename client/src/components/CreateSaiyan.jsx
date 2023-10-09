import React, { useState } from "react";
import axios from "axios";



const CreateSaiyan = ({ allSaiyans, setAllSaiyans }) => {
    const [name, setName] = useState("");
    const [power_level, setPowerLevel] = useState("");
    const [ultimate_attack, setUltimate_Attack] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState([]);

    const formHandler = (event) => {
        event.preventDefault();
        console.log("form submitted");


        setErrors([]);

        if (isNaN(power_level)) {
            setErrors(["Power Level must be a valid number."]);
            return;
        }

        const newSaiyan = {
            name, power_level, ultimate_attack, age
        }
        axios.post("http://localhost:8000/api/saiyan", newSaiyan)
            .then(res => {
                setAllSaiyans([...allSaiyans, res.data]);

                console.log(res.data);
                setName("")
                setPowerLevel("")
                setUltimate_Attack("")
                setAge("")


            })
            .catch((err) => {
                console.log("** ", err)
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorMessages = Object.values(err.response.data.errors).map(
                        (error) => error.message
                    );
                    setErrors(errorMessages);
                } else {

                    setErrors(["An error occurred"]);
                }

            })
    }

    return <div className="createcont">
        <div className="form" >

            <div>
                <h1 oldh1>Create Your Saiyan</h1>
            </div>
            <div>
                <form onSubmit={formHandler}>
                    <div style={{ color: "red" }}>
                        {
                            errors.map((err, idx) => {
                                return (
                                    <p key={idx}>{err}</p>
                                )
                            })
                        }
                    </div>
                    <div className="input-container ic1" >
                        <label className="placeholder" htmlFor="name">Name Your Saiyan</label>
                        <div class="cut"></div>
                        <input className="input" type="text" placeholder=" " id="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-container ic2">
                        <p></p>
                        <label className="placeholder" htmlFor="age">Age</label>
                        <div class="cut"></div>
                        <input className="input" placeholder=" " type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
                    </div>
                    <div className="input-container ic3">
                        <label className="placeholder" htmlFor="power_level">Power Level</label>
                        <div class="cut"></div>
                        <input className="input" placeholder=" " type="number" id="power_level" value={power_level} onChange={(event) => setPowerLevel(event.target.value)} />
                    </div>
                    <div className="input-container ic4">
                        <label className="placeholder" htmlFor="ultimate_attack">Ultimate Attack</label>
                        <div class="cut"></div>
                        <input className="input" placeholder=" " type="text" id="ultimate_attack" value={ultimate_attack} onChange={(event) => setUltimate_Attack(event.target.value)} />
                    </div>
                    <button className="submit" >Prepare For Battle</button>
                </form>
            </div>

        </div>
    </div>
}
export default CreateSaiyan;
