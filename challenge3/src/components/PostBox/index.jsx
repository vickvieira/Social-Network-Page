import picture from "../../assets/picture.svg";
import { Camera, Image, Paperclip, MapPin, Smiley } from "@phosphor-icons/react";
import { StyledButton } from "../UI/button/style";
import { Container, Input } from "./style";
import UserInput from "../UserInput";
import { useState } from "react";

const PostBox = (value, onChange) => {
    return (
        <Container>
            <div className="post">
                <img src={picture} />
                <Input 
                type="text"
                placeholder="No que você está pensando agora?"
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
                    <StyledButton primary="true" className="button">Postar</StyledButton>
                </div>
            </div>
        </Container>
    );
}

export default PostBox;
