import React from "react"


const Display = (props) => {
    console.log(props)

    const loaded = () => (
        <div className="playlist-div">
            {props.playlists.map((playlist) => (
                <h3>{playlist.title}</h3>
                
            ))}
        </div>
    )

    const loading = () =>  <h1>Loading...</h1>

    return props.playlists.length > 0 ? loaded() : loading()
}

export default Display