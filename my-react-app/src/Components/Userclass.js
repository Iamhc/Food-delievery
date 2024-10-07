import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: [
        { user: { name: "hc", bio: "", location: "", instagram_username: "" } },
      ],
    };
  }
  async componentDidMount() {
    const ndata = await fetch(
      "https://unsplash.com/napi/users/iamhc/photos?page=1&per_page=20"
    );
    const cjson = await ndata.json();
    console.log(cjson);
    this.setState({
      fetched: cjson,
    });
    console.log(this.state.fetched?.name);

    // console.log("component loaded");
  }
  componentDidUpdate() {
    console.log("update");
  }
  render() {
    const { name, bio, location, insta } = this.props;

    return (
      <div id="abouthc">
        <p>Name:-{this.state?.fetched[0]?.user.name}</p>
        <p>About:-{this.state?.fetched[0]?.user.bio}</p>
        <p>location:-{this.state?.fetched[0]?.user.location}</p>

        <img
          src="https://avatars.githubusercontent.com/u/86661174?v=4"
          width="400px"
          height="420px"
          id="myimg"
        ></img>
      </div>
    );
  }
}
export default Userclass;
//https://images.unsplash.com/photo-1705601659292-2e0d0d6a3ef5?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
