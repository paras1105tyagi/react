import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error";
import Header from "./components/Header";
// import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { useContext } from "react";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from ;
import UserContext from "./utils/userContext";
import { useState,useEffect } from "react";
const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(()=>{
   const data = {
    name:"Paras"
   };
   setUserName(data.name); 
  },[]);
  return ( 
  <Provider store={appStore}>
  <UserContext.Provider value={{loggedinUser:userName , setUserName}}>
    <div className="app">
   
   
      <Header />
     
      <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },{
        path: "/about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>,
      },{
        path: "/contact",
        element: <Contact />,
      },{
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      } 
    ],
    errorElement: <Error/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);


