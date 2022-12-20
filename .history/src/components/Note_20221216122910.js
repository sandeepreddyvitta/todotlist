import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {
    const handleClick = () => {

    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteForeverIcon />
            </button>

        </div>
    )
}

export default Note