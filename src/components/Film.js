import React from "react";

const Film = ({name, url}) => {
    return (
        <>
            <li>
                <h4>
                    <a href={url}>{name}</a>
                </h4>
            </li>
        </>
    );
};

export default Film;