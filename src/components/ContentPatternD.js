import "./ContentPatternD.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import Exterior from "../assets/galaxy_exterior.jpg";
import Glass from "../assets/galaxy_glass.png";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";

const ContentPatternD = ({
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
}) => {
    const screenX = window.innerWidth;
    const scroll = useRecoilValue(scrollValue);

    const upperGlass = document.querySelector(".upper");
    const lowerGlass = document.querySelector(".lower");

    const [glassState, setGlassState] = useState(false);

    useEffect(() => {
        if (screenX >= 1024) {
            if (scroll > 9400 && scroll < 10400) {
                if (upperGlass && lowerGlass && !glassState) {
                    setGlassState(true);
                    upperGlass.style.transition = `0.7s all ease-in-out`;
                    lowerGlass.style.transition = `0.7s all ease-in-out`;
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(45px, -20px)`;
                        lowerGlass.style.transform = `translate(45px, -20px)`;
                    }, 200);
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(45px, 0px)`;
                        lowerGlass.style.transform = `translate(45px, 0px)`;
                    }, 1000);
                    setTimeout(() => {
                        upperGlass.style.opacity = 0;
                        lowerGlass.style.opacity = 0;
                    }, 1000);
                }
            } else {
                if (upperGlass && lowerGlass) {
                    upperGlass.style.opacity = 1;
                    lowerGlass.style.opacity = 1;
                    upperGlass.style.transition = `none`;
                    lowerGlass.style.transition = `none`;
                    upperGlass.style.transform = `translate(45px, -60px)`;
                    lowerGlass.style.transform = `translate(45px, -30px)`;
                    setGlassState(false);
                }
            }
        } else if (screenX >= 768 && screenX < 1024) {
            if (scroll > 8200 && scroll < 9100) {
                if (upperGlass && lowerGlass && !glassState) {
                    setGlassState(true);
                    upperGlass.style.transition = `0.7s all ease-in-out`;
                    lowerGlass.style.transition = `0.7s all ease-in-out`;
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(0px, -20px)`;
                        lowerGlass.style.transform = `translate(0px, -20px)`;
                    }, 200);
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(0px, 0px)`;
                        lowerGlass.style.transform = `translate(0px, 0px)`;
                    }, 1000);
                    setTimeout(() => {
                        upperGlass.style.opacity = 0;
                        lowerGlass.style.opacity = 0;
                    }, 1000);
                }
            } else {
                if (upperGlass && lowerGlass) {
                    upperGlass.style.opacity = 1;
                    lowerGlass.style.opacity = 1;
                    upperGlass.style.transition = `none`;
                    lowerGlass.style.transition = `none`;
                    upperGlass.style.transform = `translate(0px, -60px)`;
                    lowerGlass.style.transform = `translate(0px, -30px)`;
                    setGlassState(false);
                }
            }
        } else if (screenX < 768) {
            if (scroll > 7900 && scroll < 8500) {
                if (upperGlass && lowerGlass && !glassState) {
                    setGlassState(true);
                    upperGlass.style.transition = `0.7s all ease-in-out`;
                    lowerGlass.style.transition = `0.7s all ease-in-out`;
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(45px, -20px)`;
                        lowerGlass.style.transform = `translate(45px, -20px)`;
                    }, 200);
                    setTimeout(() => {
                        upperGlass.style.transform = `translate(45px, 0px)`;
                        lowerGlass.style.transform = `translate(45px, 0px)`;
                    }, 1000);
                    setTimeout(() => {
                        upperGlass.style.opacity = 0;
                        lowerGlass.style.opacity = 0;
                    }, 1000);
                }
            } else {
                if (upperGlass && lowerGlass) {
                    upperGlass.style.opacity = 1;
                    lowerGlass.style.opacity = 1;
                    upperGlass.style.transition = `none`;
                    lowerGlass.style.transition = `none`;

                    upperGlass.style.transform = `translate(45px, -60px)`;
                    lowerGlass.style.transform = `translate(45px, -30px)`;
                    setGlassState(false);
                }
            }
        }
    }, [scroll]);

    return (
        <section className="content-d">
            <div className="block feature-content">
                <ContentTitle title={title} category={category} />

                <Content content={content} alert={alert} />
                <Button btnContent={btnContent} />
                {image && <ContentImage image={image} imageSize={imageSize} />}
            </div>

            <div className="feature-image">
                {screenX < 768 && mainImage[0] === "Exterior" && (
                    <>
                        <img
                            src={Exterior}
                            className="exterior"
                            style={{ width: `${mainImageSize[0]}px` }}
                            alt="galaxy exterior"
                        />
                        <img
                            src={Glass}
                            className="glass upper"
                            alt=""
                            style={{ width: `${mainImageSize[0] - 2}px` }}
                        />
                        <img
                            src={Glass}
                            className="glass lower"
                            alt=""
                            style={{ width: `${mainImageSize[0] - 2}px` }}
                        />
                    </>
                )}
                {screenX >= 768 &&
                    screenX < 1024 &&
                    mainImage[0] === "Exterior" && (
                        <>
                            <img
                                src={Exterior}
                                className="exterior"
                                style={{ width: `346px` }}
                                alt="galaxy exterior"
                            />
                            <img
                                src={Glass}
                                className="glass upper"
                                alt=""
                                style={{ width: `344px` }}
                            />
                            <img
                                src={Glass}
                                className="glass lower"
                                alt=""
                                style={{ width: `344px` }}
                            />
                        </>
                    )}
                {screenX >= 1024 && mainImage[0] === "Exterior" && (
                    <>
                        <img
                            src={Exterior}
                            className="exterior"
                            style={{ width: `${mainImageSize[1]}px` }}
                            alt="galaxy exterior"
                        />
                        <img
                            src={Glass}
                            className="glass upper"
                            alt=""
                            style={{ width: `${mainImageSize[1] - 2}px` }}
                        />
                        <img
                            src={Glass}
                            className="glass lower"
                            alt=""
                            style={{ width: `${mainImageSize[1] - 2}px` }}
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default ContentPatternD;
