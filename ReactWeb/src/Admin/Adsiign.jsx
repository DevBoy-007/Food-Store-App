import P007 from "../Public/P007.png"
import { useState } from "react";
import axios from "axios";
function Adsiign(props) {
  const [Adminname, setAdminname] = useState(null) ///   login object states or data properties
  const [Adminemail, setAdminemail] = useState(null) ///   login object states or data properties
  const [Adminpassword, setAdminpassword] = useState(null) ///   login object states or data properties
  const [Adminpasscode, setAdminpasscode] = useState(null) ///   login object states or data properties
  const SignIn = async (Adminname, Adminemail, Adminpassword, Adminpasscode) => {
    try {
      if (Adminpasscode == "2001") {
        const loginresponse = await axios.post("http://localhost:3000/AdminSignIn//AdsignIn", {
          Adminname,
          Adminemail,
          Adminpassword,
        });
        if (loginresponse.data.error) {
          alert(loginresponse.data.error);
        }
        if (loginresponse.data.response) {
          alert(loginresponse.data.response);
          // return navigate("/admin");

        }
      }
      else {
        alert("You have not Admin acess to create account");
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="w-3/4   h-5/6  bg-stone-900 shadow-2xl shadow-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        <div className="  font-bold text-center pt-3  text-red-700 w-full  h-20 bg-black">
          <h1> ADMIN</h1>
        </div>
        <div className=" flex  box-border w-full h-5/6 bg-stone-800">
          <div className="  w-1/2  h-full bg-yellow-500">
            <img src={P007} className=" w-full h-full"></img>
          </div>
          <div className=" flex  box-border flex-col  gap-5 pl-12  pt-10 w-1/2  h-full bg-stone-800">
            <input type="text" className="  text-white font-bold bg-stone-800 w-96 h-10 outline-0" required placeholder="Name" onChange={(e) => { setAdminname(e.target.value) }} ></input>
            <input type="email" className=" text-white font-bold bg-stone-800   w-96  h-10 outline-0" onChange={(e) => { setAdminemail(e.target.value) }} required placeholder="Email"></input>
            <input type="password" className=" text-white font-bold bg-stone-800 w-96  h-10 outline-0" onChange={(e) => { setAdminpassword(e.target.value) }} required placeholder="Password"></input>
            <input type="password" className=" text-white font-bold bg-stone-800  w-96  h-10 outline-0" onChange={(e) => { setAdminpasscode(e.target.value) }} required placeholder="Admin-Passcode"></input>
            <hr className=" w-96"></hr>
            <label className=" pl-2 font-semibold  text-white">You have account then <span onClick={() => { props.fun("Loginform") }}>login !</span></label>
            <button onClick={() => { SignIn(Adminname, Adminemail, Adminpassword, Adminpasscode) }} className=" text-red-700  bg-stone-800 text-center w-28 h-10 ml-32 outline-0">SignIn</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Adsiign;