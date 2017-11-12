import React from 'react';
import { Route } from 'react-router-dom';
import Students from './Students';

export default function RouterOutlet(props) {
    return (
        <div>
            <Route exact={true} path="/" render={() => (
                <h1>Welcome</h1>
            )}/>

            <Route path="/students" component={ Students }/>
        </div>
    );
};