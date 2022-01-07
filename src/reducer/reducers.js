import { ADD_TASK, GET_TASK } from "../containers/TaskList/constants";
import { FETCHING, SUCCESS, FAILED } from "../Utils/ActionType";
import produce from "immer";

const initialState = {
  taskList: {
    isFetching: false,
    data: [],
  },
  status: true,
};

export const rootReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING(ADD_TASK):
        draft.taskList.isFetching = true;
        break;
      case SUCCESS(ADD_TASK):
        draft.taskList.isFetching = false;
        draft.taskList.data.push(action.payload);
        break;
      case FAILED(ADD_TASK):
        draft.taskList.isFetching = false;
        break;

      default:
        break;
    }
    switch (action.type) {
      case FETCHING(GET_TASK):
        draft.taskList.isFetching = true;
        break;
      case SUCCESS(GET_TASK):
        draft.taskList.isFetching = false;
        draft.status = true;
        alert("successfully get data");
        break;
      case FAILED(GET_TASK):
        draft.taskList.isFetching = false;
        draft.status = false;
        alert("get data failed");
        break;

      default:
        break;
    }
  });
