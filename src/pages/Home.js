import React, {useEffect, useContext} from 'react'

import './Home.css'
import SpotifyContext from '../context/SpotifyContext'
import GenreResults from '../components/GenreResults'

function Home() {
  const {getToken, getGenres} = useContext(SpotifyContext);

  useEffect(() => {
    getToken()
  }, [])

  return (
    <div className="main">
      <div className="nav-bar">
        <button className="action-btn" onClick={getGenres}>
          Get Genres
        </button>
      </div>
      <div className="body">
        <GenreResults />
      </div>
    </div>
  )
}

export default Home