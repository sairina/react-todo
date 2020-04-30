import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

//saga 1: issues request to backend API (static JSON file) to fetch a todolist
export function* fetchToDoList() {
  const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  //when saga finishes loading data from API, dispatches w/put fn a render action with new list of todo items
  //new version of reducer captures action and updates state of app
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

//saga 2: listens to LOAD_TODO_LIST actiosn to trigger fetchToDoList saga
export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}

//sagas are generator functions (function*)
