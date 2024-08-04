import WPIC from "../Public/WPIC.jpg"
import axios from "axios"
import { useEffect, useState } from "react";
//=================================PIZZA-CARDS======================================
function Card(props) {
    return (
        <>
            <section className="  font-serif text-sm text-white  w-80  h-80  bg-lime-400  shadow-2xl shadow-black  ">
                <div className=" bg-slate-600 w-full  h-56">
                    <img className="  object-cover w-full  h-full" src={WPIC}></img>
                </div>
                <div className=" font-serif pt-2 pl-2 w-full bg-white text-black  h-16">
                    <label> Wrapid : {props.Wrapid}</label>
                    <br></br>
                    <label> Wrapflavour :{props.Wrapflavour}</label>
                    <br></br>
                    <label> Wrapprice :{props.Wrapprice + "$"}</label>
                    <br></br>
                </div>
                <div className=" w-full flex justify-around h-8 bg-white text-white  border-none ">
                    <button onClick={() => { props.funpopup(true) }} className=" bg-white  pb-5 text-center h-8  text-black">Update</button>
                    <button onClick={props.deletefunction} className="  bg-white pb-5 h-8 text-black">Delete</button>
                </div>
            </section>

        </>)
}

//=========================================BURGER PRODUCT=======================================

function Wrap() {
    const [Wraplist, setWraplist] = useState([])
    const [popup1, setpopup1] = useState(false);
    const [popup2, setpopup2] = useState(false);
    const [Wrapid, setWrapid] = useState(null);
    const [Wrapimage, setWrapimage] = useState(null);
    const [Wrapflavour, setWrapflavour] = useState(null);
    const [Wrapprice, setWrapprice] = useState(null);
    useEffect(() => { void GetWrap() }, []);
    //////// Get Burgerlist
    const GetWrap = async () => {
        try {
            const Getresponse = await axios.get("http://localhost:3000/WrapDisplay/wrapdisplay");
            setWraplist(Getresponse.data.response);


        }
        catch (error) {
            alert(error.message);
        }
    }
    /////////     DeletePizza
    const DeleteWrap = async (Wrapid) => {
        try {
            const UpdateWraplist = Wraplist.filter((value) => {
                return value.Wrapid !== Wrapid;
            });
            setWraplist(UpdateWraplist)
            const deleteresponse = await axios.delete("http://localhost:3000/WrapDelete/wrapdelete", {
                params: {
                    Wrapid: Wrapid,
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
    const PostWrap = async (Wrapid, Wrapimage, Wrapflavour, Wrapprice) => {
        try {
            const formData = new FormData();
            formData.append('Wrapid', Wrapid);
            formData.append('Wrapimage', Wrapimage);
            formData.append('Wrapflavour', Wrapflavour);
            formData.append('Wrapprice', Wrapprice);

            const postresponse = await axios.post("http://localhost:3000/WrapSubmit/wrapsubmit", formData, {
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
                void GetWrap();

            }
        }
        catch (error) {
            alert("hamza");

        }
    }
    return (
        <>
            <div className="   w-full  gap-y-3 flex flex-wrap  justify-around h-full  bg-white overflow-y-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-300" >
                <div className="  bg-white w-full flex justify-center h-10">
                    <button onClick={() => { setpopup1(true) }} className=" border-none text-center h-10 bg-white  text-black">ADD-WRAP</button>
                </div>
                {(popup1 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setWrapid(e.target.value) }} placeholder="Wrap-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>

                            <input onChange={(e) => { setWrapflavour(e.target.value) }} placeholder="Wrap-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setWrapprice(e.target.value) }} placeholder="Wrap-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={WPIC}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Wrapimage" onChange={(e) => { setWrapimage(e.target.files[0]) }} placeholder="Wrap-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { PostWrap(Wrapid, Wrapimage, Wrapflavour, Wrapprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">LOUNCH</button>
                                <button onClick={() => { setpopup1(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }

                {(popup2 &&
                    <div className=" rounded-2xl shadow-xl shadow-black h-full absolute top-0 left-0   w-full flex bg-stone-700 ">
                        <div className="   pt-72 w-80 flex flex-col gap-5  pl-8  bg-stone-800">
                            <input onChange={(e) => { setWrapid(e.target.value) }} placeholder="Wrap-Id" required className=" bg-stone-800  text-white h-10  w-60" type="text"></input>

                            <input onChange={(e) => { setWrapflavour(e.target.value) }} placeholder="Wrap-flavour" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>
                            <input onChange={(e) => { setWrapprice(e.target.value) }} placeholder="Wrap-price" required className="  text-white bg-stone-800  h-10 w-60" type="text"></input>

                        </div>
                        <div className="  pt-5 gap-3 w-4/5 flex flex-col bg-stone-700">
                            <div className=" ml-20  w-9/12  h-80 bg-lime-600">
                                <img className=" w-full h-full" src={WPIC}></img>
                            </div>
                            <div className="  pl-20  bg-stone-700">
                                <input name="Wrapimage" onChange={(e) => { setWrapimage(e.target.files[0]) }} placeholder="Wrap-Image" required className="  text-white h-10 w-60" type="file"></input>
                            </div>
                            <div className=" bg-stone-700 flex ">
                                <button onClick={() => { PostWrap(Wrapid, Wrapimage, Wrapflavour, Wrapprice) }} className=" bg-stone-700  font-bold w-32 h-12 text center text-white  ml-56">RELOUNCH</button>
                                <button onClick={() => { setpopup2(false) }} className=" bg-stone-700 font-bold text-white  ml-10  w-32 h-12 text center">BACK</button>
                            </div>
                        </div>
                    </div>)
                }

                {
                    Wraplist.map((value, key) => {
                        return (
                            <Card
                                key={key}
                                Wrapid={value.Wrapid}
                                Wrapimage={value.Wrapimage}
                                Wrapflavour={value.Wrapflavour}
                                Wrapprice={value.Wrapprice}
                                deletefunction={() => { DeleteWrap(value.Wrapid) }}
                                funpopup={(popup2) => { setpopup2(popup2) }}
                            >
                            </Card>)
                    })

                }




            </div>
        </>
    )
}
export default Wrap;