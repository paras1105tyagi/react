import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.state = {
    //   count: 0,
    //   count2:2,
    // };

    this.state = {
     userInfo:{
      name: "Dummy",
      location: "Default",
      // avatar_url: "https://dummy-photo.com",
     }
    };
    
  }


  async componentDidMount(){
   
    // we make api call in componentdidmount because otherwise our page have to wait to fetch the data.
const data = await fetch("https://api.github.com/users/paras1105tyagi");
const json = await data.json();
console.log(json);

 this.setState({
  userInfo:json,
 })
  }


  componentDidUpdate(){
    console.log("component updated");
  }


  componentWillUnmount(){
    
    console.log("component will unmount");
  }
  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
// debugger;
    // console.log("Child render");
    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>

        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count Increasr
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: paras1105tyagi</h4>
      </div>
    );
  }
}

export default UserClass;
