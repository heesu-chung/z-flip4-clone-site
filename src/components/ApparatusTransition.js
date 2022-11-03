import "./ApparatusTransition.scss";

import PurpleFront from "../assets/front_purple.jpg";
import BlackFront from "../assets/front_black.jpg";
import GoldFront from "../assets/front_gold.jpg";
import BlueFront from "../assets/front_blue.jpg";

import PurpleSide from "../assets/side_purple.jpg";
import BlackSide from "../assets/side_black.jpg";
import GoldSide from "../assets/side_gold.jpg";
import BlueSide from "../assets/side_blue.jpg";

import BlueFrontScreen from "../assets/front_blue_screen.jpg";
import BlackFrontScreen from "../assets/front_black_screen.jpg";
import PurpleFrontScreen from "../assets/front_purple_screen.jpg";
import GoldFrontScreen from "../assets/front_gold_screen.jpg";

import BlueSideScreen from "../assets/side_blue_screen.jpg";
import PurpleSideScreen from "../assets/side_purple_screen.jpg";
import BlackSideScreen from "../assets/side_black_screen.jpg";
import GoldSideScreen from "../assets/side_gold_screen.jpg";
import { useEffect, useState } from "react";

const ApparatusTransition = ({ screenX }) => {
    const [transition, setTransition] = useState(1);

    const btn1 = document.querySelector(".b-1");
    const btn2 = document.querySelector(".b-2");
    const btn3 = document.querySelector(".b-3");
    const btn4 = document.querySelector(".b-4");

    const front1 = document.querySelector(".front-1");
    const front2 = document.querySelector(".front-2");
    const front3 = document.querySelector(".front-3");
    const front4 = document.querySelector(".front-4");

    const desc1 = document.querySelector(".desc-1");
    const desc2 = document.querySelector(".desc-2");
    const desc3 = document.querySelector(".desc-3");
    const desc4 = document.querySelector(".desc-4");

    const descImage1 = document.querySelector(".desc-image-1");
    const descImage2 = document.querySelector(".desc-image-2");
    const descImage3 = document.querySelector(".desc-image-3");
    const descImage4 = document.querySelector(".desc-image-4");

    const borderColor = `#197ae5`;

    useEffect(() => {
        if (screenX) {
            if (btn1 && btn2 && btn3 && btn4) {
                if (transition === 1) {
                    btn1.style.border = `2px solid ${borderColor}`;
                    btn2.style.border = `none`;
                    btn3.style.border = `none`;
                    btn4.style.border = `none`;
                } else if (transition === 2) {
                    btn2.style.border = `2px solid ${borderColor}`;
                    btn1.style.border = `none`;
                    btn3.style.border = `none`;
                    btn4.style.border = `none`;
                } else if (transition === 3) {
                    btn3.style.border = `2px solid ${borderColor}`;
                    btn2.style.border = `none`;
                    btn1.style.border = `none`;
                    btn4.style.border = `none`;
                } else {
                    btn4.style.border = `2px solid ${borderColor}`;
                    btn2.style.border = `none`;
                    btn3.style.border = `none`;
                    btn1.style.border = `none`;
                }
            }
            if (front1 && front2 && front3 && front4) {
                if (transition === 1) {
                    front1.style.opacity = `1`;
                    front2.style.opacity = `0`;
                    front3.style.opacity = `0`;
                    front4.style.opacity = `0`;
                } else if (transition === 2) {
                    front2.style.opacity = `1`;
                    front1.style.opacity = `0`;
                    front3.style.opacity = `0`;
                    front4.style.opacity = `0`;
                } else if (transition === 3) {
                    front3.style.opacity = `1`;
                    front2.style.opacity = `0`;
                    front1.style.opacity = `0`;
                    front4.style.opacity = `0`;
                } else {
                    front4.style.opacity = `1`;
                    front2.style.opacity = `0`;
                    front3.style.opacity = `0`;
                    front1.style.opacity = `0`;
                }
            }
            if (desc1 && desc2 && desc3 && desc4) {
                if (transition === 1) {
                    desc1.style.opacity = `1`;
                    desc2.style.opacity = `0`;
                    desc3.style.opacity = `0`;
                    desc4.style.opacity = `0`;
                } else if (transition === 2) {
                    desc2.style.opacity = `1`;
                    desc1.style.opacity = `0`;
                    desc3.style.opacity = `0`;
                    desc4.style.opacity = `0`;
                } else if (transition === 3) {
                    desc3.style.opacity = `1`;
                    desc2.style.opacity = `0`;
                    desc1.style.opacity = `0`;
                    desc4.style.opacity = `0`;
                } else {
                    desc4.style.opacity = `1`;
                    desc2.style.opacity = `0`;
                    desc3.style.opacity = `0`;
                    desc1.style.opacity = `0`;
                }
            }
            if (descImage1 && descImage2 && descImage3 && descImage4) {
                if (transition === 1) {
                    descImage1.style.opacity = `1`;
                    descImage2.style.opacity = `0`;
                    descImage3.style.opacity = `0`;
                    descImage4.style.opacity = `0`;
                } else if (transition === 2) {
                    descImage2.style.opacity = `1`;
                    descImage1.style.opacity = `0`;
                    descImage3.style.opacity = `0`;
                    descImage4.style.opacity = `0`;
                } else if (transition === 3) {
                    descImage3.style.opacity = `1`;
                    descImage2.style.opacity = `0`;
                    descImage1.style.opacity = `0`;
                    descImage4.style.opacity = `0`;
                } else {
                    descImage4.style.opacity = `1`;
                    descImage2.style.opacity = `0`;
                    descImage3.style.opacity = `0`;
                    descImage1.style.opacity = `0`;
                }
            }
        }
    }, [transition]);

    const onClick = (e) => {
        setTransition(e);
    };

    return (
        <section className="transition">
            <div className="front">
                {screenX < 768 && (
                    <div className="front-set">
                        {/* <div className="front-blank" /> */}
                        <img src={PurpleFront} className="front-1" alt="" />
                        <img src={BlackFront} className="front-2" alt="" />
                        <img src={GoldFront} className="front-3" alt="" />
                        <img src={BlueFront} className="front-4" alt="" />
                    </div>
                )}
                {screenX < 1024 && screenX >= 768 && (
                    <div className="front-set">
                        <img
                            src={PurpleFrontScreen}
                            className="front-1"
                            alt=""
                        />
                        <img
                            src={BlackFrontScreen}
                            className="front-2"
                            alt=""
                        />
                        <img src={GoldFrontScreen} className="front-3" alt="" />
                        <img src={BlueFrontScreen} className="front-4" alt="" />
                    </div>
                )}
                {screenX >= 1024 && (
                    <div className="front-set">
                        <img
                            src={PurpleFrontScreen}
                            className="front-1"
                            alt=""
                        />
                        <img
                            src={BlackFrontScreen}
                            className="front-2"
                            alt=""
                        />
                        <img src={GoldFrontScreen} className="front-3" alt="" />
                        <img src={BlueFrontScreen} className="front-4" alt="" />
                    </div>
                )}
            </div>
            <div className="side">
                <label htmlFor="" className="colors">
                    <div className="btn-block">
                        <div
                            className="btn-container b-1"
                            onClick={() => onClick(1)}
                        >
                            <div
                                className="purple btn"
                                style={{ background: "#bdb3d3" }}
                            ></div>
                        </div>
                        <div
                            className="btn-container b-2"
                            onClick={() => onClick(2)}
                        >
                            <div
                                className="black btn"
                                style={{ background: "#000" }}
                            ></div>
                        </div>
                        <div
                            className="btn-container b-3"
                            onClick={() => onClick(3)}
                        >
                            <div
                                className="gold btn"
                                style={{ background: "#f1ddd8" }}
                            ></div>
                        </div>
                        <div
                            className="btn-container b-4"
                            onClick={() => onClick(4)}
                        >
                            <div
                                className="blue btn"
                                style={{ background: "#bbd0dc" }}
                            ></div>
                        </div>
                    </div>
                </label>

                <div className="image-container">
                    {screenX < 768 && (
                        <div className="desc-set">
                            <span className="desc desc-1">Bora Purple</span>
                            <span className="desc desc-2">Graphite</span>

                            <span className="desc desc-3">Pink Gold</span>

                            <span className="desc desc-4">Blue</span>
                            <div className="images">
                                <img
                                    src={PurpleSide}
                                    className="desc-image-1"
                                    alt=""
                                />
                                <img
                                    src={BlackSide}
                                    className="desc-image-2"
                                    alt=""
                                />
                                <img
                                    src={GoldSide}
                                    className="desc-image-3"
                                    alt=""
                                />
                                <img
                                    src={BlueSide}
                                    className="desc-image-4"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                    {screenX < 1024 && screenX >= 768 && (
                        <div className="desc-set">
                            <span className="desc desc-1">Bora Purple</span>
                            <img
                                src={PurpleSideScreen}
                                className="desc-image-1"
                                alt=""
                            />

                            <span className="desc desc-2">Graphite</span>
                            <img
                                src={BlackSideScreen}
                                className="desc-image-2"
                                alt=""
                            />

                            <span className="desc desc-3">Pink Gold</span>
                            <img
                                src={GoldSideScreen}
                                className="desc-image-3"
                                alt=""
                            />

                            <span className="desc desc-4">Blue</span>
                            <img
                                src={BlueSideScreen}
                                className="desc-image-4"
                                alt=""
                            />
                        </div>
                    )}
                    {screenX >= 1024 && (
                        <div className="desc-set">
                            <span className="desc desc-1">Bora Purple</span>
                            <img
                                src={PurpleSideScreen}
                                className="desc-image-1"
                                alt=""
                            />

                            <span className="desc desc-2">Graphite</span>
                            <img
                                src={BlackSideScreen}
                                className="desc-image-2"
                                alt=""
                            />

                            <span className="desc desc-3">Pink Gold</span>
                            <img
                                src={GoldSideScreen}
                                className="desc-image-3"
                                alt=""
                            />

                            <span className="desc desc-4">Blue</span>
                            <img
                                src={BlueSideScreen}
                                className="desc-image-4"
                                alt=""
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ApparatusTransition;
