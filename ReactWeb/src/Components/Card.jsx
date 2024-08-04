
function Card(props) {
    return (
        <>
            <section className="  font-serif text-sm text-white  w-72 h-72 bg-zinc-800 rounded-2xl shadow-2xl shadow-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                <div className="rounded-3xl bg-slate-600 w-full">
                    <video className=" object-cover w-full rounded-2xl   h-44" src={v1} autoPlay loop muted></video>
                </div>
                <div className=" w-full bg-black">
                    <label>Task id : {props.Taskid}</label>
                    <br></br>
                    <label>Task Name :{props.Taskname}</label>
                    <br></br>
                    <label>Task Status :{props.Taskstatus}</label>
                    <br></br>
                </div>
                <div className=" w-full  bg-black text-white  border-none ">
                    <button className=" bg-black">Update</button>
                    <button onClick={props.deletetask} className=" bg-black">Delete</button>
                </div>
            </section>

        </>)
}
export default Card;