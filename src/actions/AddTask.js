import { ADD_TASK } from "../containers/TaskList/constants";
import { FETCHING } from "../Utils/ActionType";
// import { addNewTaskApi } from "../services";
// import { FETCHING, SUCCESS, FAILED } from "../Utils/ActionType";

// export const addTask = (task) => async (dispatch) => {
//   dispatch({ type: FETCHING(ADD_TASK) });
//   try {
//     const response = await addNewTaskApi(task);
//     dispatch({ type: SUCCESS(ADD_TASK), payload: response });
//   } catch (error) {
//     dispatch({ type: FAILED(ADD_TASK) });
//   }
// };

export const addTask = (task) => {
  return {
    type: FETCHING(ADD_TASK),
    payload: task,
  };
};
