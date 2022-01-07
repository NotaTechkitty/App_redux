import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_TASK } from "../containers/TaskList/constants";

import { addNewTaskApi } from "../services";
import { FAILED, FETCHING, SUCCESS } from "../Utils/ActionType";

function* addNewTask(action) {
  try {
    const response = yield call(addNewTaskApi, action.payload);
    yield put({ type: SUCCESS(ADD_TASK), payload: response });
  } catch (error) {
    yield put({ type: FAILED(ADD_TASK), error });
  }
}

export default function* mySaga() {
  //   yield takeEvery(FETCHING(ADD_TASK), addNewTask);
  yield takeLatest(FETCHING(ADD_TASK), addNewTask);
}
