import { GET_TASK } from "../containers/TaskList/constants";
import { getTaskApi } from "../services";
import { FETCHING, SUCCESS, FAILED } from "../Utils/ActionType";

export const getTask = () => async (dispatch) => {
  dispatch({ type: FETCHING(GET_TASK) });
  const response = await getTaskApi();
  response === true
    ? dispatch({ type: SUCCESS(GET_TASK) })
    : dispatch({ type: FAILED(GET_TASK) });
};
