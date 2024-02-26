import React from 'react';
import Admin from '../Admin';
import { Route, Routes } from 'react-router';
import MainPage from '../Page/MainPage';

const MainRoutes = () => {
    const PUBLIC = [
        { link: "/admin", element: <Admin/>, id: 1 },
        { link: "/", element: <MainPage/>, id: 2 },
        { link: "/", element: <MainPage/>, id: 2 }

    ];

    return (
        <Routes>
            {PUBLIC.map((el) => (
                <Route path={el.link} element={el.element} key={el.id}/> 
            ))}
        </Routes>
    );
};

export default MainRoutes;
