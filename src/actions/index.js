import types from '../types';

export const selectedSong = song => {
    return {
        type: types.SELECT_SONG,
        payload: song
    }
}