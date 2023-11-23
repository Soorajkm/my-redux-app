"use client";
import React, { useState } from "react";
import { appStore } from "@/app/Store";
export const A = () => {
  const [name, setName] = useState();
  const fnName = (eve) => {
    setName(eve.target.value);
  };
  const fnSubmit = () => {
    appStore.dispatch({
      type: "NAME_UPDATE",
      payload: name,
    });
  };
  return (
    <div>
      <h1>A</h1>
      <p>
        <b>Name:</b> <input onChange={fnName} />
      </p>
      <p>
        <button onClick={fnSubmit}>Submit</button>
      </p>
    </div>
  );
};
