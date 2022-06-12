import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import TitleBar from "../titleBar/TitleBar";
import routes from "../../config/routeConfig";

const Layout = () => {
  return (
    <Router>
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <TitleBar />
          <div className="container">
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
