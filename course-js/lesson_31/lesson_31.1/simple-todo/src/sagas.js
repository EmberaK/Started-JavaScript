import { put, takeLatest } from 'redux-saga/effects';

function* handleAddTodo(action) {
  yield put({ type: 'ADD_TODO_SUCCESS', payload: action.payload });
}

function* handleDeleteTodo(action) {
  yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
}

function* handleToggleTodo(action) {
  yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: action.payload });
}

function* handleEditTodo(action) {
  yield put({ type: 'EDIT_TODO_SUCCESS', payload: action.payload });
}

export default function* rootSaga() {
  yield takeLatest('ADD_TODO', handleAddTodo);
  yield takeLatest('DELETE_TODO', handleDeleteTodo);
  yield takeLatest('TOGGLE_TODO', handleToggleTodo);
  yield takeLatest('EDIT_TODO', handleEditTodo);
}
