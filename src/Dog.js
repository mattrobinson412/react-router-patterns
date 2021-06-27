import React from 'react';
import { Link, Redirect } from "react-router-dom";

// Component for an individual Dog in Dog app. //
const Dog = ({ dog }) => {

    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div className="Dog">
            <img src={dog.src} alt={dog.name}></img>
            <h1>{dog.name}</h1>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    );
};

export default Dog;