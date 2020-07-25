import authReducer from './authReducer'
import noteReducer from './noteReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  firestore: firestoreReducer
});

export default rootReducer