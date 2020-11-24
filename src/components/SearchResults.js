import React from 'react';

function SearchResults (props) {
    return (
        <li>
            <h1>{props.title}</h1>
            <p>{props.image}</p>
            <p>{props.imageType}</p>
        </li>
    )
}

export default SearchResults;