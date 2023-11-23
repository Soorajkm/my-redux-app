"use client";
import React, { useState } from "react";
import { appStore } from "@/app/Store";
export const B = () => {
  const [loc, setLocation] = useState();
  const fnLocation = (eve) => {
    setLocation(eve.target.value);
  };
  const fnSubmit = () => {
    appStore.dispatch({
      type: "LOC_UPDATE",
      payload: loc,
    });
  };
  return (
    <div>
      <h1>B</h1>
      <p>
        <b>Location: </b>
        <input onChange={fnLocation} />
      </p>
      <p>
        <button onClick={fnSubmit}>Submit</button>
      </p>
    </div>
  );
};
