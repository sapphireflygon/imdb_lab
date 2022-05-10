import React, { useState } from "react";

const FilmForm = ({addFilm}) => {
    
    const [name, setName] = useState("");

    const [url, setUrl] = useState("");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        if (!nameToSubmit || !url) {
            return;
        };
        addFilm({name: nameToSubmit, url: url});
        setName('');
        setUrl('');
    };
    

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Film title goes here."
                    value={name}
                    onChange={handleNameChange}
                />
                <br/>
                <input
                    type="url"
                    placeholder="www.example.co.uk/"
                    value={url}
                    onChange={handleUrlChange}
                />
                <br/>
                <input
                    type="submit"
                    value="Post"
                />
            </form>
        </>
    );
};

export default FilmForm;