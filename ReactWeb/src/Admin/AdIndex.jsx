import { useState } from "react";
import Adlogin from "./Adlogin";
import Adsiign from "./Adsiign";
function AdIndex() {
    const [Form, setform] = useState("Loginform")
    return (
        <>
            <div className=" flex justify-center items-center w-screen h-screen  bg-white">
                {Form == "Loginform" && <Adlogin fun={(Form) => { setform(Form) }} />}
                {Form == "Signform" && <Adsiign fun={(Form) => { setform(Form) }} />}
            </div>
        </>
    )
}
export default AdIndex;