import "./ContentImage.scss";
import samsungCare from "../../assets/samsung_care.jpg";
import VDE from "../../assets/sub_VDE.jpg";
import BV from "../../assets/sub_BV.jpg";
import GoogleMeet from "../../assets/sub_google_meet.jpg";

const ContentImage = ({ image, imageSize }) => {
    const screenX = window.innerWidth;

    return (
        <span className="image-block">
            {screenX < 1024 && image[0] === "VDE" && (
                <img
                    src={VDE}
                    style={{ width: `${imageSize[0]}px` }}
                    alt="VDE"
                />
            )}
            {screenX >= 1024 && image[0] === "VDE" && (
                <img
                    src={VDE}
                    style={{ width: `${imageSize[1]}px` }}
                    alt="VDE"
                />
            )}

            {screenX < 1024 && image[1] === "BV" && (
                <img
                    src={BV}
                    style={{ width: `${imageSize[2]}px` }}
                    alt="BV"
                    className="bv"
                />
            )}
            {screenX >= 1024 && image[1] === "BV" && (
                <img
                    src={BV}
                    style={{ width: `${imageSize[3]}px` }}
                    alt="BV"
                    className="bv"
                />
            )}

            {screenX < 1024 && image[0] === "samsung_care" && (
                <img
                    src={samsungCare}
                    style={{ width: `${imageSize[0]}px` }}
                    alt="samsungCare"
                    className="samsung-care"
                />
            )}
            {screenX >= 1024 && image[0] === "samsung_care" && (
                <img
                    src={samsungCare}
                    style={{ width: `${imageSize[1]}px`, marginTop: "50px" }}
                    alt="samsungCare"
                    className="samsung-care"
                />
            )}

            {screenX < 1024 && image[0] === "GoogleMeet" && (
                <img
                    src={GoogleMeet}
                    style={{ width: `${imageSize[0]}px` }}
                    alt="google-meet"
                    className="google-meet"
                />
            )}
            {screenX >= 1024 && image[0] === "GoogleMeet" && (
                <img
                    src={GoogleMeet}
                    style={{ width: `${imageSize[1]}px` }}
                    alt="google-meet"
                    className="google-meet"
                />
            )}
        </span>
    );
};

export default ContentImage;
