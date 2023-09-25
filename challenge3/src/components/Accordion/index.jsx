import { CaretUp } from "@phosphor-icons/react";
import picture from "../../assets/picture.svg";
import { Conteiner } from "./style";


const Accordion = () => {
    return (
        <Conteiner>
            <div className="title"> 
                <h4>Meus Amigos</h4>
                <CaretUp size={24} color="white" />
            </div>
            <ul className="items">
                <li className="item">
                    <img src={picture} />
                    <p>Matheus Gonzales</p>
                </li>
                <li className="item">
                    <img src={picture} />
                    <p>Raphael Ferreira</p>
                </li>
                <li className="item">
                    <img src={picture} />
                    <p>Eduardo Benvenuti</p>
                </li>
                <li className="item">
                    <img src={picture} />
                    <p>Eduardo Benvenuti</p>
                </li>
            </ul>
        </Conteiner>


    );
}

export default Accordion;