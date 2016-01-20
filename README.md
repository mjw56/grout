grout
=====

A thin wrapper around redux.

*Note: This is experimenal*

# Motivation

Redux works really well if you have a centralized location of all your reducers. However, imagine if you are building an application where multiple "apps" or components can be rendered onto the page. Imagine that they may not explicitly have access to each other's reducers but you would still like to sync them up together through the redux workflow. As I understand it, there is not really a good way to solve this right now because there is not a way to add new reducers to the store. Redux does offer ```replaceReducer```, however that requires that you have access to the previous reducers. But what if the component being added does not have access to those reducers?

This project is an experiment to see if I can provide a thin wrapper around the Redux API to offer this functionality. Essentially all it does is keep track of every reducer function. It exposes one additional api method, ```addReducer``` which does what it says, adds a reducer.

# Is this a good idea?

```
¯\_(ツ)_/¯
```

# Usage

## ES5

```html
<script src="dist/index.js"></script>
```

```js
var store = Grout.Store();

var foo = function foo(state, action) {
  return {
    foo: 'bar'
  }
}

store.addReducer({foo});
var state = store.getState(); // { foo: { foo: 'bar' } }
```

## ES6

```js
import {Store} from 'grout';

var store = Store();

var foo = function foo(state, action) {
  return {
    foo: 'bar'
  }
}

store = store.addReducer({foo});
console.log(store.getState()); // { foo: { foo: 'bar' } }
```

# Test

```bash
npm run test
```

# TODO

- [X] finish API
- [X] tests

# LICENSE

MIT