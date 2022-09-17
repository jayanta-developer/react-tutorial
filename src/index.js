import react from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./Components/header";
import Headerch from "./Components/headerch";


const data = {
  name: "sovon",
  age: 24,
  Location: "India",
};

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position=> console.log(position),
    err=> console.log(err)
  )
  return (
    <div>
      <Headerch/>
      <h2>Teire are you all information </h2>
      <Header File={data} />
      <Header File={data} />
      <Header File={data} />
      <Header File={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
