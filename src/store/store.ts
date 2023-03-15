import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter";
import { counter1Reducer } from "./reducers/counter1";

export const rootReducers = combineReducers({
  counter: counterReducer,
  counter1: counter1Reducer,
});

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
