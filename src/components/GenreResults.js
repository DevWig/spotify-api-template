import React, {useContext} from 'react'

import SpotifyContext from '../context/SpotifyContext'

function GenreResults() {
  const {genres, getPlaylists} = useContext(SpotifyContext)

  return (
    <>
      {genres.map((genre) => {
        return (
          <div className="card">
            <img src={genre.icons[0].url} alt="Genre Cover" className="card-image"/>
            <div className="card-body">
              <h2 className="card-title">{genre.name}</h2>
                <button className="link-btn" onClick={getPlaylists}>
                  See Playlists
                </button>
            </div>
          </div>
        )
            
      })}
    </>

  )
}

export default GenreResults