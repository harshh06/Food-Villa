import { Outlet } from "react-router";
import Profile from "./ProfileClass";

const About = () => {
    return (
        <>
            <h1>About Us!!</h1>
            {/* <Outlet context={(profileName = "Harsh Soni")} /> */}
            <Profile name="Harsh" />
        </>
    );
};

export default About;
