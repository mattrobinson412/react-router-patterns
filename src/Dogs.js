import React from 'react';
import { Link } from "react-router-dom";
import Dog from "./Dog";

// Component for Dogs homepage in Dog app. //
const Dogs = ({dogs}) => {
    return (
        <div className="Dogs">
            <h1>Dog Finder</h1>
            <div>
                {dogs.map(d => (
                <div key={d.name}>
                    <img src={d.src} alt={d.name} />
                    <h3 className="mt-3">
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h3>
                </div>
                ))}
            </div>
        </div>
    )
};

export default Dogs;