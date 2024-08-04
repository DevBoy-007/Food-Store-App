function Navbar() {
    return (
        <>
            <nav className=" w-full" >
                <ul className=" pt-2 font-serif h-10 flex flex-row justify-around  bg-neutral-800 text-white text-xl text">
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Wraps</li>
                    <li>Shawarma</li>
                    <li>Fries</li>
                    <li>Desserts</li>
                    <li>Drinks</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;