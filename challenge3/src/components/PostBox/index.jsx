import picture from "../../assets/picture.svg";
import { Camera, Image, Paperclip, MapPin, Smiley } from "@phosphor-icons/react";
import { StyledButton } from "../UI/button/style";
import { Container, Input } from "./style";
import UserInput from "../UserInput";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../context/PostProvider";

const PostBox = () => {
    const [newPostContent, setNewPostContent] = useState("");
    const { userId } = useParams();
    const { addPost } = usePostContext();
    const handlePostClick = () => {
        if (newPostContent.trim() !== "") {
          const newPost = {
            id: `p${Math.random()}`,
            name: "Patrícia Menezes",
            userId: userId,
            description: newPostContent,
            commentName: "",
            comment: "",
            image: "",
          };
          addPost(newPost);
          setNewPostContent(''); // Limpa o input após o post
        }
      };
    return (
        <Container>
            <div className="post">
                <img src={picture} />
                <Input 
                type="text"
                placeholder="No que você está pensando agora?"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                />
            </div>
            <div className="submit">
                <div className="icons">
                    <Camera size={24} color="var(--gray-200)" />
                    <Image size={24} color="var(--gray-200)" />
                    <Paperclip size={24} color="var(--gray-200)" />
                    <MapPin size={24} color="var(--gray-200)" />
                    <Smiley size={24} color="var(--gray-200)" />
                </div>
                <div className="submit-button">
                    <StyledButton primary="true" className="button" onClick={handlePostClick}>Postar</StyledButton>
                </div>
            </div>
        </Container>
    );
}

export default PostBox;
