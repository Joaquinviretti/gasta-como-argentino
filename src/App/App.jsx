import NavBar from "../NavBar/NavBar"
import Header from "../Header/Header"
import ItemContainer from "../ItemContainer/ItemContainer"
import Footer from "./Footer/Footer"
import "./App.scss"


const App = ({ precio }) =>
    <>
        <NavBar precio={precio} />
        <Header precio={precio} />
        <ItemContainer>
        </ItemContainer>
        <Footer/>
    </>

export default App