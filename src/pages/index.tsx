import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition , animated } from 'react-spring'
import Registration from './RegistrationPage/index'
import Auth from './AuthPage/index'


// const Auth = lazy(() => import("./AuthPage"));
// const Registration = lazy(() => import("./RegistrationPage"));

export const Routing = () => {
    const location = useLocation()
    const transitions = useTransition(location, {
        from:{ opacity: 1, transform: 'perspective(900px) rotateY(180deg)' },
        enter:{ opacity: 1, transform: 'perspective(900px) rotateY(0)' },
        // leave:{ opacity: 1, transform: 'perspective(900px) rotate(-360deg)' }
    })
    return (
        <>
            {transitions((styles, item) => (
                <animated.div style={styles}>
                    <Routes>
                        <Route path="/" element={<Auth />} />
                        <Route path="/registration" element={<Registration />} /> 
                    </Routes>
                </animated.div>
            ))}
        </>
        
    );
};