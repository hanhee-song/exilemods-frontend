import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/store';

// TEMP
import { getModsFromTag } from './util/get_mods_from_tag';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getModsFromTag = getModsFromTag;
  ReactDOM.render(<App store={store}/>, root);
});
