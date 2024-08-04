function Adnav(props) {
    return (
        <>
            <nav className="  w-full" >
                <ul className=" box-border pt-0 pl-10 font-serif  h-8 flex  flex-row justify-evenly  bg-black text-white text-xl text">
                    <li onClick={() => { props.changeoption("Pizza") }} className=" cursor-pointer">Pizza</li>
                    <li onClick={() => { props.changeoption("Burger") }} className=" cursor-pointer">Burger</li>
                    <li onClick={() => { props.changeoption("Wraps") }} className=" cursor-pointer">Wrap</li>
                    <li onClick={() => { props.changeoption("Shawarma") }} className=" cursor-pointer">Shawarma</li>
                    <li onClick={() => { props.changeoption("Fries") }} className=" cursor-pointer">Fries</li>
                    <li onClick={() => { props.changeoption("Desserts") }} className=" cursor-pointer">Dessert</li>
                    <li onClick={() => { props.changeoption("Drinks") }} className=" cursor-pointer">Drink</li>
                </ul>
            </nav>
        </>
    )
}
export default Adnav;