import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addToast, removeToast } from './actions';
import rootReducer from './reducers';
import ToasterContainer from './components/ToasterContainer';

const store = window.store = createStore(rootReducer);
window.addToast = addToast;
window.removeToast = removeToast;

store.dispatch(addToast({ content: 'My Toasty toast', type: 'success' }));
store.dispatch(addToast({ content: 'My Toasty toast 2', type: 'warning', icon: 'check' }));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <ToasterContainer />
    </Provider>
  ,
  document.getElementById('app')
);
