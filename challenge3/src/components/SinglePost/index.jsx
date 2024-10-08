import {
  Clock,
  ThumbsUp,
  ChatCenteredDots,
  ShareNetwork,
  Camera,
  Paperclip,
  MapPin,
  Smiley,
  Image,
  DotsThreeOutline,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react";
import { Article, Input, UpperDiv, Options, Menu } from "./style";
import picture from "../../assets/picture.svg";
import { Fragment } from "react";
import { useState } from "react";

const SinglePost = (props) => {
  const hasComments = props.commentName && props.comment;
  const isAuthor = props.currentUserID === props.userId;
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(props.description);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleDeleteClick = () => {
    if (isAuthor) {
      props.onDelete(props.id);
    } else {
      //o usuário atual não é o autor do post.
    }
  };

  const handleEditClick = () => {
    if (isAuthor) {
      setIsEditing(true);
    } else {
      // O usuário atual não é o autor do post.
    }
  };

  const handleSaveClick = () => {
    if (isAuthor) {
      props.onEdit(props.id, { description: newDescription });
      setIsEditing(false);
    } else {
      // O usuário atual não é o autor do post.
    }
  };

  //Curtida
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const buttonColor = liked ? "var(--yellow)" : "var(--gray-200)";
  const paragraphStyle = {
    color: buttonColor,
  };

  return (
    <Article>
      <UpperDiv>
        <div className="content">
          <div className="info">
            <img src={picture} />
            <hgroup>
              <h4>
                {props.name} {props.userId}
              </h4>
              <p>
                <Clock size={12} color="var(--gray-200)" />
                12 minutos atrás em <b>Paisagens Exuberantes</b>
              </p>
            </hgroup>
          </div>
          <p className="description">{props.description}</p>
        </div>
        <Options>
          {isAuthor && (
            <button className="dots" onClick={toggleMenu}>
              <DotsThreeOutline size={32} weight="fill" color="white" />
            </button>
          )}
          {isMenuOpen && (
            <Menu>
              {isAuthor && !isEditing && (
                <button className="edit" onClick={handleEditClick}>
                  <PencilSimple size={24} weight="fill" color="var(--yellow)" />
                  Editar
                </button>
              )}
              {isEditing && (
                <div>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                  <button className="save" onClick={handleSaveClick}>
                    Salvar
                  </button>
                </div>
              )}
              <button className="delete" onClick={handleDeleteClick}>
                <Trash size={24} weight="fill" color="var(--orange)" />
                Excluir
              </button>
            </Menu>
          )}
        </Options>
      </UpperDiv>

      <img className="post-img" src={props.image} />
      <div className="post-actions">
        <button onClick={handleLikeClick}>
          <ThumbsUp size={16} weight="fill" color={buttonColor} />
          <p style={paragraphStyle}>{liked ? "Curtido" : "Curtir"}</p>
        </button>
        <button>
          <ChatCenteredDots size={16} color="var(--gray-200)" />
          <p>Comentários</p>
        </button>
        <button>
          <ShareNetwork size={16} color="var(--gray-200)" />
          <p>Compartilhar</p>
        </button>
      </div>
      <div className="comments">
        <div className="post">
          <img src={picture} />
          <Input type="text" placeholder="Tem algo a dizer?" />
          <div className="icons">
            <Camera size={16} color="var(--gray-200)" />
            <Image size={16} color="var(--gray-200)" />
            <Paperclip size={16} color="var(--gray-200)" />
            <MapPin size={16} color="var(--gray-200)" />
            <Smiley size={16} color="var(--gray-200)" />
          </div>
        </div>
        {hasComments && (
          <Fragment>
            <p className="description">Todos os comentários</p>
            <div className="comment">
              <img src={picture} />
              <p className="text-comment">
                <b>{props.commentName}: </b>
                {props.comment}
              </p>
            </div>
            <button>
              <p>Ver todos os comentários</p>
            </button>
          </Fragment>
        )}
      </div>
    </Article>
  );
};

export default SinglePost;
