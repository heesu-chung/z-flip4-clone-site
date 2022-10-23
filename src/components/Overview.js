import "./Overview.scss";

import Intro from "../assets/galaxy_intro.mp4";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";

const Overview = ({ screenX }) => {
    let scroll = useRecoilValue(scrollValue);
    const overviewContents = document.querySelector(".overview-contents");

    const [play, setPlay] = useState(false);

    const listFirst = document.querySelector(".li-1");
    const listSecond = document.querySelector(".li-2");
    const listThird = document.querySelector(".li-3");
    const listFourth = document.querySelector(".li-4");
    const listFifth = document.querySelector(".li-5");

    const transformLeft = document.querySelector(".transform-left");
    const transformRight = document.querySelector(".transform-right");

    const video = document.getElementById("flip-video");

    let scrollLoc = 2000;
    let diff = 70;

    const navigation = [
        12060, 13860, 19000, 5970, 2590, 12410, 18140, 25200, 7730, 3560,
    ];

    screenX >= 1024 ? (scrollLoc = 2000) : (scrollLoc = 1300);
    screenX >= 1024 ? (diff = 120) : (diff = 70);

    const listScrollAction = [
        scrollLoc,
        scrollLoc + diff,
        scrollLoc + diff * 2,
        scrollLoc + diff * 3,
        scrollLoc + diff * 4,
        scrollLoc + diff * 5,
    ];

    const onClick = (e) => {
        switch (e) {
            case 1:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[0],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[5],
                          behavior: "smooth",
                      });
                return;
            case 2:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[1],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[6],
                          behavior: "smooth",
                      });
                return;
            case 3:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[2],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[7],
                          behavior: "smooth",
                      });
                return;
            case 4:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[3],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[8],
                          behavior: "smooth",
                      });
                return;
            case 5:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[4],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[9],
                          behavior: "smooth",
                      });
                return;
            default:
                return;
        }
    };

    const onMouseOver = (e) => {
        switch (e) {
            case 1:
                listFirst.style.transition = ".5s all ease";
                listFirst.style.opacity = "100%";
                listFirst.style.textDecoration = "underline";
                return;
            case 2:
                listSecond.style.transition = ".5s all ease";
                listSecond.style.opacity = "100%";
                listSecond.style.textDecoration = "underline";
                return;
            case 3:
                listThird.style.transition = ".5s all ease";
                listThird.style.opacity = "100%";
                listThird.style.textDecoration = "underline";
                return;
            case 4:
                listFourth.style.transition = ".5s all ease";
                listFourth.style.opacity = "100%";
                listFourth.style.textDecoration = "underline";
                return;
            case 5:
                listFifth.style.transition = ".5s all ease";
                listFifth.style.opacity = "100%";
                listFifth.style.textDecoration = "underline";
                return;
            default:
                return;
        }
    };

    const onMouseLeave = (e) => {
        switch (e) {
            case 1:
                listFirst.style.transition = ".5s all ease";
                listFirst.style.textDecoration = "none";

                if (scroll >= listScrollAction[0]) {
                    listFirst.style.opacity = "40%";
                }
                return;
            case 2:
                listSecond.style.transition = ".5s all ease";
                listSecond.style.textDecoration = "none";

                if (
                    scroll >= listScrollAction[2] ||
                    scroll < listScrollAction[1]
                ) {
                    listSecond.style.opacity = "40%";
                }
                return;
            case 3:
                listThird.style.transition = ".5s all ease";
                listThird.style.textDecoration = "none";

                if (
                    scroll >= listScrollAction[3] ||
                    scroll < listScrollAction[2]
                ) {
                    listThird.style.opacity = "40%";
                }
                return;
            case 4:
                listFourth.style.transition = ".5s all ease";
                listFourth.style.textDecoration = "none";

                if (
                    scroll >= listScrollAction[4] ||
                    scroll < listScrollAction[3]
                ) {
                    listFourth.style.opacity = "40%";
                }
                return;
            case 5:
                listFifth.style.transition = ".5s all ease";
                listFifth.style.textDecoration = "none";
                if (
                    scroll >= listScrollAction[5] ||
                    scroll < listScrollAction[4]
                ) {
                    listFifth.style.opacity = "40%";
                }
                return;
            default:
                return;
        }
    };

    useEffect(() => {
        if (scroll < listScrollAction[0] && scroll >= 0 && listFirst) {
            listFirst.style.opacity = "100%";
        } else {
            if (listFirst) {
                listFirst.style.opacity = "40%";
                listFirst.style.textDecoration = "none";
            }
        }
        if (
            scroll < listScrollAction[2] &&
            scroll >= listScrollAction[1] &&
            listSecond
        ) {
            listSecond.style.opacity = "100%";
        } else {
            if (listSecond) {
                listSecond.style.opacity = "40%";
            }
        }

        if (
            scroll < listScrollAction[3] &&
            scroll >= listScrollAction[2] &&
            listThird
        ) {
            listThird.style.opacity = "100%";
        } else {
            if (listThird) {
                listThird.style.opacity = "40%";
            }
        }

        if (
            scroll < listScrollAction[4] &&
            scroll >= listScrollAction[3] &&
            listFourth
        ) {
            listFourth.style.opacity = "100%";
        } else {
            if (listFourth) {
                listFourth.style.opacity = "40%";
            }
        }

        if (
            scroll < listScrollAction[5] &&
            scroll >= listScrollAction[4] &&
            listFifth
        ) {
            listFifth.style.opacity = "100%";
        } else {
            if (listFifth) {
                listFifth.style.opacity = "40%";
            }
        }

        if (screenX >= 1024) {
            if (scroll >= 2250 && scroll <= 4250) {
                overviewContents.style.zIndex = "3";
            }

            if (
                scroll >= 2600 &&
                scroll <= 3500 &&
                transformLeft &&
                transformRight
            ) {
                transformLeft.style.transform = `scaleX(0)`;
                transformRight.style.transform = `scaleX(0)`;
                if (!play) {
                    video.play();
                    setPlay(!play);
                }
            } else {
                if (transformLeft && transformRight) {
                    transformLeft.style.transform = `scaleX(1)`;
                    transformRight.style.transform = `scaleX(1)`;
                    if (play) setPlay(!play);
                }
            }
        } else if (screenX < 1024) {
            if (scroll >= 950 && scroll <= 2000) {
                overviewContents.style.zIndex = "3";
            }

            if (
                scroll >= 2000 &&
                scroll <= 2500 &&
                transformLeft &&
                transformRight
            ) {
                transformLeft.style.transform = `translateX(-200px)`;
                transformRight.style.transform = `translateX(200px)`;
                if (!play) {
                    video.play();
                    setPlay(!play);
                }
            } else {
                if (transformLeft && transformRight) {
                    transformLeft.style.transform = `translateX(0)`;
                    transformRight.style.transform = `translateX(0)`;
                    if (play) setPlay(!play);
                }
            }
        }
    }, [scroll]);

    return (
        <>
            <div className="overview-wrapper">
                <ul className="overview-contents">
                    <li
                        className="li-1"
                        onMouseOver={() => onMouseOver(1)}
                        onMouseLeave={() => onMouseLeave(2)}
                        onClick={() => onClick(1)}
                    >
                        <strong>Capture life with new perspective</strong>
                    </li>
                    <li
                        className="li-2"
                        onMouseOver={() => onMouseOver(2)}
                        onMouseLeave={() => onMouseLeave(2)}
                        onClick={() => onClick(2)}
                    >
                        <strong>Your best angles with FlexCam</strong>
                    </li>
                    <li
                        className="li-3"
                        onMouseOver={() => onMouseOver(3)}
                        onMouseLeave={() => onMouseLeave(3)}
                        onClick={() => onClick(3)}
                    >
                        <strong>Customizable to your content</strong>
                    </li>
                    <li
                        className="li-4"
                        onMouseOver={() => onMouseOver(4)}
                        onMouseLeave={() => onMouseLeave(4)}
                        onClick={() => onClick(4)}
                    >
                        <strong>Durable inside and out</strong>
                    </li>
                    <li
                        className="li-5"
                        onMouseOver={() => onMouseOver(5)}
                        onMouseLeave={() => onMouseLeave(5)}
                        onClick={() => onClick(5)}
                    >
                        <strong>Unfold your world</strong>
                    </li>
                </ul>
            </div>
            <div className="intro-video">
                <div className="transforms">
                    <div className="transform-left transform"></div>
                    <div className="transform-right transform"></div>
                </div>
                <div className="video-container">
                    <video
                        src={Intro}
                        muted
                        className="video"
                        id="flip-video"
                    ></video>
                </div>
            </div>
        </>
    );
};

export default Overview;
