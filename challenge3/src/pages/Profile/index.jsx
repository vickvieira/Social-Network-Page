import { useParams } from "react-router-dom";
import ProfileCover from "../../components/ProfileCover";
import { Container } from "./style";
import AboutMe from "../../components/AboutMe";

function Profile() {
    const params = useParams();
    return (
    <Container>
        <ProfileCover></ProfileCover>
        <AboutMe></AboutMe>
        <h1>Profile</h1>
        <p>User ID: {params.userId}</p>
    </Container>
    );
}

export default Profile;