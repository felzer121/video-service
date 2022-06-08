import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withProviders = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={"load"}>
            {component()}
        </Suspense>
    </BrowserRouter>
);