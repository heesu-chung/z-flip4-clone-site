import "./ContentPatternA.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import Acce from "../assets/galaxy_accessories.jpg";

import Card1 from "../assets/galaxy_snap_dragon.jpg";
import Card2 from "../assets/galaxy_5g.jpg";
import Card3 from "../assets/galaxy_pictures.jpg";
import Card4 from "../assets/galaxy_knox.jpg";
import Card5 from "../assets/galaxy_fingerprint.jpg";
import Card6 from "../assets/galaxy_ui.jpg";
import Cloud from "../assets/galaxy_cloud.jpg";

import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect, useState } from "react";

const ContentPatternA = ({
    category,
    title,
    content,
    alert,
    btnContent,
    image,
    imageSize,
    mainImage,
    mainImageSize,
    card,
    flex,
}) => {
    const screenX = window.innerWidth;
    const [scroll, setScroll] = useState(0);

    const scrollVal = useRecoilValue(scrollValue);
    const contents = document.querySelector(".card-contents");
    const leftBtn = document.querySelector(".btn-left");
    const rightBtn = document.querySelector(".btn-right");

    const listContainer = document.querySelector(".list-container");
    const cardContents = document.querySelector(".card-contents");

    const onClick = (e) => {
        if (e && scroll !== 5) {
            setScroll((scroll + 1) % 6);
        } else if (!e && scroll !== 0) {
            setScroll((scroll - 1) % 6);
        }
    };

    useEffect(() => {
        if (screenX > 1440) {
            if (
                scrollVal > 32500 &&
                scrollVal < 34500 &&
                listContainer &&
                cardContents
            ) {
                listContainer.style.position = "sticky";
                listContainer.style.top = "9vw";

                cardContents.style.transform = `translateX(${
                    (screenX - 988) / 2 - (scrollVal - 32500) * 0.95
                }px)`;
            }
            if (scrollVal <= 32500 && listContainer && cardContents) {
                cardContents.style.transform = `translateX(${
                    (screenX - 988) / 2
                })`;
                cardContents.style.transition = `.3s all ease`;
            }
        }
        if (screenX >= 768 && screenX < 1024) {
            if (
                scrollVal > 25960 &&
                scrollVal < 27600 &&
                listContainer &&
                cardContents
            ) {
                listContainer.style.position = "sticky";
                listContainer.style.top = "13vw";

                cardContents.style.transform = `translateX(${
                    (screenX - 688) / 2 - (scrollVal - 25960) * 0.95
                }px)`;
            }
            if (scrollVal <= 25960 && listContainer && cardContents) {
                cardContents.style.transform = `translateX(${
                    (screenX - 688) / 2
                })`;
                cardContents.style.transition = `.3s all ease`;
            }
        } else if (screenX < 768 && leftBtn && rightBtn && contents) {
            if (scroll === 0) {
                leftBtn.style.cursor = "auto";
                leftBtn.style.opacity = "0";
                rightBtn.style.opacity = "0.6";
                contents.style.transform = `translateX(${0}%)`;
            } else if (scroll === 1) {
                leftBtn.style.cursor = "pointer";
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                contents.style.transform = `translateX(${-15.6}%)`;
            } else if (scroll === 2) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                contents.style.transform = `translateX(${-31.9}%)`;
            } else if (scroll === 3) {
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                contents.style.transform = `translateX(${-48.2}%)`;
            } else if (scroll === 4) {
                rightBtn.style.cursor = "pointer";
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0.6";
                contents.style.transform = `translateX(${-64.6}%)`;
            } else if (scroll === 5) {
                rightBtn.style.cursor = "auto";
                leftBtn.style.opacity = "0.6";
                rightBtn.style.opacity = "0";
                contents.style.transform = `translateX(${-81}%)`;
            }
        }
    }, [scroll, scrollVal]);

    return (
        <section className="content-a" id="design">
            <div className="content-container">
                <div className="block feature-title">
                    <ContentTitle title={title} category={category} />
                    {flex && <Button btnContent={btnContent} />}
                </div>
                <div className="block feature-desc">
                    <Content content={content} alert={alert} />
                    {!flex && <Button btnContent={btnContent} />}
                    {image && (
                        <ContentImage image={image} imageSize={imageSize} />
                    )}
                </div>

                {screenX < 1024 && mainImage[0] === "Accessories" && (
                    <div className="feature-image">
                        <img
                            src={Acce}
                            style={{ width: `${mainImageSize[0]}px` }}
                            alt="galaxy accessories"
                        />
                    </div>
                )}
                {screenX >= 1024 && mainImage[0] === "Accessories" && (
                    <div className="feature-image">
                        <img
                            src={Acce}
                            style={{ width: `${mainImageSize[1]}px` }}
                            alt="galaxy accessories"
                        />
                    </div>
                )}
            </div>
            {card && (
                <>
                    <div className="list-container">
                        {screenX < 1024 && (
                            <div className="btns">
                                <button
                                    className="btn left btn-left"
                                    onClick={() => onClick(false)}
                                >
                                    <img src={ArrowLeft} alt="" />
                                </button>
                                <button
                                    className="btn right btn-right"
                                    onClick={() => onClick(true)}
                                >
                                    <img src={ArrowRight} alt="" />
                                </button>
                            </div>
                        )}
                        <div className="card-contents">
                            {/* card 1 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">4NM PROCESSOR</h2>
                                    <strong className="feature">
                                        Fast as it is flexible
                                    </strong>
                                    <p className="desc">
                                        Gaming, multitasking or multitasking
                                        while gaming, you want it smooth and
                                        seamless. Galaxy Z Flip4 now has the
                                        most powerful chip on Samsung Galaxy
                                        foldables.
                                    </p>
                                    <p className="sub-desc">
                                        With an upgraded camera equipped with a
                                        65% brighter sensor* powered by the
                                        Snapdragon® 8+ Gen 1 Mobile Platform,
                                        photos and videos are crisper and more
                                        stable — day or night.
                                    </p>
                                    <p className="sub-desc">
                                        *Compared to Galaxy Z Flip3 5G.
                                    </p>
                                </div>
                                <div className="image-block i1">
                                    <img src={Card1} alt="" className="i-1" />
                                </div>
                            </div>

                            {/* card 2 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">5G</h2>
                                    <strong className="feature">
                                        Speed for the impatient
                                    </strong>
                                    <p className="desc">
                                        Wherever you want to share the moment,
                                        get it there fast! 5G connectivity lets
                                        you stream, download and post content
                                        with HyperFast speeds.
                                    </p>
                                </div>
                                <div className="image-block">
                                    <img src={Card2} alt="" className="i-2" />
                                </div>
                            </div>

                            {/* card 3 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">STORAGE</h2>
                                    <strong className="feature">
                                        Delete less of life
                                    </strong>
                                    <p className="desc">
                                        Now you can shoot day or night, so you
                                        need the space to keep your art on hand.
                                        Fill up your Gallery with up to 256GB of
                                        storage built right in.
                                    </p>

                                    <div className="icons">
                                        <img src={Cloud} alt="" />
                                        <div className="sub-descs">
                                            <p className="sub-desc">
                                                Sync your Gallery with OneDrive,
                                                and enjoy 6 months of 100 GB
                                                OneDrive cloud storage with
                                                Galaxy Z Fold4 and Galaxy Z
                                                Flip4.
                                            </p>
                                            <p className="sub-desc">
                                                *Terms and conditions apply.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-block">
                                    <img src={Card3} alt="" className="i-3" />
                                </div>
                            </div>

                            {/* card 4 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">SAMSUNG KNOX</h2>
                                    <strong className="feature">
                                        Multi-layered security
                                    </strong>
                                    <p className="desc">
                                        Samsung Knox is built into the hardware
                                        and software of your phone, protecting
                                        with layer upon layer of security to
                                        keep your private data private.
                                    </p>
                                </div>
                                <div className="image-block">
                                    <img src={Card4} alt="" className="i-4" />
                                </div>
                            </div>

                            {/* card 5 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">SIDE FINGERPRINT</h2>
                                    <strong className="feature">
                                        Pro tip: Unlock with a touch
                                    </strong>
                                    <p className="desc">
                                        A simple tap of the Fingerprint Scanner
                                        unlocks the Main Screen quickly and
                                        accurately — keeping your phone under
                                        lock and fingerprint.
                                    </p>
                                </div>
                                <div className="image-block">
                                    <img src={Card5} alt="" className="i-5" />
                                </div>
                            </div>

                            {/* card 6 */}
                            <div className="card">
                                <div className="content">
                                    <h2 className="cate">ONE UI</h2>
                                    <strong className="feature">
                                        The platform you make your own
                                    </strong>
                                    <p className="desc">
                                        One UI helps you make your Android phone
                                        one-of-a-kind. Customize the Cover
                                        Screen and Main Screen to suit your
                                        tastes and the way you use your phone.
                                    </p>
                                </div>
                                <div className="image-block">
                                    <img src={Card6} alt="" className="i-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default ContentPatternA;
