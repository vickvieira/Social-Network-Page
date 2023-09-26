import { Div, Container } from "./style";
import Posts from "../../components/Posts";

function ProfilePosts() {
    return(
        <Container>
            <Div>
                <h4>Followers</h4>
                <h4>Following</h4>
                <h4><b>Posts</b></h4>
            </Div>
            <Posts></Posts>
            <Posts></Posts>
        </Container>

    );
 }
 export default ProfilePosts;