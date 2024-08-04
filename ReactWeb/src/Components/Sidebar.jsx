function Sidebar() {
    return (
        <>
            <aside className=" bg-black w-32 h-5/6">
                <ul className=" grid gap-y-28">
                    <li className="text-center text-xl text-white cursor-pointer"></li>
                    <li className="text-center text-xl text-white cursor-pointer">Get</li>
                    <li className="text-center text-xl text-white cursor-pointer">Delete</li>
                    <li className="text-center text-xl text-white cursor-pointer">Update</li>
                </ul>
            </aside>
        </>
    )
}
export default Sidebar;