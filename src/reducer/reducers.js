import { ADD_TASK } from "../constants";
import { FETCHING, SUCCESS, FAILED } from "../Utils/ActionType";
import produce from "immer";

const initialState = {
  taskList: {
    isFetching: false,
    data: [],
  },
};

export const rootReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING(ADD_TASK):
        draft.taskList.isFetching = true;
        console.log("fetching");
        break;
      case SUCCESS(ADD_TASK):
        draft.taskList.isFetching = false;
        draft.taskList.data.push(action.payload);
        console.log("success");
        break;
      case FAILED(ADD_TASK):
        draft.taskList.isFetching = false;
        alert("error");
        break;

      default:
        break;
    }
  });
