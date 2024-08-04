import axios from "axios";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar";
function Home() {
    return (
        <>
            <div className="  w-full h-screen bg-zinc-900">
                <header className="  w-full   shadow-2xl bg-lime-600 shadow-black">
                    <div className="  font-serif  text-center text-1x  bg-yellow-400  text-red-600"><h1>Bigbite</h1></div>
                    <Navbar />
                </header>
                <Sidebar />
                <Main />
            </div>


        </>
    )
}
export default Home;