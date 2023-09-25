import { useParams } from "react-router-dom";
import { Div } from "./style";
import PostBox from "../../components/PostBox";
import Posts from "../../components/Posts";
import Accordion from "../../components/Accordion";


function Home() {
    const params = useParams();
    return (
        <Div>
            <div className="posts">
                <PostBox></PostBox>
                <Posts></Posts>
            </div>
            <div className="accordions">
                <Accordion></Accordion>
                <Accordion></Accordion>
            </div>
            {/* <h1>Home</h1>
            <p>User ID:{params.userId}</p> */}
        </Div>
    );
}

export default Home;