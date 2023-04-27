import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Registration from "./RegistrationPage/index";
import Auth from "./AuthPage/ui";
import Home from "./HomePage/ui";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../shared/store";
import { checkAuth } from "../shared/api/user";
// import { setAuth } from '../shared/store/user/userSlice'
import { Settings } from "../process/settings/ui";
import { UserPage } from "./UserPage/ui";
import CoursePage from "./СoursePage/ui";
import MessagePage from "./MessagePage/ui";
import CatalogPage from "./CatalogPage/ui";
import { $user, getUserFx } from "../shared/store/user/user";
import { useStore } from "effector-react";
// const Auth = lazy(() => import("./AuthPage"));
// const Registration = lazy(() => import("./RegistrationPage"));

export const Routing = () => {
  const user = useStore($user);
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 1, transform: "perspective(900px) rotateY(180deg)" },
    enter: { opacity: 1, transform: "perspective(900px) rotateY(0)" },
  });

  React.useEffect(() => {
    getUserFx();
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {transitions((styles, item) => (
          <animated.div style={styles}>
            <Routes>
              <Route path="/auth" element={user ? <Home /> : <Auth />} />
              <Route
                path="/registration"
                element={user ? <Home /> : <Registration />}
              />
            </Routes>
          </animated.div>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user" element={user ? <UserPage /> : <Auth />} />
        <Route path="catalog/course/:id" element={<CoursePage />} />
        <Route path="/message" element={user ? <MessagePage /> : <Auth />} />
      </Routes>
    </>
  );
};
