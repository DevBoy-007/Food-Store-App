import Wrap from "./Wrap";
import Burger from "./Burger";
import Pizza from "./Pizza";
import Fries from "./Fries";
import Desserts from "./Desserts";
import Shawarma from "./Shawarma";
import Drinks from "./Drinks";
function Admain(props) {
    return (
        <>
            <main className=" pt-8   rounded-3xl absolute  left-40  top-28  w-5/6  h-4/5  bg-white">
                <div className="  bg-white h-3"></div>
                <div className=" flex  bg-white w-full h-96" >
                    {props.options == "Pizza" && <Pizza />}
                    {props.options == "Burger" && <Burger />}
                    {props.options == "Wraps" && <Wrap />}
                    {props.options == "Shawarma" && <Shawarma />}
                    {props.options == "Fries" && <Fries />}
                    {props.options == "Desserts" && <Desserts />}
                    {props.options == "Drinks" && <Drinks />}
                </div>
                <div className=" bg-white h-3"></div>

            </main>
        </>
    )
}
export default Admain;