import SinglePost from "../SinglePost";
import { Fragment } from "react";


const Posts = (props) => {
  return (
    <Fragment>
      {props.items.map((posts) => (
          <SinglePost
            key={posts.id}
            id={posts.id}
            userId={posts.userId}
            name={posts.name}
            description={posts.description}
            commentName={posts.commentName}
            comment={posts.comment}
            image={posts.image}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
            currentUserID={props.currentUserID}
          />
        ))}
    </Fragment>
  );
}
    

export default Posts;