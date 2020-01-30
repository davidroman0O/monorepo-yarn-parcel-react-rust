import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

import { add  } from '@mono/critical/src/lib.rs'

if (module.hot) {
    module.hot.accept()
}

console.log("From rust :: ", add(5, 4));

ReactDOM.render(<App />, document.getElementById('root'))