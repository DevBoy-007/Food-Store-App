import { useNavigate, Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
function Loginform() {
    const navigate = useNavigate()
    const [Username, setUsername] = useState(null) ///   login object states or data properties
    const [Userpassword, setUserpassword] = useState(null);

    const login = async (e) => {
        e.preventDefault();
        try {
            const loginresponse = await axios.post("http://localhost:3000/LoginPage/Login", {
                Username,
                Userpassword,
            });
            if (loginresponse.data.error) {
                alert(loginresponse.data.error);
            }
            if (loginresponse.data.response) {
                alert(loginresponse.data.response);
                return navigate("/admin");

            }

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <form className="transition ease-in-out delay-150  bg-black hover:-translate-y-1 hover:scale-110 duration-300 font-serif w-1/4 h-4/6 ml-4 rounded-lg shadow-2xl shadow-black ">
                <header className=" h-20" >
                    <h1 className=" text-red-800 py-3 text-center font-medium ">Login</h1>
                </header>
                <main className=" flex flex-col content-around py-10 h-60">
                    <label className=" text-red-800 text-lg font-normal  mx-5" >Username </label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} className=" text-white bg-zinc-800 text-justify w-72 mx-5 h-10 rounded-md" required placeholder="UserName" ></input>
                    <label className="  text-red-800 text-lg font-normal my-1 mx-5">Password</label>
                    <input type="password" onChange={(e) => { setUserpassword(e.target.value) }} className=" w-72 mx-5 h-10 rounded-md" required placeholder="Password" ></input>
                    <label className="  text-red-800 text-sm mx-5  mt-3 font-medium "> You don't have accout please signin !</label>
                </main>
                <footer className=" pt-4 h-20">
                    <button onClick={login} className="text-xl  bg-white  mx-10 w-60" >Login</button>
                </footer>
            </form>

        </>
    );
}
export default Loginform; 