import "./App.css";
import { HashRouter, Route, Routes as Switch } from "react-router-dom";
import PublicLayout from "./Layout/public";
import PrivateRoute from "./PrivateRoute";
import allRoutes from "./routes";
import React from "react";

const App = () => {
  const { PublicRoutes, PrivateRoutes } = allRoutes;
  const routes = [...PublicRoutes, ...PrivateRoutes];
  return (
    <HashRouter>
      <React.Suspense>
        <Switch>
          {React.Children.toArray(
            routes.map(({ path, exact, Component, type }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={
                  type === "public" ? (
                    <PublicLayout>
                      <Component />
                    </PublicLayout>
                  ) : (
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  )
                }
              />
            ))
          )}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
