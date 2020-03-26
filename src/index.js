import React from 'react';
import { render } from 'react-dom';

import { store, persistor } from './helpers';

import './assets/styles/base.less';

import App from './containers/app';

const target = document.getElementById('root');

render(<App store={store} storePersistor={persistor} />, target);
