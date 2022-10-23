import "./ContentPatternC.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import MainScreen from "../assets/galaxy_main_screen.jpg";
import MainScreenLapTop from "../assets/galaxy_main_screen_laptop.jpg";

const ContentPatternC = ({
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
        <section className="content-c">
            {screenX < 1024 && (
                <div className="block">
                    <ContentTitle
                        title={title}
                        category={category}
                        align={align}
                    />
                </div>
            )}

            <div className="feature-image">
                {screenX < 1024 && mainImage[0] === "MainScreen" && (
                    <img
                        src={MainScreen}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="galaxy main screen"
                    />
                )}
                {screenX >= 1024 && mainImage[0] === "MainScreen" && (
                    <img
                        src={MainScreenLapTop}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy main screen"
                    />
                )}
            </div>

            <div className="block feature-content">
                {screenX >= 1024 && (
                    <ContentTitle title={title} category={category} />
                )}
                <Content content={content} alert={alert} />
                <Button btnContent={btnContent} />
                {image && <ContentImage image={image} imageSize={imageSize} />}
            </div>
        </section>
    );
};

export default ContentPatternC;
