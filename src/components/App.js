import {Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import React from "react";
import BlogPostContainer from "./BlogPostContainer";

function App() {
  return (
      <div>
          Hello!
          <Switch>
              <Route path={"/login"} component={LoginForm} />
              <Route path={"/"} component={BlogPostContainer} />
          </Switch>
      </div>

  );
}

export default App;
