import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition , animated } from 'react-spring'
// import Registration from './RegistrationPage/ui'
// import Auth from './AuthPage/ui'
import Home from "./HomePage/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { checkAuth } from "../shared/api/user"
import { setAuth } from '../shared/store/user/userSlice'
import InternalPages from "./InternalPages";

const Auth = React.lazy(() => import('./AuthPage/ui'));
const Registration = lazy(() => import("./RegistrationPage/ui"));

export const Routing = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const [isload, setLoad] = React.useState(true)
    const location = useLocation()
    const dispatch = useDispatch()
    const transitions = useTransition(location, {
        from:{ opacity: 1, transform: 'perspective(900px) rotateY(180deg)' },
        enter:{ opacity: 1, transform: 'perspective(900px) rotateY(0)' }
    })
    
    React.useEffect(() => {
        (async () => {
            if (localStorage.getItem('token')) {
                const res = await checkAuth()
                if(res)
                    dispatch(setAuth(true))
            }
        })()
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
            <InternalPages />
        </>
        
    );
};
