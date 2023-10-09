
import React from "react";

const TransformationDropdown = ({ id, selectedTransformation, setSelectedTransformation }) => {
    const calculatePowerLevel = (transformation) => {

        switch (transformation) {
            case "Base Form":
                return 100;
            case "Super Saiyan":
                return 500;
            case "Super Saiyan 2":
                return 1000;
            case "Super Saiyan 3":
                return 2000; // Update this value with the Super Saiyan 3 power level
            default:
                return 0;
        }
    };

    const handleTransformationChange = (event) => {
        const newTransformation = event.target.value;
        setSelectedTransformation((prevTransformations) => ({
            ...prevTransformations,
            [id]: newTransformation,
        }));
    };

    return (
        <select
            value={selectedTransformation[id] || "Base Form"}
            onChange={handleTransformationChange}
        >
            <option>Base Form</option>
            <option>Super Saiyan</option>
            <option>Super Saiyan 2</option>
            <option>Super Saiyan 3</option>
        </select>
    );
};

export default TransformationDropdown;
