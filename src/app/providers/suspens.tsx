import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import Loader from "../../components/Loader/ui";

export const withSuspense = (component: () => React.ReactNode) => () => (
        <React.Suspense fallback={<Loader />}>
            {component()}
        </React.Suspense>
);