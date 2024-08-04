import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Adaside from "./Adaside";
import Admain from "./Admain";
import Adnav from "./Adnav";
function Adminlayout() {
    const [Option, setOption] = useState("Pizza");
    const [popup, setpopup] = useState(false);
    const navigate = useNavigate()
    return (
        <>
            <div className=" w-screen h-screen  bg-white">
                <header className="  flex flex-col  w-full  shadow-2xl shadow-black  bg-lime-600">
                    <div className="   h-16 flex font-serif  text-center  justify-center text-sm bg-black  text-red-600"><h1>ADMIN</h1></div>
                    <Adnav changeoption={(Option) => { setOption(Option) }}></Adnav>
                </header>
                <Adaside
                    fun={(popup) => { setpopup(popup) }}

                />
                <Admain options={Option}></Admain>

                {(popup &&
                    <div className=" rounded-2xl  text-white text-center w-60  h-20 absolute  bg-stone-800  top-24   left-28  flex  items-center justify-center  shadow-black">
                        <div></div>
                        <label className=" cursor-pointer" onClick={() => { return navigate("/"); }}>Logout</label>
                    </div>)
                }

            </div>
        </>
    )
}
export default Adminlayout;