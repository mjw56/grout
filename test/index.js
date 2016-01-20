var expect = require('expect');
var Grout = require('../dist/index');

var store = Grout.Store();

expect(typeof store.addReducer).toBe('function');
expect(typeof store.getState).toBe('function');
expect(typeof store.dispatch).toBe('function');
expect(typeof store.replaceReducer).toBe('function');
expect(typeof store.subscribe).toBe('function');

var state = store.getState();

expect(state).toEqual({ INIT: '@@INIT' });

var bar = function bar(state, action) {
  return {
    bar: 'baz'
  }
};

store = store.addReducer({bar});

expect(store.getState()).toEqual({
  INIT: { INIT: '@@INIT' },
  bar: { bar: 'baz' }
});

