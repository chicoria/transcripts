import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

import TranscriptsReducer from './reducer/TranscriptsReducer';

const reducer = combineReducers({
  transcriptsReducer: TranscriptsReducer
  })

export default createStore(reducer,
    composeWithDevTools(
        applyMiddleware( thunk)
      )
);
