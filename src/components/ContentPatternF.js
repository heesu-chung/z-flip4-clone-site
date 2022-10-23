import "./ContentPatternF.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import FlipCamera from "../assets/galaxy_flip_camera.jpg";
import Night from "../assets/galaxy_night.jpg";
import Night1 from "../assets/galaxy_night_1.jpg";
import Night2 from "../assets/galaxy_night_2.png";

import Icon1 from "../assets/icon_1.svg";
import Icon2 from "../assets/icon_2.svg";
import Icon3 from "../assets/icon_3.svg";

import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect } from "react";

const ContentPatternF = ({
    category,
    title,
    content,
    alert,
    btnContent,
    mainImage,
    mainImageSize,
    image,
    imageSize,
    margin,
    align,
    screenX,
}) => {
    const scroll = useRecoilValue(scrollValue);

    const scrollBg = document.querySelector(".scroll-bg");

    const camera1 = document.querySelector(".camera1");
    const camera2 = document.querySelector(".camera2");
    const camera3 = document.querySelector(".camera3");

    useEffect(() => {
        if (screenX >= 1024) {
            if (scroll > 13400 && scroll < 14400) {
                if (scrollBg) {
                    scrollBg.style.transform = `translateY(${
                        -1 * (scroll - 13400) * 0.5
                    }px)`;
                }
            }

            if (scroll > 15700 && scroll < 16300 && camera1 && camera2) {
                camera1.style.opacity = "1";
                camera2.style.opacity = "1";
            } else {
                if (camera1 && camera2) {
                    camera1.style.opacity = "0";
                    camera2.style.opacity = "0";
                }
            }

            if (scroll > 16400 && scroll < 16800 && camera3) {
                camera3.style.opacity = "1";
            } else {
                if (camera3) camera3.style.opacity = "0";
            }
        } else if (screenX < 1024) {
            if (scroll > 10700 && scroll < 11700) {
                if (scrollBg) {
                    scrollBg.style.transform = `translateY(${
                        -1250 - (scroll - 13400) * 0.5
                    }px)`;
                }
            }

            if (scroll > 12600 && scroll < 13000 && camera1 && camera2) {
                camera1.style.opacity = "1";
                camera2.style.opacity = "1";
            } else {
                if (camera1 && camera2) {
                    camera1.style.opacity = "0";
                    camera2.style.opacity = "0";
                }
            }

            if (scroll > 12900 && scroll < 13500 && camera3) {
                camera3.style.opacity = "1";
            } else {
                if (camera3) camera3.style.opacity = "0";
            }
        }
    }, [scroll]);

    return (
        <section className="content-f">
            <div className="scroll-bg"></div>
            <div className="content-container">
                <p className="feature-title">Show off your dark side</p>
                <div className="image-container">
                    <img src={Night} alt="" className="image" />
                </div>

                <div className="content-flex">
                    <div className="feature-image">
                        {screenX < 1024 && mainImage[0] === "FlipCamera" && (
                            <img src={FlipCamera} alt="galaxy Flip Camera" />
                        )}
                        {screenX >= 1024 && mainImage[0] === "FlipCamera" && (
                            <img src={FlipCamera} alt="galaxy Flip Camera" />
                        )}
                    </div>

                    <div className="block feature-content ">
                        <ContentTitle title={title} category={category} />

                        {mainImage[0] === "FlipCamera" && (
                            <>
                                <Content content={content[0]} alert={alert} />
                                <Content content={content[1]} alert={alert} />
                            </>
                        )}
                        <Button btnContent={btnContent} />
                        {image && (
                            <ContentImage image={image} imageSize={imageSize} />
                        )}
                    </div>
                </div>
                <div className="feature-desc">
                    <div className="spec camera1">
                        <span className="image">
                            <img src={Icon1} alt="" />
                        </span>
                        <span className="t-mp">12MP</span>
                        <span className="t-camera">Ultra Wide Camera</span>
                        <span className="line spec-1"></span>
                    </div>
                    <div className="spec camera2">
                        <span className="image">
                            <img src={Icon2} alt="" />
                        </span>
                        <span className="t-mp">12MP</span>
                        <span className="t-camera">Wide Camera</span>
                        <span className="line spec-2"></span>
                    </div>
                    <div className="spec camera3">
                        <span className="image">
                            <img src={Icon3} alt="" />
                        </span>
                        <span className="t-mp">10MP</span>
                        <span className="t-camera">Selfie Camera</span>
                        <span className="line spec-3"></span>
                    </div>
                </div>

                <div className="feature-multicamera">
                    <div className="camera-back-container">
                        <img
                            src={Night1}
                            alt=""
                            className="camera-back image"
                        />
                    </div>
                    <div className="camera-front-container">
                        <img
                            src={Night2}
                            alt=""
                            className="camera-front image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentPatternF;
