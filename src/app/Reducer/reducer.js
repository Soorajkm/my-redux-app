import { init } from "../Incluedes";
export const appReducer = (state = init, action) => {
  switch (action.type) {
    case "NAME_UPDATE":
      return {
        ...state,
        name: action.payload,
      };
    case "LOC_UPDATE":
      return {
        ...state,
        loc: action.payload,
      };
  }
  return state;
};
