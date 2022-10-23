import "./ContentPatternI.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import VideoCall from "../assets/galaxy_videocall.png";

const ContentPatternI = ({
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
    align,
}) => {
    const screenX = window.innerWidth;
    return (
        <section className="content-i">
            <div className="feature-image">
                {screenX < 1024 && mainImage[0] === "VideoCall" && (
                    <img
                        src={VideoCall}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="galaxy Video Call"
                    />
                )}
                {screenX >= 1024 && mainImage[0] === "VideoCall" && (
                    <img
                        src={VideoCall}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy Video Call"
                    />
                )}
            </div>

            <div className="block feature-content ">
                <ContentTitle title={title} category={category} align={align} />
                <Content content={content} alert={alert} />
                <Button btnContent={btnContent} />
                {image && (
                    <ContentImage
                        image={image}
                        imageSize={imageSize}
                        className="sub-image"
                    />
                )}
            </div>
        </section>
    );
};

export default ContentPatternI;
