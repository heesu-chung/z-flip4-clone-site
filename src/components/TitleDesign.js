import "./Title.scss";

import Arrow from "../assets/arrow-white.png";
import NavigationBar from "./global/NavigationBar";
import { useEffect, useState } from "react";
const TitleDesign = ({ title, subTitle, align, small }) => {
    const [design, setDesign] = useState(false);
    const [durability, setDurability] = useState(false);
    const [camera, setCamera] = useState(false);
    const [battery, setBattery] = useState(false);
    const [ecosystem, setEcosystem] = useState(false);

    const navigation = [
        2590, 5970, 10390, 18070, 22800, 3560, 7730, 12630, 24360, 29560,
    ];

    const onClick = (title) => {
        if (title === "DESIGN") {
            setDesign(!design);
        } else if (title === "DURABILITY") {
            setDurability(!durability);
        } else if (title === "CAMERA") {
            setCamera(!camera);
        } else if (title === "BATTERY") {
            setBattery(!battery);
        } else if (title === "ECOSYSTEM") {
            setEcosystem(!ecosystem);
        }

        setTimeout(() => {
            setDesign(false);
            setDurability(false);
            setCamera(false);
            setBattery(false);
            setEcosystem(false);
        }, 3000);
    };
    const screenX = window.innerWidth;

    return (
        <div className="category">
            <button className="menu" onClick={() => onClick(title)}>
                <span className="menu-title">{title}</span>
                <span className="dir">
                    <img src={Arrow} alt="" />
                </span>
            </button>

            <NavigationBar title={title} active={design} />

            <NavigationBar title={title} active={durability} />

            {title === "CAMERA" && (
                <NavigationBar title={title} active={camera} />
            )}

            {title === "BATTERY" && (
                <NavigationBar title={title} active={battery} />
            )}

            {title === "ECOSYSTEM" && (
                <NavigationBar title={title} active={ecosystem} />
            )}

            {small ? (
                [...subTitle].map((el, idx) => (
                    <p className="feature-title small" key={idx}>
                        {el}
                    </p>
                ))
            ) : (
                <p className="feature-title">{subTitle}</p>
            )}
        </div>
    );
};

export default TitleDesign;
