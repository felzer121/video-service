// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("./Auth"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
        </Routes>
    );
};