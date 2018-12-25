import React from 'react';
import { Store } from 'views/Store/Store'
export const App = () => {
    return (
        <div className={'ui container'}>
            <div className={'app'}>
                <Store />
            </div>
        </div>
    )
}