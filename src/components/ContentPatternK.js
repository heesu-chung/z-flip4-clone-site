import "./ContentPatternK.scss";

import Cover1 from "../assets/galaxy_cover_1.jpg";
import Cover2 from "../assets/galaxy_cover_2.jpg";
import Cover3 from "../assets/galaxy_cover_3.jpg";
import Cover4 from "../assets/galaxy_cover_4.webm";
import Cover41 from "../assets/galaxy_cover_4_1.webm";
import Cover5 from "../assets/galaxy_cover_5.jpg";
import Cover6 from "../assets/galaxy_cover_6.jpg";
import Cover7 from "../assets/galaxy_cover_7.jpg";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";

const ContentPatternK = ({ title, subTitle, screenX }) => {
    const scroll = useRecoilValue(scrollValue);
    const [videoActivate, setVideoActivate] = useState(false);

    const cover1 = document.querySelector(".cover1");
    const cover2 = document.querySelector(".cover2");
    const cover3 = document.querySelector(".cover3");
    const cover4 = document.querySelector(".cover4");
    const cover5 = document.querySelector(".cover5");
    const cover6 = document.querySelector(".cover6");
    const cover7 = document.querySelector(".cover7");

    const coverVideo = document.querySelector(".cover-video");

    useEffect(() => {
        if (screenX >= 1024) {
            if (scroll > 25000) {
                if (
                    cover1 &&
                    cover2 &&
                    cover3 &&
                    cover4 &&
                    cover6 &&
                    cover7 &&
                    coverVideo
                ) {
                    setTimeout(() => {
                        cover3.style.transition = `.6s all ease`;
                        cover6.style.transition = `.7s all ease`;
                        cover2.style.transition = `.7s all ease`;

                        cover4.style.transition = `.5s all ease-out`;
                        cover1.style.transition = `.7s all ease`;
                        cover7.style.transition = `.8s all ease`;

                        cover3.style.transform = `translateX(0)`;
                        cover6.style.transform = `translateX(0)`;
                        cover2.style.transform = `translateX(0)`;

                        cover4.style.transform = `translateX(0)`;
                        cover1.style.transform = `translateX(0)`;
                        cover7.style.transform = `translateX(0)`;
                    }, 100);

                    if (!videoActivate) {
                        setVideoActivate(true);
                        coverVideo.play();
                    }
                }
            } else {
                if (cover1 && cover2 && cover3 && cover4 && cover6 && cover7) {
                    setVideoActivate(false);
                    cover3.style.transition = `none`;
                    cover6.style.transition = `none`;
                    cover2.style.transition = `none`;

                    cover4.style.transition = `none`;
                    cover1.style.transition = `none`;
                    cover7.style.transition = `none`;

                    cover3.style.transform = `translateX(-80%)`;
                    cover6.style.transform = `translateX(-80%)`;
                    cover2.style.transform = `translateX(-80%)`;

                    cover4.style.transform = `translateX(80%)`;
                    cover1.style.transform = `translateX(80%)`;
                    cover7.style.transform = `translateX(80%)`;
                }
            }
        } else if (screenX >= 768 && screenX < 1024) {
            if (scroll > 20450) {
                if (
                    cover1 &&
                    cover2 &&
                    cover3 &&
                    cover4 &&
                    cover6 &&
                    cover7 &&
                    coverVideo
                ) {
                    setTimeout(() => {
                        cover3.style.transition = `.6s all ease`;
                        cover6.style.transition = `.7s all ease`;
                        cover2.style.transition = `.7s all ease`;

                        cover4.style.transition = `.5s all ease-out`;
                        cover1.style.transition = `.7s all ease`;
                        cover7.style.transition = `.8s all ease`;

                        cover3.style.transform = `translateX(0)`;
                        cover6.style.transform = `translateX(0)`;
                        cover2.style.transform = `translateX(0)`;

                        cover4.style.transform = `translateX(0)`;
                        cover1.style.transform = `translateX(0)`;
                        cover7.style.transform = `translateX(0)`;
                    }, 100);

                    if (!videoActivate) {
                        setVideoActivate(true);
                        coverVideo.play();
                    }
                }
            } else {
                if (cover1 && cover2 && cover3 && cover4 && cover6 && cover7) {
                    setVideoActivate(false);
                    cover3.style.transition = `none`;
                    cover6.style.transition = `none`;
                    cover2.style.transition = `none`;

                    cover4.style.transition = `none`;
                    cover1.style.transition = `none`;
                    cover7.style.transition = `none`;

                    cover3.style.transform = `translateX(-80%)`;
                    cover6.style.transform = `translateX(-80%)`;
                    cover2.style.transform = `translateX(-80%)`;

                    cover4.style.transform = `translateX(80%)`;
                    cover1.style.transform = `translateX(80%)`;
                    cover7.style.transform = `translateX(80%)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll > 18700) {
                if (
                    cover1 &&
                    cover2 &&
                    cover3 &&
                    cover4 &&
                    cover5 &&
                    cover6 &&
                    cover7 &&
                    coverVideo
                ) {
                    setTimeout(() => {
                        cover1.style.transition = `.6s all ease`;
                        cover2.style.transition = `.7s all ease`;
                        cover3.style.transition = `.7s all ease`;
                        cover4.style.transition = `.3s all ease-out`;
                        cover5.style.transition = `.7s all ease`;
                        cover6.style.transition = `.8s all ease`;
                        cover7.style.transition = `.8s all ease`;

                        cover1.style.transform = `translateX(0)`;
                        cover2.style.transform = `translateX(0)`;
                        cover3.style.transform = `translateX(0)`;
                        cover4.style.transform = `translateX(0)`;
                        cover5.style.transform = `translateX(0)`;
                        cover6.style.transform = `translateX(0)`;
                        cover7.style.transform = `translateX(0)`;
                    }, 100);

                    if (!videoActivate) {
                        setVideoActivate(true);
                        coverVideo.play();
                    }
                }
            } else if (scroll <= 18700) {
                if (
                    cover1 &&
                    cover2 &&
                    cover3 &&
                    cover4 &&
                    cover5 &&
                    cover6 &&
                    cover7
                ) {
                    setVideoActivate(false);
                    cover1.style.transition = `none`;
                    cover2.style.transition = `none`;
                    cover3.style.transition = `none`;
                    cover4.style.transition = `none`;
                    cover5.style.transition = `none`;
                    cover6.style.transition = `none`;
                    cover7.style.transition = `none`;

                    cover1.style.transform = `translateX(-140%)`;
                    cover2.style.transform = `translateX(140%)`;
                    cover3.style.transform = `translateX(-140%)`;
                    cover4.style.transform = `translateX(140%)`;
                    cover5.style.transform = `translateX(140%)`;
                    cover6.style.transform = `translateX(-140%)`;
                    cover7.style.transform = `translateX(140%)`;
                }
            }
        }
    }, [scroll]);
    return (
        <section className="content-k">
            <div className="titles">
                <h3 className="category">{title}</h3>
                {[...subTitle].map((el, idx) => (
                    <p className="feature-title" key={idx}>
                        {el}
                    </p>
                ))}
            </div>

            {screenX < 768 && (
                <div className="cover-contents">
                    <div className="screen-row">
                        <div className="cover-image-container cover1">
                            <img
                                src={Cover1}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                        <div className="cover-image-container cover2">
                            <img
                                src={Cover2}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                    </div>
                    <div className="screen-row tri">
                        <div className="cover-image-container cover3">
                            <img
                                src={Cover3}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                        <div className="cover-image-container cover4">
                            <video
                                src={Cover4}
                                className="cover-video"
                                muted
                                autoPlay
                                preload="none"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                        <div className="cover-image-container cover5">
                            <img
                                src={Cover5}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                    </div>
                    <div className="screen-row">
                        <div className="cover-image-container cover6">
                            <img
                                src={Cover6}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                        <div className="cover-image-container cover7">
                            <img
                                src={Cover7}
                                className="cover-image"
                                alt=""
                                style={{ width: "228px" }}
                            />
                        </div>
                    </div>
                </div>
            )}
            {screenX >= 768 && (
                <div className="cover-contents">
                    <div className="screen-row upper">
                        <div className="cover-image-container cover3">
                            <img src={Cover3} className="cover-image" alt="" />
                        </div>
                        <div className="cover-image-container cover4">
                            <video
                                src={Cover41}
                                className="cover-image cover-video"
                                muted
                                alt=""
                            />
                        </div>
                        <div className="cover-image-container cover1">
                            <img src={Cover1} className="cover-image" alt="" />
                        </div>
                    </div>
                    <div className="screen-row lower">
                        <div className="cover-image-container cover6">
                            <img src={Cover6} className="cover-image" alt="" />
                        </div>
                        <div className="cover-image-container cover2">
                            <img src={Cover2} className="cover-image" alt="" />
                        </div>
                        <div className="cover-image-container cover7">
                            <img src={Cover7} className="cover-image" alt="" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContentPatternK;
