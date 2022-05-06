import React from "react";
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:3002/getVehicules",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
  });

  return (
    <>
    </>
  );
}

export default App;
