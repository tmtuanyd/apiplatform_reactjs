import {Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import React from "react";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";
import BlogDetail from "./BlogDetail";

function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route path={"/login"} component={LoginForm} />
              <Route path={"/"} component={BlogPostContainer} />
              <Route path={"/blog-post/:id"} component={BlogDetail} />

          </Switch>
      </div>

  );
}

export default App;
