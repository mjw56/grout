import { combineReducers, createStore } from 'redux';

export function Store() {

  let reducers = {
    INIT: function init(state, action) {
      return { 
        INIT: '@@INIT'
      }
    }
  }; 

  let store = createStore(reducers['INIT']);

  function addReducer(reducer) {
    var currentState = this.getState();

    var reducersToAdd = [];

    Object.keys(reducer).forEach((r) => {
      // TODO: check if reducer is already present?
      reducers[r] = reducer[r];
    });

    return createStore(
      combineReducers(reducers),
      currentState
    );
  }

  store.addReducer = addReducer;

  return store;
}