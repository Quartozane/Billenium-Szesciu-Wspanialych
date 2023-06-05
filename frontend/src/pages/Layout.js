import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import '../components/UI/navigation/WhereAreYou';
import WhereAreYou from '../components/UI/navigation/WhereAreYou';

const Layout = () => {
    return (
        <main>
            <Header />
            <WhereAreYou>
                {'Strona główna'}
            </WhereAreYou>
            <Outlet />
        </main>
    )
}

export default Layout
