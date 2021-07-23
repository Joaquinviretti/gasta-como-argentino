import NavBar from "../NavBar/NavBar"
import Header from "../Header/Header"
import ItemContainer from "../ItemContainer/ItemContainer"
import Footer from "./Footer/Footer"
import "./App.scss"


const App = ({ money }) =>
    <>
        <NavBar money={money} />
        <Header money={money} />
        <ItemContainer>
        </ItemContainer>
        <Footer/>
    </>

export default App