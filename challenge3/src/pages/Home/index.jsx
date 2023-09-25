import { useParams } from "react-router-dom";
import { Div } from "./style";
import PostBox from "../../components/PostBox";
import Posts from "../../components/Posts";


function Home() {
    const params = useParams();
    return (
        <Div>
            <div className="posts">
                <PostBox></PostBox>
                <Posts></Posts>
            </div>
            <h1>Home</h1>
            <p>User ID:{params.userId}</p>
        </Div>
    );
}

export default Home;