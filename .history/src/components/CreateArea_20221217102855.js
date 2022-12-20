import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@mui/icons-material/Add';
const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const [isEanble, setIsEanble] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        // console.log(note);
        // setNote({
        //     title: "",
        //     content: ""
        // });
    }

    return (
        <div>
            <form className='create-note'>
                <input type="text" name="title"
                    placeholder='Title' value={note.title}
                    onChange={handleChange} onClick={() => setIsEanble(true)} />
                {isEanble && (
                    <textarea
                        name="content"
                        value={note.content}
                        onChange={handleChange}
                        rows="3" placeholder='Take a note...'
                    />
                )}
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea