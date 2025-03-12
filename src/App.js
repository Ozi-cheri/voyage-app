import React from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"; // Import CSS Module
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>  {/* Now Router is actually used */}
      <div className={styles.container}> {/* Apply CSS Module */}
        <NavigationBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home page</h1>} />
            <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
            <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
            <Route exact path="/contact" render={() => <h1>Contact</h1>} />
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
