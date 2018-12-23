import React from 'react';
import { connect } from 'react-redux';
const SongDetails = props => {
    console.log(!props.song)
    if (!props.song) return null;
    return (
        <div className={'song-details'}>
            <div className='page-title'>Song Details:</div>
            <div className='song-title'>{props.song.title}</div>
            <div className='song-duration'>{props.song.duration}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);