import types from '../types';
import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '2:15'},
        {title: 'Maraca', duration: '4:01'},
        {title: 'BackstreetBoys', duration: '3:05'},
        {title: 'Nsinc', duration: '5:02'},
        {title: 'BritnySpears', duration: '1:18'},
        {title: 'hi-five', duration: '4:35'},
        {title: 'timbre', duration: '3:26'}
    ]
}

const selectedSongReducer = (state = null, action) => {
    switch(types.SELECT_SONG) {
        case action.type: 
            return action.payload      
        
        default: return state
    }
}  
 
const reducers = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

export default reducers