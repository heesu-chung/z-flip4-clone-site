import "./ContentBetterTogether.scss";

import SubBattery from "../../assets/sub_battery.jpg";
import SubWatch from "../../assets/sub_watch.jpg";

const ContentBetterTogether = ({
    title,
    image,
    imageSize,
    desc,
    link,
    screenX,
}) => {
    return (
        <div className="better-together">
            {image === "SubBattery" && screenX >= 1024 && (
                <div className="image-container">
                    <img
                        src={SubBattery}
                        style={{ width: `${imageSize[1]}px` }}
                        alt=""
                    />
                </div>
            )}
            {image === "SubBattery" && screenX >= 768 && screenX < 1024 && (
                <div className="image-container">
                    <img src={SubBattery} style={{ width: `118px` }} alt="" />
                </div>
            )}
            {image === "SubWatch" && screenX >= 768 && (
                <div className="image-container">
                    <img
                        src={SubWatch}
                        style={{ width: `${imageSize[1]}px` }}
                        alt=""
                    />
                </div>
            )}
            <div className="descs">
                <p className="cate-title">Better together</p>
                <p className="title">{title}</p>
                {image === "SubBattery" && screenX < 768 && (
                    <div className="image-container">
                        <img
                            src={SubBattery}
                            style={{ width: `${imageSize[0]}px` }}
                            alt=""
                        />
                    </div>
                )}
                {image === "SubWatch" && screenX < 768 && (
                    <div className="image-container">
                        <img
                            src={SubWatch}
                            style={{ width: `${imageSize[0]}px` }}
                            alt=""
                        />
                    </div>
                )}
                <p className="desc">{desc}</p>
                <div className="links">
                    <a href="/" className="link">
                        {link}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContentBetterTogether;
