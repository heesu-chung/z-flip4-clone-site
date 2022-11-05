import "./CameraImage.scss";

import TitleDesign from "./TitleDesign";

import Eco1 from "../assets/galaxy_eco_1.png";
import Eco2 from "../assets/galaxy_eco_2.png";
import Eco3 from "../assets/galaxy_eco_3.png";

import PopUp1 from "../assets/popup_fold.jpg";
import PopUp2 from "../assets/popup_watch.jpg";
import PopUp3 from "../assets/popup_buds.jpg";

import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";
import Button from "./contents/Button";

const CameraEcosystem = ({ screenX }) => {
    let screenImageSize = [];
    const scroll = useRecoilValue(scrollValue);

    if (screenX < 1024) {
        screenImageSize = [308, 336, 302];
    } else if (screenX >= 1024) {
        screenImageSize = [600, 569, 544];
    }

    const image1 = document.querySelector(".container-1");
    const image2 = document.querySelector(".container-2");
    const image3 = document.querySelector(".container-3");

    const [popupActive, setPopupActive] = useState(false);
    const [popup, setPopup] = useState(0);

    const ecoPopup = document.querySelector(".eco-popup");
    const ecoBtn = document.querySelector(".popup-btn");
    const onClick = (e) => {
        if (e === 4) {
            setPopupActive(false);
            return;
        }
        setPopupActive(true);
        setPopup(e);
    };
    const desc = ["Galaxy Z Fold4", "Galaxy Watch5", "Galaxy Buds2 Pro"];

    useEffect(() => {
        if (screenX >= 1441) {
            if (scroll >= 29300 && scroll < 31300) {
                if (image1 && image2 && image3) {
                    image1.style.transform = `translate(23vw,${
                        70 - (scroll - 29300) * 0.04
                    }px)`;
                    image2.style.transform = `translate(52vw,${
                        500 + (scroll - 29300) * 0.04
                    }px)`;
                    image3.style.transform = `translate(30vw,${
                        950 + -1 * (scroll - 29300) * 0.04
                    }px)`;
                }
                if (ecoPopup && ecoBtn) {
                    if (popup === 0)
                        ecoPopup.style.transform = `translate(-19vw, 500px)`;
                    else if (popup === 1)
                        ecoPopup.style.transform = `translate(0vw, 980px)`;
                    else if (popup === 2)
                        ecoPopup.style.transform = `translate(-19vw, 1180px)`;
                }
            }
        } else if (screenX >= 1024 && screenX < 1441) {
            if (scroll >= 29300 && scroll < 31300) {
                if (image1 && image2 && image3) {
                    image1.style.transform = `translate(13vw,${
                        70 - (scroll - 29300) * 0.04
                    }px)`;
                    image2.style.transform = `translate(55vw,${
                        500 + (scroll - 29300) * 0.04
                    }px)`;
                    image3.style.transform = `translate(21vw,${
                        950 + -1 * (scroll - 29300) * 0.04
                    }px)`;
                }
            }
        } else if (screenX >= 768 && screenX < 1024) {
            if (scroll >= 23400 && scroll < 25400) {
                if (image1 && image2 && image3) {
                    image1.style.transform = `translate(10vw,${
                        -1 * (scroll - 23400) * 0.04
                    }px)`;
                    image2.style.transform = `translate(55vw,${
                        300 + (scroll - 23400) * 0.04
                    }px)`;
                    image3.style.transform = `translate(22vw,${
                        650 + -1 * (scroll - 23400) * 0.04
                    }px)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll >= 22400 && scroll < 23600) {
                if (image1 && image2 && image3) {
                    image1.style.transform = `translate(5vw, ${
                        30 - (scroll - 22400) * 0.05
                    }px)`;
                    image2.style.transform = `translate(55vw, ${
                        150 + (scroll - 22400) * 0.04
                    }px)`;
                    image3.style.transform = `translate(15vw,${
                        370 + -1 * (scroll - 22400) * 0.04
                    }px)`;
                }
            }
        }
    }, [scroll, popup]);

    return (
        <>
            {popupActive && popup === 0 && (
                <div className="eco-popup popup-1">
                    <div className="eco-image-container">
                        {popup === 0 && (
                            <div className="eco-image eco-1">
                                <img
                                    src={PopUp1}
                                    className="eco-image-1"
                                    alt=""
                                />
                            </div>
                        )}
                        <div className="popup-btn" onClick={() => onClick(4)}>
                            <span className="btn-left eco-btn" />
                            <span className="btn-right eco-btn" />
                        </div>
                    </div>

                    <div className="eco-desc" style={{ display: "inline" }}>
                        <div className="eco-content">
                            <strong>{desc[popup]}</strong>
                            <Button btnContent="LearnMore" />
                        </div>
                    </div>
                </div>
            )}
            {popupActive && popup === 1 && (
                <div className="eco-popup popup-2">
                    <div className="eco-image-container">
                        {popup === 1 && (
                            <div className="eco-image eco-2">
                                <img
                                    src={PopUp2}
                                    className="eco-image-2"
                                    alt=""
                                />
                            </div>
                        )}

                        <div className="popup-btn" onClick={() => onClick(4)}>
                            <span className="btn-left eco-btn" />
                            <span className="btn-right eco-btn" />
                        </div>
                    </div>

                    <div className="eco-desc" style={{ display: "inline" }}>
                        <div className="eco-content">
                            <strong>{desc[popup]}</strong>
                            <Button btnContent="LearnMore" />
                        </div>
                    </div>
                </div>
            )}
            {popupActive && popup === 2 && (
                <div className="eco-popup popup-3">
                    <div className="eco-image-container">
                        {popup === 2 && (
                            <div className="eco-image eco-3">
                                <img
                                    src={PopUp3}
                                    className="eco-image-3"
                                    alt=""
                                />
                            </div>
                        )}
                        <div className="popup-btn" onClick={() => onClick(4)}>
                            <span className="btn-left eco-btn" />
                            <span className="btn-right eco-btn" />
                        </div>
                    </div>

                    <div className="eco-desc" style={{ display: "inline" }}>
                        <div className="eco-content">
                            <strong>{desc[popup]}</strong>
                            <Button btnContent="LearnMore" />
                        </div>
                    </div>
                </div>
            )}
            <div className="camera-image-container ecosystem">
                <TitleDesign
                    title="ECOSYSTEM"
                    subTitle={["The connected", "power of", "Samsung Galaxy"]}
                    align={true}
                    small={true}
                />
                <div className="image-container">
                    <div className="container container-1">
                        <button
                            className="btn btn-1"
                            onClick={() => onClick(0)}
                        >
                            <div className="btn-container-1 btn-container">
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                            </div>
                        </button>

                        <img src={Eco1} alt="" className="image-1" />
                    </div>
                    <div className="container container-2">
                        <button
                            className="btn btn-2"
                            onClick={() => onClick(1)}
                        >
                            <div className="btn-container-2 btn-container">
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                            </div>
                        </button>

                        <img src={Eco2} alt="" className="image-2" />
                    </div>
                    <div className="container container-3">
                        <button
                            className="btn btn-3"
                            onClick={() => onClick(2)}
                        >
                            <div className="btn-container-3 btn-container">
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                            </div>
                        </button>

                        <img src={Eco3} alt="" className="image-3" />
                    </div>
                    <div className="container bg"></div>
                </div>
                <p className="sold-separately">
                    *Galaxy Z Fold4, Galaxy Watch5 and Galaxy Buds2 Pro sold
                    separately.
                </p>
            </div>
        </>
    );
};
export default CameraEcosystem;
