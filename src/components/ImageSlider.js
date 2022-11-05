import "./ImageSlider.scss";

import Slide1 from "../assets/galaxy_slide_1.jpg";
import Slide2 from "../assets/galaxy_slide_2.jpg";
import Slide3 from "../assets/galaxy_slide_3.jpg";
import Slide4 from "../assets/galaxy_slide_4.jpg";
import Slide5 from "../assets/galaxy_slide_5.jpg";

import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";
import { useEffect, useState } from "react";

const ImageSlider = ({ screenX }) => {
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const scrollBar = document.querySelector(".scroll-bar");
    const container = document.querySelector(".slide-container");

    const [scroll, setScroll] = useState(0);
    const [mobileScroll, setMobileScroll] = useState(0);

    const onClick = (e) => {
        if (e && scroll !== 2) {
            setScroll((scroll + 1) % 3);
        } else if (!e && scroll !== 0) {
            setScroll((scroll - 1) % 3);
        }
    };

    const onClickMobile = (e) => {
        if (e && scroll !== 4) {
            setScroll((scroll + 1) % 5);
        } else if (!e && scroll !== 0) {
            setScroll((scroll - 1) % 5);
        }
    };

    let imgDiff = [];
    let barDiff = [];
    if (screenX >= 768 && screenX < 1024) {
        imgDiff = [0, -30.7, -56.4];
        barDiff = [0, 34, 68];
    } else if (screenX >= 1024 && screenX < 1441) {
        imgDiff = [0, -19.7, -36.4];
        barDiff = [0, 34, 68];
    }

    useEffect(() => {
        if (screenX >= 1441) {
            if (scroll === 0 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${0}%)`;
                    scrollBar.style.transform = `translateX(${0}%)`;
                }
            } else if (scroll === 1 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "pointer";
                rightBtn.style.cursor = "pointer";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-19.7}%)`;
                    scrollBar.style.transform = `translateX(${50}%)`;
                }
            } else if (scroll === 2 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0";
                rightBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-27.3}%)`;
                    scrollBar.style.transform = `translateX(${67}%)`;
                }
            }
        } else if (screenX >= 768 && screenX <= 1440) {
            if (scroll === 0 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${imgDiff[0]}%)`;
                    scrollBar.style.transform = `translateX(${barDiff[0]}%)`;
                }
            } else if (scroll === 1 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "pointer";
                rightBtn.style.cursor = "pointer";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${imgDiff[1]}%)`;
                    scrollBar.style.transform = `translateX(${barDiff[1]}%)`;
                }
            } else if (scroll === 2 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0";
                rightBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${imgDiff[2]}%)`;
                    scrollBar.style.transform = `translateX(${barDiff[2]}%)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll === 0 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${0}%)`;
                    scrollBar.style.transform = `translateX(${0}%)`;
                }
            } else if (scroll === 1 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                leftBtn.style.cursor = "pointer";
                rightBtn.style.cursor = "pointer";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-20}%)`;
                    scrollBar.style.transform = `translateX(${62.5}%)`;
                }
            } else if (scroll === 2 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                rightBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-40}%)`;
                    scrollBar.style.transform = `translateX(${125}%)`;
                }
            } else if (scroll === 3 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                rightBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-60}%)`;
                    scrollBar.style.transform = `translateX(${187.5}%)`;
                }
            } else if (scroll === 4 && leftBtn && rightBtn) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0";
                rightBtn.style.cursor = "auto";
                if (container && scrollBar) {
                    container.style.transform = `translateX(${-77}%)`;
                    scrollBar.style.transform = `translateX(${250}%)`;
                }
            }
        }
    }, [scroll]);

    return (
        <>
            <div className="btns-container">
                <div className="btns">
                    {screenX >= 768 && (
                        <>
                            <button
                                className="btn left"
                                onClick={() => onClick(false)}
                            >
                                <img src={ArrowLeft} alt="" />
                            </button>
                            <button
                                className="btn right"
                                onClick={() => onClick(true)}
                            >
                                <img src={ArrowRight} alt="" />
                            </button>
                        </>
                    )}
                    {screenX < 768 && (
                        <>
                            <button
                                className="btn left"
                                onClick={() => onClickMobile(false)}
                            >
                                <img src={ArrowLeft} alt="" />
                            </button>
                            <button
                                className="btn right"
                                onClick={() => onClickMobile(true)}
                            >
                                <img src={ArrowRight} alt="" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="slide-list">
                <ul className="slide-container">
                    <li>
                        <img src={Slide1} alt="" className="slide-item" />
                    </li>
                    <li>
                        <img src={Slide2} alt="" className="slide-item" />
                    </li>
                    <li>
                        <img src={Slide3} alt="" className="slide-item" />
                    </li>
                    <li>
                        <img src={Slide4} alt="" className="slide-item" />
                    </li>
                    <li>
                        <img src={Slide5} alt="" className="slide-item" />
                    </li>
                </ul>
                <div className="scroll-bar-container">
                    <div className="scroll-bar"></div>
                </div>
            </div>
        </>
    );
};

export default ImageSlider;
