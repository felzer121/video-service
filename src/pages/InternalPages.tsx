import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { Settings } from "../process/settings/ui";
import { withSuspense } from '../app/providers/suspens';

const Auth = React.lazy(() => import('./AuthPage/ui'));
const Home = React.lazy(() => import('./HomePage/ui'));
const CoursePage = React.lazy(() => import('./СoursePage/ui'));
const CatalogPage = React.lazy(() => import('./CatalogPage/ui'));
const UserPage = React.lazy(() => import('./UserPage/ui'));
const MessagePage = React.lazy(() => import('./MessagePage/ui'));

const InternalPages = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={isAuth ? <CatalogPage /> : <Auth />} />
            <Route path="settings" element={isAuth ? <Settings /> : <Auth />} /> 
            <Route path="user" element={isAuth ? <UserPage /> : <Auth />} /> 
            <Route path="catalog/course/:id" element={<CoursePage />} />
            <Route path="message" element={isAuth ? <MessagePage /> : <Auth />} />
        </Routes>
    );
};

export default withSuspense(InternalPages);