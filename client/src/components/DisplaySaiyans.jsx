import React, { useState, useEffect } from "react";
import axios from "axios";
import TransformationDropdown from "./TransformationDropdown";

const DisplaySaiyans = ({ allSaiyans, setAllSaiyans }) => {
    const [editSaiyan, setEditSaiyan] = useState(null);
    const [selectedTransformations, setSelectedTransformations] = useState({});

    const calculatePowerLevel = (transformation) => {
        switch (transformation) {
            case "Base Form":
                return 100;
            case "Super Saiyan":
                return 500;
            case "Super Saiyan 2":
                return 1000;
            case "Super Saiyan 3":
                return 2000;
            default:
                return 0;
        }
    };

    const handleTransformationChange = (event, saiyanId) => {
        const newTransformation = event.target.value;

        setSelectedTransformations((prevTransformations) => ({
            ...prevTransformations,
            [saiyanId]: newTransformation,
        }));
    };

    const handleEdit = (saiyan) => {
        setEditSaiyan(saiyan);
    };

    const updateHandler = () => {
        const updateSaiyan = {
            name: editSaiyan.name,
            power_level: editSaiyan.power_level,
            ultimate_attack: editSaiyan.ultimate_attack,
            age: editSaiyan.age,
        };

        axios
            .patch(`http://localhost:8000/api/saiyan/${editSaiyan.id}`, updateSaiyan)
            .then((res) => {
                const updatedSaiyans = allSaiyans.map((saiyan) =>
                    saiyan.id === editSaiyan.id ? { ...saiyan, ...res.data } : saiyan
                );
                setAllSaiyans(updatedSaiyans);

                setEditSaiyan(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteHandler = (id) => {
        axios
            .delete("http://localhost:8000/api/saiyan/" + id)
            .then((res) => {
                window.location.reload(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="tablepos" >
            <div className="newh1">
                <h1>Saiyans</h1>
            </div>
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Power Level</th>
                            <th>Ultimate Attack</th>
                            <th>Transformation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSaiyans.map((saiyan) => (
                            <tr key={saiyan.id}>
                                {saiyan.id === editSaiyan?.id ? (
                                    <React.Fragment>
                                        <td>
                                            <input className="edit"
                                                type="text"
                                                value={editSaiyan.name}
                                                onChange={(event) =>
                                                    setEditSaiyan({
                                                        ...editSaiyan,
                                                        name: event.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input className="edit"
                                                type="number"
                                                value={editSaiyan.age}
                                                onChange={(event) =>
                                                    setEditSaiyan({
                                                        ...editSaiyan,
                                                        age: event.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input className="edit"
                                                type="number"
                                                value={editSaiyan.power_level}
                                                onChange={(event) =>
                                                    setEditSaiyan({
                                                        ...editSaiyan,
                                                        power_level: event.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text" className="edit"
                                                value={editSaiyan.ultimate_attack}
                                                onChange={(event) =>
                                                    setEditSaiyan({
                                                        ...editSaiyan,
                                                        ultimate_attack: event.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td></td>
                                        <td>
                                            <button className="button2" onClick={updateHandler}>Update</button>
                                        </td>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <td>{saiyan.name}</td>
                                        <td>{saiyan.age}</td>
                                        <td>
                                            {saiyan.power_level *
                                                (selectedTransformations[saiyan.id]
                                                    ? calculatePowerLevel(selectedTransformations[saiyan.id])
                                                    : 1)}
                                        </td>
                                        <td>{saiyan.ultimate_attack}</td>
                                        <td>
                                            <select className="dropdown"
                                                id={saiyan.id}
                                                value={selectedTransformations[saiyan.id] || "Base Form"}
                                                onChange={(event) =>
                                                    handleTransformationChange(event, saiyan.id)
                                                }>
                                                <option>Base Form</option>
                                                <option>Super Saiyan</option>
                                                <option>Super Saiyan 2</option>
                                                <option>Super Saiyan 3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button className="button2" onClick={() => handleEdit(saiyan)}>Edit</button>
                                            <button className="button2" onClick={() => deleteHandler(saiyan.id)}>
                                                Destroy
                                            </button>
                                        </td>
                                    </React.Fragment>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplaySaiyans;


// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import TransformationDropdown from "./TransformationDropdown";
// import { Link } from "react-router-dom";
// const calculatePowerLevel = (transformation) => {
//     switch (transformation) {
//         case "Base Form":
//             return 100; // Update this value with the base power level
//         case "Super Saiyan":
//             return 500; // Update this value with the Super Saiyan power level
//         case "Super Saiyan 2":
//             return 1000; // Update this value with the Super Saiyan 2 power level
//         case "Super Saiyan 3":
//             return 2000; // Update this value with the Super Saiyan 3 power level
//         default:
//             return 0; // Default power level if no transformation is selected
//     }
// };

// const DisplaySaiyans = ({ allSaiyans, setAllSaiyans }) => {
//     const [editSaiyan, setEditSaiyan] = useState(null);
//     const [selectedTransformations, setSelectedTransformations] = useState({});
//     const handleTransformationChange = (event, saiyanId) => {
//         const newTransformation = event.target.value;

//         setSelectedTransformations((prevTransformations) => ({
//             ...prevTransformations,
//             [saiyanId]: newTransformation,
//         }));
//     };

//     const handleEdit = (saiyan) => {
//         setEditSaiyan(saiyan);
//     };

//     const updateHandler = () => {
//         const updateSaiyan = {
//             name: editSaiyan.name,
//             power_level: editSaiyan.power_level,
//             ultimate_attack: editSaiyan.ultimate_attack,
//             age: editSaiyan.age,
//         };

//         axios.patch(`http://localhost:8000/api/saiyan/${editSaiyan.id}`, updateSaiyan)
//             .then((res) => {
//                 console.log("inside the patch");
//                 const updatedSaiyans = allSaiyans.map((saiyan) =>
//                     saiyan.id === editSaiyan.id ? { ...saiyan, ...res.data } : saiyan
//                 );
//                 setAllSaiyans(updatedSaiyans);

//                 setEditSaiyan(null);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     const deleteHandler = (id) => {
//         axios.delete('http://localhost:8000/api/saiyan/' + id)
//             .then(res => {
//                 // eslint-disable-next-line no-restricted-globals
//                 location.reload();
//             })
//             .catch(err => console.log(err));

//     }


//     return (
//         <div>
//             <h1>Saiyans</h1>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Age</th>
//                             <th>Power Level</th>
//                             <th>Ultimate Attack</th>
//                             <th>Transformation</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allSaiyans.map((saiyan) => (
//                             <tr key={saiyan.id}>
//                                 {saiyan.id === editSaiyan?.id ? (
//                                     <React.Fragment>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={editSaiyan.name}
//                                                 onChange={(event) =>
//                                                     setEditSaiyan({
//                                                         ...editSaiyan,
//                                                         name: event.target.value,
//                                                     })
//                                                 }
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={editSaiyan.age}
//                                                 onChange={(event) =>
//                                                     setEditSaiyan({
//                                                         ...editSaiyan,
//                                                         age: event.target.value,
//                                                     })
//                                                 }
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={editSaiyan.power_level}
//                                                 onChange={(event) =>
//                                                     setEditSaiyan({
//                                                         ...editSaiyan,
//                                                         power_level: event.target.value,
//                                                     })
//                                                 }
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={editSaiyan.ultimate_attack}
//                                                 onChange={(event) =>
//                                                     setEditSaiyan({
//                                                         ...editSaiyan,
//                                                         ultimate_attack: event.target.value,
//                                                     })
//                                                 }
//                                             />
//                                         </td>
//                                         <td></td>
//                                         <td>
//                                             <button onClick={updateHandler}>Update</button>
//                                         </td>
//                                     </React.Fragment>
//                                 ) : (
//                                     <React.Fragment>
//                                         <td>{saiyan.name}</td>
//                                         <td>{saiyan.age}</td>
//                                         <td>{saiyan.power_level * (calculatePowerLevel(selectedTransformations[saiyan.id]) || 1)}</td>
//                                         <td>{saiyan.ultimate_attack}</td>
//                                         <td>

//                                             <select
//                                                 id={saiyan.id}
//                                                 value={selectedTransformations[saiyan.id] || "Base Form"}
//                                                 onChange={(event) => handleTransformationChange(event, saiyan.id)}
//                                             >
//                                                 <option>Base Form</option>
//                                                 <option>Super Saiyan</option>
//                                                 <option>Super Saiyan 2</option>
//                                                 <option>Super Saiyan 3</option>
//                                             </select>
//                                         </td>
//                                         <td>
//                                             <button onClick={() => handleEdit(saiyan)}>Edit</button>
//                                             <button onClick={() => deleteHandler(saiyan.id)}>Destroy</button>
//                                         </td>
//                                     </React.Fragment>
//                                 )}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default DisplaySaiyans;