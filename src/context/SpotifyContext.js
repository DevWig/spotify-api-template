import { createContext, useReducer } from 'react'
import axios from 'axios'

import spotifyReducer from './SpotifyReducer'

const SpotifyContext = createContext();

