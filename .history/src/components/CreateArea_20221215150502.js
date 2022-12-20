import React, { useState } from 'react'

const CreateArea = () => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    return (
        <div>
            <form className='create-note'>
                <input type="text" name="title" placeholder='Title' />
                <textarea
                    name="content"
                    rows="3" placeholder='Take a note...' />
            </form>
        </div>
    )
}

export default CreateArea