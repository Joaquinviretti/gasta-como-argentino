import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


let precio = 28000

function formatMoney(num) {
    return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

ReactDOM.render(<App precio={formatMoney(precio)}/>, document.getElementById('root'))