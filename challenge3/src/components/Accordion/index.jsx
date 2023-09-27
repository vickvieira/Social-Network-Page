import { CaretUp } from "@phosphor-icons/react";
import picture from "../../assets/picture.svg";
import { Conteiner } from "./style";
import { usePostContext } from "../../context/PostProvider";
import { Link, useParams} from "react-router-dom";


const Accordion = () => {
    const { posts } = usePostContext();
    const params = useParams();
    const { userId } = params;
    const loggedInUserId = userId;

    const friendNameToUserId = {};
  posts.forEach((post) => {
    if (post.userId !== loggedInUserId) {
      friendNameToUserId[post.name] = post.userId;
    }
  });

    return (
      <Conteiner>
        <div className="title">
          <h4>Meus Amigos</h4>
          <CaretUp size={24} color="white" />
        </div>
        <ul className="items">
          {Object.keys(friendNameToUserId).map((friendName) => (
            <li className="item" key={friendName}>
              <img src={picture} alt="Friend" />
              <Link to={`/${friendNameToUserId[friendName]}/profile`}>
                <p>{friendName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Conteiner>
    );
}

export default Accordion;