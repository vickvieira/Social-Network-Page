// import { Div, Container } from "./style";
// import Posts from "../../components/Posts";
// import { useParams } from "react-router-dom";
// import { usePostContext } from "../../context/PostProvider";

// function ProfilePosts() {
//     const params = useParams();
//   const { userId } = params;
//   const { posts } = usePostContext();

//   const userPosts = posts.filter((posts) => posts.userId === userId);

//     return(
//         <ProfilePosts>
//             <Title>
//                 <h4>Followers</h4>
//                 <h4>Following</h4>
//                 <h4><b>Posts</b></h4>
//             </Title>
//             <Posts items={userPosts}></Posts>
//         </ProfilePosts>

//     );
//  }
//  export default ProfilePosts;