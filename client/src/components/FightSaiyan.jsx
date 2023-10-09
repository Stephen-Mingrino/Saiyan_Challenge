import React, { useState, useEffect } from "react";
import axios from "axios";

const FightSaiyan = () => {
    const [allSaiyans, setAllSaiyans] = useState([]);
    const [selectedSaiyan1, setSelectedSaiyan1] = useState(null);
    const [selectedSaiyan2, setSelectedSaiyan2] = useState(null);
    const [damageTakenSaiyan1, setDamageTakenSaiyan1] = useState(0);
    const [damageTakenSaiyan2, setDamageTakenSaiyan2] = useState(0);
    const [fightResult, setFightResult] = useState(null);
    const [fighting, setFighting] = useState(false);
    const [randomMoveSaiyan1, setRandomMoveSaiyan1] = useState("");
    const [randomMoveSaiyan2, setRandomMoveSaiyan2] = useState("");


    useEffect(() => {
        axios.get("http://localhost:8000/api/saiyan").then((res) => {
            const saiyanData = res.data.map((saiyan) => ({
                ...saiyan,
                power_level: saiyan.power_level,
            }));
            setAllSaiyans(saiyanData);
        });
    }, []);


    const fightMovesSaiyan1 = [
        { name: "Kamehameha", minDamage: 10000, maxDamage: 40000 },
        { name: "Spirit Bomb", minDamage: 10000, maxDamage: 50000 },
        { name: "Punch", minDamage: 3000, maxDamage: 7000 },
        { name: "kick", minDamage: 3500, maxDamage: 7500 },
        { name: "small ki blast", minDamage: 5000, maxDamage: 10000 },
    ];

    const fightMovesSaiyan2 = [
        { name: "Final Flash", minDamage: 10000, maxDamage: 45000 },
        { name: "Big Bang Attack", minDamage: 10000, maxDamage: 40000 },
        { name: "Punch", minDamage: 3000, maxDamage: 7000 },
        { name: "kick", minDamage: 3500, maxDamage: 7500 },
        { name: "small ki blast", minDamage: 5000, maxDamage: 10000 },
    ];


    function generateMove() {
        if (!selectedSaiyan1 || !selectedSaiyan2 || fighting) return;

        const randomMoveSaiyan1 =
            fightMovesSaiyan1[Math.floor(Math.random() * fightMovesSaiyan1.length)];
        const randomMoveSaiyan2 =
            fightMovesSaiyan2[Math.floor(Math.random() * fightMovesSaiyan2.length)];
        setRandomMoveSaiyan1(randomMoveSaiyan1.name);
        setRandomMoveSaiyan2(randomMoveSaiyan2.name);



        const damageSaiyan1 = getRandomDamage(
            randomMoveSaiyan1.minDamage,
            randomMoveSaiyan1.maxDamage
        );
        const damageSaiyan2 = getRandomDamage(
            randomMoveSaiyan2.minDamage,
            randomMoveSaiyan2.maxDamage
        );


        const updatedDamageTakenSaiyan1 = damageTakenSaiyan1 + damageSaiyan1;
        const updatedDamageTakenSaiyan2 = damageTakenSaiyan2 + damageSaiyan2;
        setDamageTakenSaiyan1(updatedDamageTakenSaiyan1);
        setDamageTakenSaiyan2(updatedDamageTakenSaiyan2);

        const remainingPowerSaiyan1 =
            selectedSaiyan1.power_level - updatedDamageTakenSaiyan1;
        const remainingPowerSaiyan2 =
            selectedSaiyan2.power_level - updatedDamageTakenSaiyan2;

        let winner = null;
        if (remainingPowerSaiyan1 <= 0 && remainingPowerSaiyan2 <= 0) {
            winner = null;
        } else if (remainingPowerSaiyan1 <= 0) {
            winner = selectedSaiyan2;
        } else if (remainingPowerSaiyan2 <= 0) {
            winner = selectedSaiyan1;
        }

        setFightResult({ winner });
    }

    function getRandomDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleFight = () => {
        generateMove();
    };

    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className="fightcard" >

            <div className="fightitems">
                <h1>Fight Saiyans</h1>
                <div>
                    <label>Saiyan:</label>
                    <select className="dropdown2" onChange={(e) => setSelectedSaiyan1(JSON.parse(e.target.value))}>
                        <option value="">Select a Saiyan</option>
                        {allSaiyans.map((saiyan) => (
                            <option key={saiyan.id} value={JSON.stringify(saiyan)}>
                                {saiyan.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Saiyan:</label>
                    <select className="dropdown2" onChange={(e) => setSelectedSaiyan2(JSON.parse(e.target.value))}>
                        <option value="">Select a Saiyan</option>
                        {allSaiyans.map((saiyan) => (
                            <option key={saiyan.id} value={JSON.stringify(saiyan)}>
                                {saiyan.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="button2 fightbutton1" onClick={handleFight}
                    disabled={!selectedSaiyan1 || !selectedSaiyan2 || fighting}>Fight</button>
                <button className="button2 fightbutton2" onClick={refreshPage}>Fight Again</button>
                {selectedSaiyan1 && selectedSaiyan2 && (

                    <div className="fighttext">
                        <p>
                            {selectedSaiyan1.name} vs {selectedSaiyan2.name}
                        </p>
                        <p>Damage Taken by {selectedSaiyan1.name}: {damageTakenSaiyan1}  |
                            Damage Taken by {selectedSaiyan2.name}: {damageTakenSaiyan2}</p>
                        <p>{selectedSaiyan1.name} used {randomMoveSaiyan1} {getRandomDamage.damageTakenSaiyan1} | {selectedSaiyan2.name} used {randomMoveSaiyan2} {getRandomDamage.damageTakenSaiyan2}</p>
                    </div>
                )}
                {fightResult && (
                    <div>
                        {fightResult.winner ? (
                            <div>
                                <p className="win">{`${fightResult.winner.name} wins the fight!`}</p>
                            </div>
                        ) : (
                            <p></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FightSaiyan;


