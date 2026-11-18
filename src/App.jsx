import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const playerPromise = fetch("/data.json").then((res) => res.json());
function App() {
    const [coin, setCoin] = useState(50000);
    return (
        <>
            <Navbar coin={coin}></Navbar>
            <Banner></Banner>

            <Suspense fallback={<h3>Loading...</h3>}>
                <Players
                    playerPromise={playerPromise}
                    setCoin={setCoin}
                    coin={coin}
                ></Players>
            </Suspense>

            <Footer></Footer>

            {/* react-toastify */}
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
