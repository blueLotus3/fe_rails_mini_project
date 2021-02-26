import React, { useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import Display from './components/Display'



function App() {
  const url = "https://mini-tunr-ruby.herokuapp.com/playlists"

const [playlists,setPlaylists] = useState({})

const getPlaylists = () => {
  axios.get(url).then((response) => {
    setPlaylists(response.data)
  })
}


useEffect(() => {
  getPlaylists()
}, [])

  return (
    <div className="App">
     <Display playlists={playlists} />
     <Form />
    </div>
  );
}

export default App;
