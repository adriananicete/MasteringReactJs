import { Link } from "react-router";

function NavBar() {
    return ( 
        <nav className="bg-[] w-full h-full p-2 flex justify-between items-center border-b border-gray-300">
            <ul className="flex-1 flex justify-between items-center text-indigo-700">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/service'}>Service</Link>
                <Link to={'/login'}>Login</Link>
            </ul>

            <div className="w-[150px] flex justify-end items-center">
                <button type="button">Sign up</button>
            </div>
        </nav>
     );
}

export default NavBar;