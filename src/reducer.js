import * as actionTypes from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat({ id: new Date(), text: action.data }),
      };
    case actionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload),
      };

    default:
      break;
  }

  return state;
};

const initialState = {
  notes: [],
};

export default reducer;
