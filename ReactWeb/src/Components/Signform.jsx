function Signform() {

    return (
        <>
            <form className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 font-serif w-1/4 h-4/6 ml-4 rounded-3xl shadow-2xl shadow-black ">
                <header className=" h-20" >
                    <h1 className=" py-3 text-center font-medium ">SignIn</h1>
                </header>
                <main className=" flex flex-col content-around py-10 h-60">
                    <label className=" text-lg font-normal  mx-5" >Username </label>
                    <input type="text" className=" text-justify w-72 mx-5 h-10 rounded-md" required autofocus placeholder="UserName" ></input>
                    <label className=" text-lg font-normal my-1 mx-5">Password</label>
                    <input type="password" className=" w-72 mx-5 h-10 rounded-md" required autofocus placeholder="Password" ></input>
                    <label className=" text-sm mx-5  mt-3 font-medium "> You have already accout please Login !</label>
                </main>
                <footer className=" pt-4 h-20">
                    <button className=" text-xl bg-white  mx-10 w-60" >SignIn</button>
                </footer>
            </form>

        </>
    );
}
export default Signform;