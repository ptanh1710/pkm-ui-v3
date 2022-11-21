import React from 'react';
import { Header, Footer } from '../components';

function NoSidebar({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default NoSidebar;
