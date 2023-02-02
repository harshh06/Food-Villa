import React from "react";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <>
                <h1>Profile(Class Component) Page</h1>
                <h2>Name: {this.props.name}</h2>
                <p>Count :{this.state.count}</p>
            </>
        );
    }
}

export default Profile;
