import axios from "axios"
import Card from "../Components/Card"
import { useEffect, useState } from "react";
function Main() {       ////////////////  PIZZA  ///////////////////////
    const [Tasklist, setTasklist] = useState([])
    const [popup, setpopup] = useState(false);
    const [Taskid, settaskid] = useState(null);
    const [Taskname, settaskname] = useState(null);
    const [Taskstatus, settaskstatus] = useState(null);

    useEffect(() => { void GetTasks() }, []);
    //////// fetch TASKLIST
    const GetTasks = async () => {
        try {
            const Getresponse = await axios.get("http://localhost:3000/list/displaytask");
            console.log("Backarray", Getresponse.data.response);
            setTasklist(Getresponse.data.response);
            // console.log(Getresponse);
        }
        catch (error) {
            alert(error.message);
        }
    }
    /////////     DELETETASK
    const Deletetask = async (Taskid) => {
        try {
            const Updatetasklist = Tasklist.filter((value) => {
                return value.Taskid !== Taskid;
            });
            setTasklist(Updatetasklist)
            const deleteresponse = await axios.delete("http://localhost:3000/list/deletetask", {
                params: {
                    Taskid: Taskid,
                },
            })
            // alert(deleteresponse.data.response);
        }
        catch (error) {
            alert(error.message);
        }
    }
    ////////////////   POST
    const posttask = async (Taskid, Taskname, Taskstatus) => {
        try {
            const postresponse = await axios.post("http://localhost:3000/list/submittask", {
                Taskid,
                Taskname,
                Taskstatus,
            })
            console.log(postresponse);
            if (postresponse.data.error) {
                alert(postresponse.data.error);

            }
            if (postresponse.data.response) {
                alert(postresponse.data.response);
                void GetTasks();

            }
        }
        catch (error) {
            alert(error.message);

        }
    }


    return (
        <>
            <main className=" overflow-y-auto  pt-3 pb-3 flex flex-wrap gap-8  justify-around rounded-2xl shadow-3xl shadow-red-900  absolute top-32 left-40 bg-red-900 w-5/6  h-3/4 ">
                <div className="  bg-black  w-full flex justify-center h-14">
                    <button onClick={() => { setpopup(true) }} className=" border-none text-center   bg-black text-white">+</button>
                </div>
                {(popup &&
                    <div className="px-20 h-96 absolute top-0 w-96 flex flex-col gap-3 justify-center bg-zinc-900  rounded-2xl shadow-3xl shadow-black">
                        <input onChange={(e) => { settaskid(e.target.value) }} placeholder="TASKID" required className="  h-12  w-60" type="text"></input>
                        <input onChange={(e) => { settaskname(e.target.value) }} placeholder="TASKNAME" required className="  h-12 w-60" type="text"></input>
                        <input onChange={(e) => { settaskstatus(e.target.value) }} placeholder="TASKSTATUS" required className="  h-12 w-60" type="text"></input>
                        <button onClick={() => { posttask(Taskid, Taskname, Taskstatus) }} className="  w-32 h-12 text center">Add Task</button>
                        <button onClick={() => { setpopup(false) }} className="  w-32 h-12 text center">BACK</button>
                    </div>)
                }
                {
                    Tasklist.map((value, key) => {
                        return (
                            <Card
                                key={key}
                                Taskid={value.Taskid}
                                Taskname={value.Taskname}
                                Taskstatus={value.Taskstatus}
                                deletetask={() => { Deletetask(value.Taskid) }}
                            >
                            </Card>)
                    })

                }



            </main>

        </>
    )
}
export default Main