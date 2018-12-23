import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../../actions'

class SongsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelectSong = ({song}) => () => {
        this.props.selectSong(song);
    }

    renderSongs = () => {
        return this.props.songs
        .map((song, key) => 
            <div 
                className={'item'} 
                key={key}>
                <div className={'right floated content'}>
                    <button 
                        className={'ui button primary'}
                        onClick={this.onSelectSong({song})}
                    >
                        Select
                    </button>    
                </div>
                <div className={'content'}>
                    {song.title}
                </div>
            </div>
            )
    }

    render() {
        //console.log(this.props)
        return(
            <div className={'songs ui spread list'}>
                {this.renderSongs()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSong: (song) => dispatch(selectedSong(song))
    }
}

export const Songs = connect(mapStateToProps, mapDispatchToProps)(SongsComponent);