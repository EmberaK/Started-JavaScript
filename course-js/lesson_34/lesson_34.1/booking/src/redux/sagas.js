import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchHotels() {
  try {
    const response = yield call(axios.get, "http://localhost:5000/hotels");
    yield put({ type: "FETCH_HOTELS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_HOTELS_FAILURE", error });
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_HOTELS_REQUEST", fetchHotels);
}

export default rootSaga;
