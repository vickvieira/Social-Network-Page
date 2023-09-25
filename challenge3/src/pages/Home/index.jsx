import { useParams } from "react-router-dom";
import { Div } from "./style";
import PostBox from "../../components/PostBox";


function Home() {
    const params = useParams();
    return (
        <Div>
            <h1>Home</h1>
            <p>User ID:{params.userId}</p>
            <PostBox></PostBox>
        </Div>
    );
}

export default Home;