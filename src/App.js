import React from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HELLO AWS from React App!</p>
        <p>We now have Auth!</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
