import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition , animated } from 'react-spring'
import Registration from './RegistrationPage/index'
import Auth from './AuthPage/ui'
import Home from "./HomePage/ui";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../shared/store";
import { checkAuth } from "../shared/api/user"
// import { setAuth } from '../shared/store/user/userSlice'
import { Settings } from "../process/settings/ui";
import { UserPage } from './UserPage/ui'
import CoursePage from "./СoursePage/ui";
import MessagePage from "./MessagePage/ui";
import CatalogPage from "./CatalogPage/ui";
import { getUserFx } from "../shared/store/user/user";
// const Auth = lazy(() => import("./AuthPage"));
// const Registration = lazy(() => import("./RegistrationPage"));

export const Routing = () => {
    // const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const location = useLocation()
    // const dispatch = useDispatch()
    const transitions = useTransition(location, {
        from:{ opacity: 1, transform: 'perspective(900px) rotateY(180deg)' },
        enter:{ opacity: 1, transform: 'perspective(900px) rotateY(0)' },
        // leave:{ opacity: 1, transform: 'perspective(900px) rotate(-360deg)' }
    })
    const isAuth = false
    
    React.useEffect(() => {
        getUserFx()
    
    }, [])

    return (
        <>
            <div style={{overflow: 'hidden'}}>
                {transitions((styles, item) => (
                    <animated.div style={styles}>
                        <Routes>
                            <Route path="/auth" element={isAuth ? <Home /> : <Auth />} />
                            <Route path="/registration" element={isAuth ? <Home /> : <Registration />} />
                        </Routes>
                    </animated.div>
                ))}
            </div>
             <Routes>
                <Route path="/" element={isAuth ? <Home /> : <Auth />} />
                <Route path="/catalog" element={isAuth ? <CatalogPage /> : <Auth />} />
                <Route path="/settings" element={isAuth ? <Settings /> : <Auth />} /> 
                <Route path="/user" element={isAuth ? <UserPage /> : <Auth />} /> 
                <Route path="catalog/course/:id" element={isAuth ? <CoursePage /> : <Auth />} />
                <Route path="/message" element={isAuth ? <MessagePage /> : <Auth />} />
            </Routes>
        </>
        
    );
};
