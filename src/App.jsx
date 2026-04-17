import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import SignupForm from "./components/SignupForm";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Service from "./pages/Service";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Login from "./components/Login";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({name: "", isAuth: false});

  function login(name) {
    setUser({name: name, isAuth: true})
  }

  function logout() {
    setUser({name: "", isAuth: false})
  }
  return ( 
    <div className="bg-[] h-dvh flex justify-center items-center">
  <AuthContext.Provider value={{user, login, logout}}>
        <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />}>
          <Route index element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
        </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Route>

        
      </Routes>
      </AuthContext.Provider>
    </div>
   );
}

export default App;