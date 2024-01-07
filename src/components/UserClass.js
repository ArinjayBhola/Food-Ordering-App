import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name + " Constructor")

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + " ComponentDidMount")

        const data = await fetch("https://api.github.com/users/ArinjayBhola");
        const json = await data.json();
        // console.log(json)

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("Component did update")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo

        return (
            <div className="user-card p-4 bg-white shadow-md rounded-md mb-4">
                <img src={avatar_url} className="rounded-full w-20 h-20 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Name: {name}</h2>
                <h3 className="text-lg mb-2">Location: {location}</h3>
                <h4 className="text-gray-500">Contact: @arinjaybhola</h4>
                {console.log(this.props.name + " Render")}
            </div >
        );
    };
};

export default UserClass;