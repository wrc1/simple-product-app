import React from 'react';
import { Songs } from 'components/Songs/Songs';
import SongDetails from 'components/SongDetails/SongDetails';
export const App = () => {
    return (
        <div className={'ui container grid'}>
            <div className={'ui row'}>
                <div className={'column eight wide'}>
                    <Songs />
                    <SongDetails />
                </div>
            </div>
        </div>
    )
}