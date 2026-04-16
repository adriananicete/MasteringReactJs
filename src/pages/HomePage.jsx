import { Link, Outlet } from "react-router";

function HomePage() {
    return ( 
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-[45px]">Home Page</h1>
            <p>You are not logged in. Go to login page to sign in</p>

            <div className="border w-100 h-100 rounded-[5px] border border-gray-400">
                 <div className="w-full h-auto border-b border-gray-300 flex gap-5">
                    <Link to={'/'}>Tab 1</Link>
                 <Link to={'/tab2'}>Tab 2</Link>
                 <Link to={'/tab3'}>Tab 3</Link>
                 </div>

                 <div>
                    <Outlet />
                 </div>
            </div>
        </div>
     );
}

export default HomePage;