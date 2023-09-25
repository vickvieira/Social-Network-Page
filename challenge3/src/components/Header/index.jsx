import MainNavigation from "../MainNavigation";
import { Headers, Arrow, Div } from "./style";
import { ArrowFatLeft, ArrowFatRight, GlobeHemisphereEast, Bell } from "@phosphor-icons/react";
import { useState } from "react";
import picture from "../../assets/picture.svg";

const Header = () => {
    const [navigation, setNavigation] = useState(false)

    const showMainNavigation = () => setNavigation(!navigation)

    const closeMainNavigation = () => setNavigation(false)

    const icon = !navigation ? (
        <ArrowFatRight size={20} weight="fill" color="var(--gray-600)" onClick={showMainNavigation} />
      ) : (
        <ArrowFatLeft size={20} weight="fill" color="var(--gray-600)" onClick={closeMainNavigation} />
      );
    
    const divClassName = navigation ? "open" : "";

    return (
        <Div className={divClassName}>
            { navigation && <MainNavigation active={setNavigation} />}
            <Headers>
              <div className="arrow">
                <Arrow>
                  {icon}
                </Arrow>
                <p>SocialCompass</p>
              </div>
              <div className="menu">
                <GlobeHemisphereEast size={32} weight="fill" color="var(--gray-200)" />
                <Bell size={32} weight="fill" color="var(--gray-200)" />
                <p>Eduarda Pereira</p>
                <img src={picture} />
              </div>
            </Headers>
        </Div>
    );
}

export default Header;