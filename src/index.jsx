import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


let money = 28000

function formatMoney(num) {
    return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default formatMoney

ReactDOM.render(<App money={money}/>, document.getElementById('root'))