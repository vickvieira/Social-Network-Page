import { useParams } from "react-router-dom";
import ProfileCover from "../../components/ProfileCover";
import { Container, Div } from "./style";
import AboutMe from "../../components/AboutMe";
import ProfilePosts from "../../components/ProfilePosts";

function Profile() {
    const params = useParams();
    return (
    <Container>
        <ProfileCover></ProfileCover>
        <Div>
        <AboutMe></AboutMe>
        <ProfilePosts></ProfilePosts>
        </Div>
        {/* <h1>Profile</h1>
        <p>User ID: {params.userId}</p> */}
    </Container>
    );
}

export default Profile;