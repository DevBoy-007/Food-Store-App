import { useState } from "react";
function Adaside(props) {

    return (
        <aside className="  w-28  h-5/6 ">


            <ul className=" w-28  pt-8 h-full shadow-2xl shadow-black bg-black box-border flex flex-col  gap-16  ">
                <li onClick={() => { props.fun(true) }} className="text-center text-xl text-white cursor-pointer">Profile</li>
                <li className="text-center text-xl text-white cursor-pointer">Revenue</li>
                <li className="text-center text-xl text-white cursor-pointer">Employes</li>
                <li className="text-center text-xl text-white cursor-pointer">Branches</li>
                <li className="text-center text-xl text-white cursor-pointer">Products</li>

            </ul>

        </aside>
    )
}
export default Adaside;