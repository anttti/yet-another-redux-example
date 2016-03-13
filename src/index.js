import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'store/configureStore';
import { Root } from 'containers/Root';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
