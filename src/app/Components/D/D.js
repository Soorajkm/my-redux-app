import React from "react";
import { connect } from "react-redux";

export let D = (props) => {
  const { n, l } = props;
  return (
    <div>
      <h1>D</h1>
      <p>
        <b>Name: {n}</b>
      </p>
      <p>
        <b>Location: {l}</b>
      </p>
    </div>
  );
};

const mapStringToProps = (state) => {
  return {
    n: state.appReducer.name,
    l: state.appReducer.loc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
D = connect(mapStringToProps, mapDispatchToProps)(D);
