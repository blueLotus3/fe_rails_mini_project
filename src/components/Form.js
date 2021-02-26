import React from 'react'


const Form = (props) => {

    return(
        <div>
            <h3>Tunr Playlist</h3>
            <form>
                <label for="title">Title</label>
                <input type="text" name="title"/>
                <label for="artist">Artist</label>
                <input type="text" name="artist"/>
                <label for="time">Time</label>
                <input type="time" name="time"/>
                <input type="submit" name="add"/> 
            </form>
        </div>
    )
}

export default Form