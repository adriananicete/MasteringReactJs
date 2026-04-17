import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function AboutPage() {
    const { user } = useContext(AuthContext);
    return ( 
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-[45px]">About Page</h1>
            <h2 className="font-bold text-[35px]">Profile</h2>
            {user.isAuth && <p>Hello, {user.name}</p>}
        </div>
     );
}

export default AboutPage;