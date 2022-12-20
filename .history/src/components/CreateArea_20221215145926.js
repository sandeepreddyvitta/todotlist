import React from 'react'

const CreateArea = () => {
    return (
        <div>
            <form className='create-note'>
                <input type="text" name="title" placeholder='Title' />
                <textarea
                    name="content"
                    rows="3" placeholder='Note' />
            </form>
        </div>
    )
}

export default CreateArea