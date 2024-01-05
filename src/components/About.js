import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        return (
            <div className='about'>
                <h1>Class Based Component</h1>
                <UserClass name={"Child 1"} location={"Delhi(Class)"} />
                <UserClass name={"Child 2"} location={"Delhi(Class)"} />
                {console.log("Parent Render")}
            </div>
        )
    }
}

export default About;
