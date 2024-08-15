import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { useContext } from "react";
import UserContext from "../utils/userContext";
class About extends React.Component{
  constructor(props){
    super(props);

    // console.log(" Parent constructor");
  }
  componentDidMount(){
    // console.log("Parent Component DidMount");

  }
  // component didmount is used to make an api call
  // it is called after the component is rendered on the screen
  render(){
    // console.log("Render Constructor");
    return(
      <div>
      <h1>About Class Component</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {(loggedInUser)=><h1 className="text-xl font-bold">loggedInUser</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is Namaste React WebSeries</h2>
        {/* <User name={"Paras Tyagi"}/> */}

        <UserClass name={"First"} location={"Dehradun"}/>
       
      </div>
    );
  }
}


export default About;
// constructor ->render->updates dom ->componentdidmount
