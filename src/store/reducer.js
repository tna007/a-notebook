import * as actionTypes from "./actions";
import noteServices from "../services/notes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;
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

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll();
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes,
    });
  };
};
export default reducer;
