import { useParams } from "react-router-dom";
import { Div } from "./style";
import PostBox from "../../components/PostBox";
import Posts from "../../components/Posts";
import Accordion from "../../components/Accordion";
import { usePostContext } from "../../context/PostProvider";


function Home() {
  const params = useParams();
  const { userId } = params;
  const { posts, addPost, deletePost, editPost } = usePostContext();
  const currentUserID = userId;

  return (
    <Div>
      <div className="posts">
        <PostBox onAddPost={addPost} />
        <Posts
          items={posts}
          onDelete={deletePost}
          onEdit={editPost}
          currentUserID={currentUserID}
        />
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