import { useParams } from "react-router-dom";
import ProfileCover from "../../components/ProfileCover";
import { Container, Div, ProfilePosts, Title } from "./style";
import AboutMe from "../../components/AboutMe";
// import ProfilePosts from "../../components/ProfilePosts";
import { PostProvider } from "../../context/PostProvider";
import Posts from "../../components/Posts";
import { usePostContext } from "../../context/PostProvider";

function Profile(posts) {
  const params = useParams();
  const { userId } = params;
  const currentUserID = userId;
  const postContext = usePostContext();

  const userPosts = postContext.posts.filter(
    (posts) => posts.userId === userId
  );
  return (
    <PostProvider>
      <Container>
        <ProfileCover></ProfileCover>
        <Div>
          <AboutMe></AboutMe>
          {/* <ProfilePosts items={posts}>
            </ProfilePosts> */}
          <ProfilePosts>
            <Title>
              <h4>Followers</h4>
              <h4>Following</h4>
              <h4>
                <b>Posts</b>
              </h4>
            </Title>
            <Posts
              items={userPosts}
              onDelete={postContext.deletePost}
              onEdit={postContext.editPost}
              currentUserID={currentUserID}
            ></Posts>
          </ProfilePosts>
        </Div>
        {/* <h1>Profile</h1>
            <p>User ID: {params.userId}</p> */}
      </Container>
    </PostProvider>
  );
}

export default Profile;