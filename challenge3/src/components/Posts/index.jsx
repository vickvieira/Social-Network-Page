import { Clock, ThumbsUp, ChatCenteredDots, ShareNetwork, Camera, Paperclip, MapPin, Smiley, Image } from "@phosphor-icons/react";
import { Article, Input } from "./style";
import picture from "../../assets/picture.svg";
import postImage from "../../assets/postPicture.png";

const Posts = () => {
  return (
    <Article>
      <div className="content">
        <div className="info">
          <img src={picture} />
          <hgroup>
            <h4>Patricia Menezes</h4>
            <p>
              <Clock size={12} color="var(--gray-200)" />
              12 minutos atrás em <b>Paisagens Exuberantes</b>
            </p>
          </hgroup>
        </div>
        <p className="description">
          Minha última viagem para a Ilha do Comendador, um lugar simplesmente
          incrível, natureza praticamente intocada. Recomendo a todos que
          apreciam o mundo como ele é.
        </p>
      </div>
      <img src={postImage} />
      <div className="post-actions">
        <button>
          <ThumbsUp size={16} weight="fill" color="var(--gray-200)" />
          <p>Curtiu</p>
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
        <p className="description">Todos os comentários</p>
        <div className="comment">
          <img src={picture} />
          <p className="text-comment">
            <b>Junior Saraiva:</b> Que bela paisagem! As cores são simplesmente
            deslumbrantes e a composição é maravilhosa. Essa foto é uma
            verdadeira obra de arte que captura a beleza natural do nosso mundo.
            É fascinante ver como a natureza pode ser tão impressionante e
            inspiradora. Agradeço por compartilhar esta imagem conosco!
          </p>
        </div>
        <button>
            <p>Ver todos os comentários</p>
        </button>
      </div>
    </Article>
  );
};

export default Posts;