import "./App.css";
import React, { useState } from "react";

function App() {
  const [edward, setEdward] = useState(0);
  const [jacob, setJacob] = useState(0);

  const decrementEdward = () => {
    setEdward(edward - 1);
  };

  const incrementEdward = () => {
    setEdward(edward + 1);
  };

  const decrementJacob = () => {
    setJacob(jacob - 1);
  };

  const incrementJacob = () => {
    setJacob(jacob + 1);
  };

  return (
    <div
      className="container-fluid text-center bg-primary"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "auto" }}>
        <div className="row">
          <h1 className="text-secondary">twilight points system</h1>
        </div>
        <br />
        <div className="row" style={{ width: "95%", margin: "auto" }}>
          <button className="col btn btn-secondary" onClick={decrementEdward}>
            -
          </button>
          <h3 className="col text-secondary">
            edward <br />
            <span style={{ color: "white" }}>{edward}</span>
          </h3>
          <button className="col btn btn-secondary" onClick={incrementEdward}>
            +
          </button>
        </div>
        <div className="row" style={{ width: "95%", margin: "auto" }}>
          <button className="col btn btn-secondary" onClick={decrementJacob}>
            -
          </button>
          <h3 className="col text-secondary">
            jacob <br />
            <span style={{ color: "white" }}>{jacob}</span>
          </h3>
          <button className="col btn btn-secondary" onClick={incrementJacob}>
            +
          </button>
        </div>
        <br />
        <img
          src="/edandjake.jpg"
          alt="edward and jacob"
          style={{ width: "75%", marginBottom: "35px" }}
        />
      </div>
    </div>
  );
}

export default App;
