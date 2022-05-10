import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {
    const filmsNodes = films.map((film) => {
        return (
            <>
                <Film key={film.id} url={film.url} name={film.name}/>
            </>
        );
    });

    return (
        <>
            <ul>
                {filmsNodes}
            </ul>
        </>
    );
};

export default FilmList;