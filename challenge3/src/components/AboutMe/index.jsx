import { User, Cake, MapPin, Envelope, Phone } from "@phosphor-icons/react";
import { Address, Div } from "./style";

function AboutMe() {
  return (
    <Address>
      Sobre
      <Div>
        <div className="icon">
          <User size={24} weight="fill" />
        </div>
        <p>Masculino</p>
      </Div>
      <Div>
        <div className="icon">
          <Cake size={24} weight="fill" />
        </div>
          <p>Nascido em 26 de Junho, 1980</p>
      </Div>
      <Div className="info">
        <div className="icon">
          <MapPin size={24} weight="fill" />
        </div>
          <p>
            2239 Hog Camp Road <br />
            Schaumburg
          </p>
      </Div>
      <Div>
        <div className="icon">
          <Envelope size={24} weight="fill" />
        </div>
          <p>charles5182@ummoh.com</p>
      </Div>
      <Div>
        <div className="icon">
          <Phone size={24} weight="fill" />
        </div>
          <p>33 75700-5467</p>
      </Div>
    </Address>
  );
}
export default AboutMe;