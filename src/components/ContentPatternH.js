import "./ContentPatternB.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import QuickShot from "../assets/galaxy_quickshot.png";
import QuickTransform from "../assets/galaxy_quick_transform.jpg";
import SocialVideo from "../assets/galaxy-social-video.webm";
import VideoCtrl from "../assets/video_controller.png";
import Quick from "../assets/galaxy_text_3.jpg";
import Shot from "../assets/galaxy_text_4.jpg";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";

const ContentPatternH = ({
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
    const [activate, setActivate] = useState(false);
    const [videoActivate, setVideoActivate] = useState(false);
    const [play, setPlay] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    const quickShotImage = document.querySelector(".quick-shot-image");
    const quick = document.querySelector(".Quick");
    const shot = document.querySelector(".Shot");
    const socialVideo = document.querySelector(".social-video");
    const socialVideoContent = document.querySelector(".social-video-content");

    const quickTransform = document.querySelector(".transform-image");

    const btnPlay = document.querySelector(".play");
    const btnPause = document.querySelector(".pause");

    const diff = 1200;

    useEffect(() => {
        if (screenX >= 1024) {
            if (scroll > 19300 && scroll < 20500) {
                if (
                    quick &&
                    shot &&
                    quickShotImage &&
                    quickTransform &&
                    !activate
                ) {
                    setActivate(true);
                    quickShotImage.style.transform = `rotate(0)`;
                    quickTransform.style.transform = `rotate(90deg)`;
                    quickTransform.style.objectPosition = `-40px 20px`;
                    quickTransform.style.transition = " 0.3s all ease-in-out";
                    setTimeout(() => {
                        quick.style.transform = `translate(${
                            -100 - diff
                        }px, -80px)`;
                        shot.style.transform = `translate(${
                            180 + diff
                        }px, 530px)`;
                        quickTransform.style.transform = `rotate(90deg) scale(0.7)`;
                    }, 500);
                    quick.style.transition = `0.5s all ease-in`;
                    shot.style.transition = `0.5s all ease-in`;
                }
            } else {
                if (quick && shot && quickShotImage && quickTransform) {
                    setActivate(false);
                    quickShotImage.style.transform = `rotate(90deg)`;
                    quick.style.transform = `translate(-100px, -80px)`;
                    shot.style.transform = `translate(180px, 530px)`;
                    quick.style.transition = `none`;
                    shot.style.transition = `none`;

                    quickTransform.style.transition = "none";
                    quickTransform.style.transform = `rotate(0deg)`;
                    quickTransform.style.objectPosition = `0 -30px`;
                }
            }

            if (scroll > 22000) {
                if (socialVideo && !videoActivate) {
                    setVideoActivate(true);
                    setPlay(true);
                    socialVideoContent.play();
                }
            } else {
                setVideoActivate(false);
                setPlay(false);
            }
        } else if (screenX < 768) {
            if (scroll > 14400 && scroll < 15600) {
                if (
                    quick &&
                    shot &&
                    quickShotImage &&
                    quickTransform &&
                    !activate
                ) {
                    setActivate(true);
                    quickShotImage.style.transform = `rotate(0)`;
                    quickTransform.style.transform = `rotate(90deg)`;
                    quickTransform.style.objectPosition = `-40px 20px`;
                    quickTransform.style.transition = " 0.3s all ease-in-out";
                    setTimeout(() => {
                        quick.style.transform = `translate(${
                            -100 - diff
                        }px, -80px)`;
                        shot.style.transform = `translate(${
                            180 + diff
                        }px, 380px)`;
                        quickTransform.style.transform = `rotate(90deg) scale(0.7)`;
                    }, 500);
                    quick.style.transition = `0.5s all ease-in`;
                    shot.style.transition = `0.5s all ease-in`;
                }
            } else {
                if (quick && shot && quickShotImage && quickTransform) {
                    setActivate(false);
                    quickShotImage.style.transform = `rotate(90deg)`;
                    quick.style.transform = `translate(10px, -80px)`;
                    shot.style.transform = `translate(100px, 380px)`;
                    quick.style.transition = `none`;
                    shot.style.transition = `none`;
                    quickTransform.style.transition = "none";
                    quickTransform.style.transform = `rotate(0deg)`;
                    quickTransform.style.objectPosition = `0 -30px`;
                }
            }

            if (scroll > 16800) {
                if (socialVideo && !videoActivate) {
                    setVideoActivate(true);
                    setPlay(true);
                    socialVideoContent.play();
                }
            } else {
                setVideoActivate(false);
                setPlay(false);
            }
        }
    }, [scroll, mouseOver]);

    return (
        <section className="content-b">
            <div className="visual-text quick-shot">
                {mainImage[0] === "QuickShot" && (
                    <>
                        <span className="Quick">
                            <img src={Quick} alt="" />
                        </span>
                        <span className="Shot">
                            <img src={Shot} alt="" />
                        </span>
                    </>
                )}
                {screenX < 1024 && mainImage[0] === "QuickShot" && (
                    <div className="img-container quick-shot-image">
                        <img
                            src={QuickShot}
                            style={{ maxWidth: "357px" }}
                            alt=""
                        />
                        <div className="quick-shot-transform">
                            <img
                                src={QuickTransform}
                                className="transform-image"
                                alt=""
                            />
                        </div>
                    </div>
                )}
                {screenX >= 1024 && mainImage[0] === "QuickShot" && (
                    <div className="img-container quick-shot-image">
                        <img
                            src={QuickShot}
                            style={{ maxWidth: "480px" }}
                            alt=""
                        />
                        <div className="quick-shot-transform">
                            <img
                                src={QuickTransform}
                                className="transform-image"
                                alt=""
                            />
                        </div>
                    </div>
                )}
            </div>

            {screenX < 1024 && mainImage[0] === "SocialVideo" && (
                <div className="img-container social-video">
                    <video
                        src={SocialVideo}
                        muted
                        type="video/webm"
                        className="social-video-content"
                    />
                </div>
            )}
            {screenX >= 1024 && mainImage[0] === "SocialVideo" && (
                <>
                    <div className="img-container social-video">
                        <video
                            src={SocialVideo}
                            muted
                            style={{ maxWidth: "680px" }}
                            type="video/webm"
                            className="social-video-content"
                        />
                        {!play && (
                            <div className="ctrl play">
                                <img
                                    src={VideoCtrl}
                                    className="video-play"
                                    alt="flex cam for social"
                                />
                            </div>
                        )}
                        {play && (
                            <div className="ctrl pause">
                                <img
                                    src={VideoCtrl}
                                    className="video-pause"
                                    alt="flex cam for social"
                                />
                            </div>
                        )}
                    </div>
                </>
            )}

            <div className="content-block">
                <div className="block feature-title">
                    <ContentTitle title={title} category={category} />
                </div>

                <div className="block feature-desc">
                    <Content content={content} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage image={image} imageSize={imageSize} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContentPatternH;
