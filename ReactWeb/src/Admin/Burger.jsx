import P007 from "../Public/P007.png"
import Adpizza from "../Public/Adpizza.jpg"
import BGPIC3 from "../Public/BGPIC3.jpg"
import axios from "axios"
import { useEffect, useState } from "react";
//=================================PIZZA-CARDS======================================
function Card(props) {
    return (
        <>
            <section className="  font-serif text-sm text-white  w-80  h-80  bg-lime-400  shadow-2xl shadow-black  ">
                <div className=" bg-slate-600 w-full  h-56">
                    <img className="  object-cover w-full  h-full" src={BGPIC3}></img>
                </div>
                <div className=" font-serif pt-2 pl-2 w-full bg-white text-black  h-16">
                    <label> Burgerid : {props.Burgerid}</label>
                    <br></br>
                    <label> Burgerflavour :{props.Burgerflavour}</label>
                    <br></br>
                    <label> Burgerprice :{props.Burgerprice + "$"}</label>
                    <br></br>
                </div>
                <div className=" w-full flex justify-around h-8 bg-white text-white  border-none ">
                    <button onClick={() => { props.funpop(true) }} className=" bg-white  pb-5 text-center h-8  text-black">Update</button>
                    <button onClick={props.deletefunction} className="  bg-white pb-5 h-8 text-black">Delete</button>
                </div>
            </section>

        </>)
}

//=========================================BURGER PRODUCT=======================================

function Burger() {
    const [Burgerlist, setBurgerlist] = useState([])
    const [popup1, setpopup1] = useState(false);
    const [popup2, setpopup2] = useState(false);
    const [Burgerid, setBurgerid] = useState(null);
    const [Burgerimage, setBurgerimage] = useState(null);
    const [Burgerflavour, setBurgerflavour] = useState(null);
    const [Burgerprice, setBurgerprice] = useState(null);
    useEffect(() => { void GetBurger() }, []);
    //////// Get Burgerlist
    const GetBurger = async () => {
        try {
            const Getresponse = await axios.get("http://localhost:3000/BurgerDisplay/burgerdisplay");
            setBurgerlist(Getresponse.data.response);


        }
        catch (error) {
            alert(error.message);
        }
    }
    /////////     DeletePizza
    const DeleteBurger = async (Burgerid) => {
        try {
            const UpdateBurgerlist = Burgerlist.filter((value) => {
                return value.Burgerid !== Burgerid;
            });
            setBurgerlist(UpdateBurgerlist)
            const deleteresponse = await axios.delete("http://localhost:3000/BurgerDelete/burgerdelete", {
                params: {
                    Burgerid: Burgerid,
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
    ////////////////   PostBurger
    const PostBurger = async (Burgerid, Burgerimage, Burgerflavour, Burgerprice) => {
        try {
            const formData = new FormData();
            formData.append('Burgerid', Burgerid);
            formData.append('Burgerimage', Burgerimage);
            formData.append('Burgerflavour', Burgerflavour);
            formData.append('Burgerprice', Burgerprice);

            const postresponse = await axios.post("http://localhost:3000/BurgerSubmit/burgersubmit", formData, {
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
                void GetBurger();

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
                    <button onClick={() => { setpopup1(true) }} className=" border-none text-center h-10 bg-white  text-black">ADD-BURGER</button>
                </div>
                {(popup1 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setBurgerid(e.target.value) }} placeholder="Burger-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>

                            <input onChange={(e) => { setBurgerflavour(e.target.value) }} placeholder="Burger-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setBurgerprice(e.target.value) }} placeholder="Burger-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={P007}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Burgerimage" onChange={(e) => { setBurgerimage(e.target.files[0]) }} placeholder="Burger-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { PostBurger(Burgerid, Burgerimage, Burgerflavour, Burgerprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">LOUNCH</button>
                                <button onClick={() => { setpopup1(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }

                {(popup2 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setBurgerid(e.target.value) }} placeholder="Burger-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>

                            <input onChange={(e) => { setBurgerflavour(e.target.value) }} placeholder="Burger-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setBurgerprice(e.target.value) }} placeholder="Burger-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={P007}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Burgerimage" onChange={(e) => { setBurgerimage(e.target.files[0]) }} placeholder="Burger-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { PostBurger(Burgerid, Burgerimage, Burgerflavour, Burgerprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">RELOUNCH</button>
                                <button onClick={() => { setpopup2(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }






                {
                    Burgerlist.map((value, key) => {
                        return (
                            <Card
                                key={key}
                                Burgerid={value.Burgerid}
                                Burgerimage={value.Burgerimage}
                                Burgerflavour={value.Burgerflavour}
                                Burgerprice={value.Burgerprice}
                                deletefunction={() => { DeleteBurger(value.Burgerid) }}
                                funpop={(popup2) => { setpopup2(popup2) }}
                            >
                            </Card>)
                    })

                }




            </div>
        </>
    )
}
export default Burger;