import { useOutletContext } from "react-router-dom";

const Profile = () => {
    const profileName = useOutletContext();
    return (
        <>
            <h1>Profile(Functional Component)</h1>
            <h2>Name: {profileName}</h2>
        </>
    );
};

export default Profile;
