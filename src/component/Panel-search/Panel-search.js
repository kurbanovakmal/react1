import React from "react";

import './Panel-search.css'


const PanelSearch = ({ FilterDone }) => {
    return (
        <div className="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            onChange={ FilterDone }></input>
        </div>
)};

export default PanelSearch