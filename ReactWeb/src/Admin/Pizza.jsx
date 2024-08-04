import P007 from "../Public/P007.png"
import Adpizza from "../Public/Adpizza.jpg"
import axios from "axios"
import { useEffect, useState } from "react";
//=================================PIZZA-CARDS======================================
function Card(props) {
    return (
        <>
            <section className="  font-serif text-sm text-white  w-80  h-80  bg-lime-400  shadow-2xl shadow-black  ">
                <div className=" bg-slate-600 w-full  h-56">
                    <img className="  object-cover w-full  h-full" src={P007}></img>
                </div>
                <div className=" font-serif pt-2 pl-2 w-full bg-white text-black  h-16">
                    <label> Pizzaid : {props.Pizzaid}</label>
                    <br></br>
                    <label> Pizzaflavour :{props.Pizzaflavour}</label>
                    <br></br>
                    <label> Pizzaprice :{props.Pizzaprice + "$"}</label>
                    <br></br>
                </div>
                <div className=" w-full flex justify-around h-8 bg-white text-white  border-none ">
                    <button onClick={() => { props.funpop(true) }} className=" bg-white  pb-5 text-center h-8  text-black">Update</button>
                    <button onClick={props.deletefunction} className="  bg-white pb-5 h-8 text-black">Delete</button>
                </div>
            </section>

        </>)
}

//=========================================PIZZA PRODUCT=======================================

function Pizza() {
    const [Pizzalist, setPizzalist] = useState([])
    const [popup1, setpopup1] = useState(false);
    const [popup2, setpopup2] = useState(false);
    const [Pizzaid, setPizzaid] = useState(null);
    const [Pizzaimage, setPizzaimage] = useState(null);
    const [Pizzaflavour, setPizzaflavour] = useState(null);
    const [Pizzaprice, setPizzaprice] = useState(null);
    useEffect(() => { void GetPizza() }, []);
    //////// Get Pizzalist
    const GetPizza = async () => {
        try {
            const Getresponse = await axios.get("http://localhost:3000/PizzaDisplay/pizzadisplay");
            setPizzalist(Getresponse.data.response);
            console.log(Getresponse.data)

        }
        catch (error) {
            alert(error.message);
        }
    }
    /////////     DeletePizza
    const DeletePizza = async (Pizzaid) => {
        try {
            const UpdatePizzalist = Pizzalist.filter((value) => {
                return value.Pizzaid !== Pizzaid;
            });
            setPizzalist(UpdatePizzalist)
            const deleteresponse = await axios.delete("http://localhost:3000/PizzaDelete/pizzadelete", {
                params: {
                    Pizzaid: Pizzaid,
                },
            })
            if (deleteresponse.data.error) {
                alert(deleteresponse.data.error)
            }

        }
        catch (error) {
            alert(error.message);
        }
    }
    ////////////////   PostPizza
    const PostPizza = async (Pizzaid, Pizzaimage, Pizzaflavour, Pizzaprice) => {
        try {
            const formData = new FormData();
            formData.append('Pizzaid', Pizzaid);
            formData.append('Pizzaimage', Pizzaimage);
            formData.append('Pizzaflavour', Pizzaflavour);
            formData.append('Pizzaprice', Pizzaprice);

            const postresponse = await axios.post("http://localhost:3000/PizzaSubmit/pizzasubmit", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )

            if (postresponse.data.error) {
                alert(postresponse.data.error);

            }
            if (postresponse.data.response) {
                alert(postresponse.data.response);
                void GetPizza();

            }
        }
        catch (error) {
            alert(error.message);

        }
    }

    //============================PIZZAUpdate====================================

    const UpdatePizza = async (Pizzaid, Pizzaimage, Pizzaflavour, Pizzaprice) => {
        try {
            const formData = new FormData();
            formData.append('Pizzaid', Pizzaid);
            formData.append('Pizzaimage', Pizzaimage);
            formData.append('Pizzaflavour', Pizzaflavour);
            formData.append('Pizzaprice', Pizzaprice);

            const updateresponse = await axios.put("http://localhost:3000/PizzaUpdate/pizzaupdate", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            console.log(updateresponse)

            if (updateresponse.data.error) {
                alert(updateresponse.data.error);
            }
            if (updateresponse.data.response) {
                alert(updateresponse.data.response);
                void GetPizza();
            }
        }
        catch (error) {
            alert(error.message);

        }
    }


    return (
        <>
            <div className="   w-full  gap-y-3 flex flex-wrap  justify-around h-full  bg-white overflow-y-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-300" >
                <div className="  bg-white w-full flex justify-center h-10">
                    <button onClick={() => { setpopup1(true) }} className=" border-none text-center h-10 bg-white  text-black">ADD-PIZZA</button>
                </div>
                {(popup1 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setPizzaid(e.target.value) }} placeholder="Pizza-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>
                            <input onChange={(e) => { setPizzaflavour(e.target.value) }} placeholder="Pizza-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setPizzaprice(e.target.value) }} placeholder="Pizza-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={P007}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Pizzaimage" onChange={(e) => { setPizzaimage(e.target.files[0]) }} placeholder="Pizza-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { PostPizza(Pizzaid, Pizzaimage, Pizzaflavour, Pizzaprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">LOUNCH</button>
                                <button onClick={() => { setpopup1(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }

                {(popup2 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setPizzaid(e.target.value) }} placeholder="Pizza-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>
                            <input onChange={(e) => { setPizzaflavour(e.target.value) }} placeholder="Pizza-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setPizzaprice(e.target.value) }} placeholder="Pizza-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={P007}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Pizzaimage" onChange={(e) => { setPizzaimage(e.target.files[0]) }} placeholder="Pizza-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { UpdatePizza(Pizzaid, Pizzaimage, Pizzaflavour, Pizzaprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">RELOUNC</button>
                                <button onClick={() => { setpopup2(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }

                {
                    Pizzalist.map((value, key) => {
                        return (
                            <Card
                                key={key}
                                Pizzaid={value.Pizzaid}
                                Pizzaimage={value.Pizzaimage}
                                Pizzaflavour={value.Pizzaflavour}
                                Pizzaprice={value.Pizzaprice}
                                deletefunction={() => { DeletePizza(value.Pizzaid) }}
                                funpop={(popup2) => { setpopup2(popup2) }}
                            >
                            </Card>)
                    })
                }




            </div>
        </>
    )
}
export default Pizza;