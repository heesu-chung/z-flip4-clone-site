import Button from "./contents/Button";
import "./Question.scss";

import Arrow from "../assets/icon_arrow.jpg";
import { useState, useEffect } from "react";

const Question = ({ screenX }) => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [sixth, setSixth] = useState(false);

    const navigation = [
        2935, 10390, 18070, 19060, 5970, 4070, 12630, 24360, 25150, 7730,
    ];

    const container1 = document.querySelector(".item-container-1");
    const container2 = document.querySelector(".item-container-2");
    const container3 = document.querySelector(".item-container-3");
    const container4 = document.querySelector(".item-container-4");
    const container5 = document.querySelector(".item-container-5");
    const container6 = document.querySelector(".item-container-6");
    const container7 = document.querySelector(".item-container-7");

    const item1 = document.querySelector(".item-1");
    const item2 = document.querySelector(".item-2");
    const item3 = document.querySelector(".item-3");
    const item4 = document.querySelector(".item-4");
    const item5 = document.querySelector(".item-5");
    const item6 = document.querySelector(".item-6");

    const arrow1 = document.querySelector(".a1");
    const arrow2 = document.querySelector(".a2");
    const arrow3 = document.querySelector(".a3");
    const arrow4 = document.querySelector(".a4");
    const arrow5 = document.querySelector(".a5");
    const arrow6 = document.querySelector(".a6");
    useEffect(() => {
        if (screenX >= 1024) {
            if (first && container1 && item1 && container1 && arrow1) {
                item1.style.transform = `translate(0px, 0px)`;
                item1.style.opacity = `1`;
                container1.style.height = `300px`;
                arrow1.style.transform = `rotate(0deg)`;
            } else if (!first && container1 && item1 && container1 && arrow1) {
                item1.style.transform = `translate(0px, 30px)`;
                item1.style.opacity = `0`;
                container1.style.height = `110px`;
                arrow1.style.transform = `rotate(-180deg)`;
            }

            if (second && item2 && container2 && arrow2) {
                item2.style.transform = `translate(0px, 0px)`;
                item2.style.opacity = `1`;
                container2.style.height = `220px`;
                arrow2.style.transform = `rotate(0deg)`;
            } else if (!second && item2 && container2 && arrow2) {
                item2.style.transform = `translate(0px, 30px)`;
                item2.style.opacity = `0`;
                container2.style.height = `110px`;
                arrow2.style.transform = `rotate(-180deg)`;
            }

            if (third && item3 && container3 && arrow3) {
                item3.style.transform = `translate(0px, 0px)`;
                item3.style.opacity = `1`;
                container3.style.height = `300px`;
                arrow3.style.transform = `rotate(0deg)`;
            } else if (!third && item3 && container3 && arrow3) {
                item3.style.transform = `translate(0px, 30px)`;
                item3.style.opacity = `0`;
                container3.style.height = `110px`;
                arrow3.style.transform = `rotate(-180deg)`;
            }

            if (fourth && item4 && container4 && arrow4) {
                item4.style.transform = `translate(0px, 0px)`;
                item4.style.opacity = `1`;
                container4.style.height = `250px`;
                arrow4.style.transform = `rotate(0deg)`;
            } else if (!fourth && item4 && container4 && arrow4) {
                item4.style.transform = `translate(0px, 30px)`;
                item4.style.opacity = `0`;
                container4.style.height = `110px`;
                arrow4.style.transform = `rotate(-180deg)`;
            }

            if (fifth && item5 && container5 && arrow5) {
                item5.style.transform = `translate(0px, 0px)`;
                item5.style.opacity = `5`;
                container5.style.height = `250px`;
                arrow5.style.transform = `rotate(0deg)`;
            } else if (!fifth && item5 && container5 && arrow5) {
                item5.style.transform = `translate(0px, 30px)`;
                item5.style.opacity = `0`;
                container5.style.height = `110px`;
                arrow5.style.transform = `rotate(-180deg)`;
            }

            if (sixth && item6 && container6 && arrow6) {
                item6.style.transform = `translate(0px, 0px)`;
                item6.style.opacity = `1`;
                container6.style.height = `270px`;
                arrow6.style.transform = `rotate(0deg)`;
            } else if (!sixth && item6 && container6 && arrow6) {
                item6.style.transform = `translate(0px, 30px)`;
                item6.style.opacity = `0`;
                container6.style.height = `110px`;
                arrow6.style.transform = `rotate(-180deg)`;
            }
        } else if (screenX < 1024) {
            if (first && container1 && item1 && container1 && arrow1) {
                item1.style.transform = `translate(0px, 0px)`;
                item1.style.opacity = `1`;
                container1.style.height = `315px`;
                arrow1.style.transform = `rotate(180deg)`;
            } else if (!first && container1 && item1 && container1 && arrow1) {
                item1.style.transform = `translate(0px, 20px)`;
                item1.style.opacity = `0`;
                container1.style.height = `90px`;
                arrow1.style.transform = `rotate(0deg)`;
            }

            if (second && item2 && container2 && arrow2) {
                item2.style.transform = `translate(0px, 0px)`;
                item2.style.opacity = `1`;
                container2.style.height = `255px`;
                arrow2.style.transform = `rotate(180deg)`;
            } else if (!second && item2 && container2 && arrow2) {
                item2.style.transform = `translate(0px, 20px)`;
                item2.style.opacity = `0`;
                container2.style.height = `90px`;
                arrow2.style.transform = `rotate(0deg)`;
            }

            if (third && item3 && container3 && arrow3) {
                item3.style.transform = `translate(0px, 0px)`;
                item3.style.opacity = `1`;
                container3.style.height = `310px`;
                arrow3.style.transform = `rotate(180deg)`;
            } else if (!third && item3 && container3 && arrow3) {
                item3.style.transform = `translate(0px, 20px)`;
                item3.style.opacity = `0`;
                container3.style.height = `90px`;
                arrow3.style.transform = `rotate(0deg)`;
            }

            if (fourth && item4 && container4 && arrow4) {
                item4.style.transform = `translate(0px, 0px)`;
                item4.style.opacity = `1`;
                container4.style.height = `255px`;
                arrow4.style.transform = `rotate(180deg)`;
            } else if (!fourth && item4 && container4 && arrow4) {
                item4.style.transform = `translate(0px, 20px)`;
                item4.style.opacity = `0`;
                container4.style.height = `90px`;
                arrow4.style.transform = `rotate(0deg)`;
            }

            if (fifth && item5 && container5 && arrow5) {
                item5.style.transform = `translate(0px, 0px)`;
                item5.style.opacity = `5`;
                container5.style.height = `255px`;
                arrow5.style.transform = `rotate(180deg)`;
            } else if (!fifth && item5 && container5 && arrow5) {
                item5.style.transform = `translate(0px, 20px)`;
                item5.style.opacity = `0`;
                container5.style.height = `90px`;
                arrow5.style.transform = `rotate(0deg)`;
            }

            if (sixth && item6 && container6 && arrow6) {
                item6.style.transform = `translate(0px, 0px)`;
                item6.style.opacity = `1`;
                container6.style.height = `275px`;
                arrow6.style.transform = `rotate(180deg)`;
            } else if (!sixth && item6 && container6 && arrow6) {
                item6.style.transform = `translate(0px, 20px)`;
                item6.style.opacity = `0`;
                container6.style.height = `90px`;
                arrow6.style.transform = `rotate(0deg)`;
            }
        }
    }, [first, second, third, fourth, fifth, sixth]);

    const onClick = (e) => {
        if (e === 1) {
            setFirst(!first);
        } else if (e === 2) {
            setSecond(!second);
        } else if (e === 3) {
            setThird(!third);
        } else if (e === 4) {
            setFourth(!fourth);
        } else if (e === 5) {
            setFifth(!fifth);
        } else if (e === 6) {
            setSixth(!sixth);
        }
    };

    return (
        <div className="question">
            <h2 className="title">Frequently Asked Question</h2>
            <h3 className="items">
                <div className="item-container item-container-1">
                    <div className="btn-container" onClick={() => onClick(1)}>
                        <button className="btn-question">
                            What colors does Galaxy Z Flip4 come in?
                        </button>
                        <div className="arrow-block a1">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-1">
                        <p className="content">
                            Galaxy Z Flip4 comes in Bora Purple, Graphite, Pink
                            Gold, and Blue. You can customize your phone with
                            Bespoke Edition front and back panels and frames.
                            Bespoke Edition colors are Yellow, White, Navy,
                            Khaki and Red. Frames come in Black, Silver and
                            Gold. Choose your own color combination when you
                            order from Samsung.com.
                        </p>
                        <Button
                            btnContent="GoToColors"
                            navigation={navigation}
                            screenX={screenX}
                        />
                    </div>
                </div>
                <div className="item-container item-container-2">
                    <div className="btn-container" onClick={() => onClick(2)}>
                        <button className="btn-question">
                            What makes Galaxy Z Flip4 different?
                        </button>
                        <div className="arrow-block a2">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-2">
                        <p className="content">
                            The more compact Galaxy Z Flip4 has a bigger
                            battery, a faster processor, and a tougher design
                            than its predecessor. The Cover Screen is more
                            customizable than ever. Galaxy Z Flip4 takes even
                            better quality photos in low light thanks to an
                            improved Wide Camera. And there are now more
                            third-party apps optimized for Flex mode, and more
                            ways to use multiple windows on one screen.
                        </p>
                    </div>
                </div>
                <div className="item-container item-container-3">
                    <div className="btn-container" onClick={() => onClick(3)}>
                        <button className="btn-question">
                            Is Galaxy Z Flip4 good for selfies and video calls?
                        </button>
                        <div className="arrow-block a3">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-3">
                        <p className="content">
                            Galaxy Z Flip4 is great for selfies and video calls
                            because of its foldable design. It folds to become
                            its own tripod so you can make hands-free video
                            calls, or you can set it down and snap from afar, so
                            no one misses out on being in the group photo. You
                            can even preview your selfies on the Cover Screen
                            without opening the phone.
                        </p>
                        <Button
                            btnContent="GoToCamera"
                            navigation={navigation}
                            screenX={screenX}
                        />
                    </div>
                </div>
                <div className="item-container item-container-4">
                    <div className="btn-container" onClick={() => onClick(4)}>
                        <button className="btn-question">
                            How good is the Galaxy Z Flip4 battery?
                        </button>
                        <div className="arrow-block a4">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-4">
                        <p className="content">
                            Galaxy Z Flip4 is powered by an intelligent 3,700mAh
                            (typical) dual battery.12,13 It charges faster than
                            its predecessor when plugged in, and now supports
                            Super Fast Charging and Fast Wireless Charging.
                        </p>
                        <Button
                            btnContent="GoToBattery"
                            navigation={navigation}
                            screenX={screenX}
                        />
                    </div>
                </div>
                <div className="item-container item-container-5">
                    <div className="btn-container" onClick={() => onClick(5)}>
                        <button className="btn-question">
                            How can I customize the Galaxy Z Flip4 Cover Screen?
                        </button>
                        <div className="arrow-block a5">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-5">
                        <p className="content">
                            Design a clock face that shows off your style or use
                            a video as your Cover Screen wallpaper. And it's not
                            just about looks. You can add widgets and even
                            respond to notifications without opening your phone.
                        </p>
                        <Button
                            btnContent="GoToCustomCoverScreen"
                            navigation={navigation}
                            screenX={screenX}
                        />
                    </div>
                </div>
                <div className="item-container item-container-6">
                    <div className="btn-container" onClick={() => onClick(6)}>
                        <button className="btn-question">
                            How can I customize the Galaxy Z Flip4 Cover Screen?
                        </button>
                        <div className="arrow-block a6">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="item item-6">
                        <p className="content">
                            Galaxy Z Flip4 is made with strong materials like
                            Corning® Gorilla® Glass Victus®+, Armor Aluminum and
                            Ultra Thin Glass that make it one tough foldable.
                            Plus, these are the world’s first water resistant
                            foldable smartphones.
                        </p>
                        <Button
                            btnContent="GoToDurability"
                            navigation={navigation}
                            screenX={screenX}
                        />
                    </div>
                </div>
                <div className="item-container item-container-7"></div>
            </h3>
        </div>
    );
};

export default Question;
