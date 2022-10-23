import "./JumpTitle.scss";

import Banner1 from "../../assets/banner_1.png";
import Banner2 from "../../assets/banner_2.png";
import Banner3 from "../../assets/banner_3.png";
import Banner4 from "../../assets/banner_4.png";

const JumpTitle = ({ title, image, background }) => {
    return (
        <div className="banners-for-grid">
            {background === "black" ? (
                <span className="banner-title" style={{ color: "white" }}>
                    {title}
                </span>
            ) : (
                <span className="banner-title" style={{ color: "black" }}>
                    {title}
                </span>
            )}

            {image === "Banner1" && (
                <div
                    className="image-container"
                    style={{ background: "black" }}
                >
                    <img className="banner-image" src={Banner1} alt="" />
                </div>
            )}

            {image === "Banner2" && (
                <div className="image-container">
                    <img className="banner-image" src={Banner2} alt="" />
                </div>
            )}
            {image === "Banner3" && (
                <div className="image-container">
                    <img className="banner-image" src={Banner3} alt="" />
                </div>
            )}
            {image === "Banner4" && (
                <div className="image-container">
                    <img className="banner-image" src={Banner4} alt="" />
                </div>
            )}
        </div>
    );
};

export default JumpTitle;
