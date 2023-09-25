import { Container, Div } from "./style";
import cover from "../../assets/cover.png";
import profilePicture from "../../assets/profilePicture.svg";
import { StyledButton } from "../UI/button/style";

const ProfileCover = () => {
    return (
        <Container>
            <Div imageurl={cover}>
                <img src={profilePicture} />
            </Div>
            <div className="cover-info">
                <hgroup>
                    <h3>
                        Eduarda Pereira
                    </h3>
                    <p>
                        UI/UX Designer
                    </p>
                </hgroup>
                <StyledButton primary="true" className="button">
                    Editar Perfil
                </StyledButton>
            </div>
        </Container>

    );
}

export default ProfileCover;