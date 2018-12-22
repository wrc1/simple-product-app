import types from '../types';

const selectSong = song => {
    return {
        type: types.SELECT_SONG,
        payload: song
    }
}