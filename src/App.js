import React from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"; // Import CSS Module
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";





function App() {
  return (
    <Router>  {/* Now Router is actually used */}
      <div className={styles.container}> {/* Apply CSS Module */}
        <NavigationBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home page</h1>} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/contact" render={() => <h1>Contact</h1>} />
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
