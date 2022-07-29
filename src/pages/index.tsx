import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition , animated } from 'react-spring'
import Registration from './RegistrationPage/index'
import Auth from './AuthPage/index'
import Home from "../pages/HomePage/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { checkAuth } from "../shared/api/user"
import { setAuth } from '../shared/store/user/userSlice'
// const Auth = lazy(() => import("./AuthPage"));
// const Registration = lazy(() => import("./RegistrationPage"));

export const Routing = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const location = useLocation()
    const dispatch = useDispatch()
    const transitions = useTransition(location, {
        from:{ opacity: 1, transform: 'perspective(900px) rotateY(180deg)' },
        enter:{ opacity: 1, transform: 'perspective(900px) rotateY(0)' },
        // leave:{ opacity: 1, transform: 'perspective(900px) rotate(-360deg)' }
    })
    
    React.useEffect(() => {

        const isAuthenticate = async () => {
            if (localStorage.getItem('token')) {
                const res = await checkAuth()
                if(res)
                    dispatch(setAuth(true))
            }
        }
        isAuthenticate()
    }, [])

    return (
        <>
            {transitions((styles, item) => (
                <animated.div style={styles}>
                    <Routes>
                        <Route path="/" element={isAuth ? <Home /> : <Auth />} />
                        <Route path="/registration" element={isAuth ? <Home /> : <Registration />} /> 
                    </Routes>
                </animated.div>
            ))}
        </>
        
    );
};