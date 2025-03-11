import React from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"; // Import CSS Module

function App() {
  return (
    <div className={styles.container}> {/* Apply CSS Module */}
      <NavigationBar />
      <h1>Welcome to Voyage</h1>
    </div>
  );
}

export default App;
