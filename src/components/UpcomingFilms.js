import React from "react";

const UpcomingFilms = () => {

    const urlUpcoming = "https://www.imdb.com/calendar/?region=gb"

    return (
        <>
            <a href={urlUpcoming}>Click here to view more upcoming releases...</a>
        </>
    );
};

export default UpcomingFilms;