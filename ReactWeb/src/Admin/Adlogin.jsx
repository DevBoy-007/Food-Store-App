import { useNavigate } from "react-router-dom";
import Adpizza from "../Public/Adpizza.jpg"
import { useState } from "react";
import axios from "axios";
function Adlogin(props) {
    const navigate = useNavigate()
    const [Adminname, setAdminname] = useState(null) ///   login object states or data properties
    const [Adminemail, setAdminemail] = useState(null);
    const [Adminpassword, setAdminpassword] = useState(null);

    const login = async (Adminname, Adminemail, Adminpassword) => {
        try {
            const Adloginresponse = await axios.post("http://localhost:3000/AdminLogin//Adlogin", {
                Adminname,
                Adminemail,
                Adminpassword,
            });
            if (Adloginresponse.data.error) {
                alert(Adloginresponse.data.error);
            }
            if (Adloginresponse.data.response) {
                alert(Adloginresponse.data.response);
                return navigate("/admin");

            }

        }
        catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
            <div className="  w-3/4 h-5/6 bg-stone-800  shadow-2xl shadow-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"  >
                <div className=" text-center  font-bold  text-red-700 w-full  h-20  pt-2 bg-black">
                    <h1>ADMIN</h1>
                </div>
                <div className=" flex box-border w-full h-5/6 bg-stone-800">
                    <div className="  w-1/2  h-full  bg-white">
                        <div className=" w-full h-full  bg-neutral-800">
                            <img className=" w-full h-full" src={Adpizza}></img>
                        </div>
                    </div>
                    <div className=" flex box-border flex-col gap-5 pl-12  pt-20 w-1/2  h-full  bg-stone-800">
                        <input type="text" className="  text-white font-bold bg-stone-800 w-96 h-10 " onChange={(e) => { setAdminname(e.target.value) }} required placeholder="Name"  ></input>
                        <input type="email" className=" text-white font-bold bg-stone-800 w-96  h-10 outline-0" onChange={(e) => { setAdminemail(e.target.value) }} required placeholder="Email"></input>
                        <input type="password" className=" text-white font-bold bg-stone-800  w-96  h-10 outline-0" onChange={(e) => { setAdminpassword(e.target.value) }} required placeholder="Password"></input>
                        <hr className=" w-96"></hr>
                        <label className="  font-medium text-white" >Create your admin account then <span onClick={() => { props.fun("Signform") }}>signin !</span></label>
                        <button onClick={() => { login(Adminname, Adminemail, Adminpassword) }} className=" text-red-600 bg-stone-800 text-center w-28 h-10 ml-32 outline-0">LOGIN</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Adlogin