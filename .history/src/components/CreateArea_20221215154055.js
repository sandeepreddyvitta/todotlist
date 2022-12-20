import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const CreateArea = () => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setNote(prevnote => {
            return {
                ...prevnote,
                [name]: value
            }
        })
    }
    const submitNote = () => {

    }

    return (
        <div>
            <form className='create-note'>
                <input type="text" name="title" placeholder='Title' value={note.title} onChange={handleChange} />
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    rows="3" placeholder='Take a note...' />
                <Fab>
                    <ControlPointIcon />
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea