import "./App.css";
import Profile from "./components/Profile";
import usericon from "./assets/usericon.png";
import { AppBarItem } from "./components/appbar";
import React from "react";

function App() {
  const userData = {
    name: "Malavika Praveen",
    avatar: usericon,
    designation: "Software Engineer",
    companyName: "Think Palm Technologies"
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppBarItem />
        <Profile
          imgUrl={userData.avatar}
          name={userData.name}
          designation={userData.designation}
          companyName={userData.companyName}
        />
      </header>
    </div>
  );
}

export default App;
