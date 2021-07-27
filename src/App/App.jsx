import { useState } from 'react'
import NavBar from "../NavBar/NavBar"
import Header from "../Header/Header"
import ItemContainer from "../ItemContainer/ItemContainer"
import Footer from "./Footer/Footer"
import "./App.scss"



const App = () => {

    const [money,setMoney] = useState(22200)

    const onAdd = (precio) => {
        setMoney(money + precio)
    }


    return (
        <>
            <NavBar money = {money}/>
            <Header money = {money}/>
            <ItemContainer onAdd = {onAdd} />
            <Footer />
        </>
    )
}

export default App