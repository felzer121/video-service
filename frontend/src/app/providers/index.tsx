import React from "react";
import { BrowserRouter } from "react-router-dom";

export const withProviders = (component: () => React.ReactNode) => () => (
        <React.Suspense fallback={"load"}>
            <BrowserRouter>
                {component()}
            </BrowserRouter>
        </React.Suspense>
);