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
            <div className='about p-6 bg-gray-100'>
                <UserClass name={"Child 1"} location={"Delhi(Class)"} />
                {/* <UserClass name={"Child 2"} location={"Delhi(Class)"} /> */}
                {console.log("Parent Render")}
            </div>
        )
    }
}

export default About;
