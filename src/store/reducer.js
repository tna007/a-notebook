import * as actionTypes from "./actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return state.concat({
        id: action.id + 1, // id = 1
        text: action.text,
        completed: action.completed,
      });
    case actionTypes.TOGGLE_NOTE:
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    // case actionTypes.DELETE_NOTE:
    //   return {
    //     ...state,
    //     notes: state.notes.filter((item) => item.id !== action.payload),
    //   };

    default:
      return state;
  }
};

export default reducer;
