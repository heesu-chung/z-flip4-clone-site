/* styles */
import "./BannerTitle.scss";

/* components */
import Button from "../contents/Button";

/* assets */
import Banner1 from "../../assets/galaxy_banner_big_1.jpg";
import Banner2 from "../../assets/galaxy_banner_big_2.jpg";
import Banner3 from "../../assets/galaxy_banner_big_3.jpg";
import Banner4 from "../../assets/galaxy_banner_big_4.jpg";
import QR from "../../assets/galaxy_qr.jpg";

import BannerScreen1 from "../../assets/galaxy_banner_screen_0.jpg";
import BannerScreen2 from "../../assets/galaxy_banner_screen_1.jpg";
import BannerScreen3 from "../../assets/galaxy_banner_screen_2.jpg";
import BannerScreen4 from "../../assets/galaxy_banner_screen_3.jpg";

const BannerTitle = ({
    category,
    title,
    button,
    desc,
    image,
    screenX,
    background,
    color,
    fontSize,
    margin,
}) => {
    return (
        <>
            {image !== "Banner4" && (
                <div
                    className="intro-header"
                    style={{
                        background: `${background}`,
                        color: `${color}`,
                    }}
                >
                    <div className="contents">
                        {category && <p className="category">{category}</p>}
                        {image !== "Banner3" &&
                            [...title].map((el, idx) => (
                                <p className="title" key={idx}>
                                    {el}
                                </p>
                            ))}
                        {image === "Banner3" && (
                            <>
                                {[...title].map((el, idx) => (
                                    <p
                                        className="title banner-3"
                                        key={idx}
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        {el}
                                    </p>
                                ))}
                                <img src={QR} alt="" className="qr" />
                            </>
                        )}
                        {desc && <p className="desc">{desc}</p>}
                        {button && <Button btnContent={button} />}
                    </div>

                    {image !== "Banner4" && (
                        <div className="image-container">
                            {image === "Banner1" && screenX < 768 && (
                                <img
                                    src={Banner1}
                                    style={{
                                        width: `100%`,
                                        margin: `${margin}vw auto 0`,
                                    }}
                                    alt=""
                                />
                            )}
                            {image === "Banner2" && screenX < 768 && (
                                <img
                                    src={Banner2}
                                    style={{
                                        width: `100%`,
                                        margin: `${margin}vw auto 0`,
                                    }}
                                    alt=""
                                />
                            )}
                            {image === "Banner3" && screenX < 768 && (
                                <img
                                    src={Banner3}
                                    style={{
                                        width: `100%`,
                                        margin: `${margin}vw auto 0`,
                                    }}
                                    alt=""
                                />
                            )}
                            {image === "Banner1" && screenX >= 768 && (
                                <img
                                    src={BannerScreen1}
                                    style={{
                                        width: `100%`,
                                    }}
                                    alt=""
                                />
                            )}
                            {image === "Banner2" && screenX >= 768 && (
                                <img
                                    src={BannerScreen2}
                                    style={{
                                        width: `100%`,
                                    }}
                                    alt=""
                                />
                            )}
                            {image === "Banner3" && screenX >= 768 && (
                                <img
                                    src={BannerScreen3}
                                    style={{
                                        width: `100%`,
                                    }}
                                    alt=""
                                />
                            )}
                        </div>
                    )}
                </div>
            )}
            {image === "Banner4" && screenX < 768 && (
                <div
                    className="intro-header banner-4"
                    style={{
                        background: `${background}`,
                        color: `${color}`,
                        height: "123vw",
                    }}
                >
                    <div className="contents">
                        {category && <p className="category">{category}</p>}
                        {image !== "Banner3" &&
                            [...title].map((el, idx) => (
                                <p className="title" key={idx}>
                                    {el}
                                </p>
                            ))}
                        {image === "Banner3" &&
                            [...title].map((el, idx) => (
                                <p
                                    className="title"
                                    key={idx}
                                    style={{
                                        fontSize: `${fontSize}px`,
                                        marginLeft: "10px",
                                    }}
                                >
                                    {el}
                                </p>
                            ))}
                        {desc && <p className="desc">{desc}</p>}
                        {button && <Button btnContent={button} />}
                    </div>
                    {image === "Banner4" && screenX < 768 && (
                        <div
                            className="image-container"
                            style={{ position: "absolute" }}
                        >
                            <img
                                src={Banner4}
                                style={{ width: `100%` }}
                                alt=""
                                className="b-4"
                            />
                        </div>
                    )}
                </div>
            )}
            {image === "Banner4" && screenX >= 768 && (
                <div
                    className="intro-header banner-4"
                    style={{
                        background: `${background}`,
                        color: `${color}`,
                    }}
                >
                    <div className="contents">
                        {category && <p className="category">{category}</p>}
                        {image !== "Banner3" &&
                            [...title].map((el, idx) => (
                                <p className="title" key={idx}>
                                    {el}
                                </p>
                            ))}
                        {image === "Banner3" &&
                            [...title].map((el, idx) => (
                                <p
                                    className="title"
                                    key={idx}
                                    style={{
                                        fontSize: `${fontSize}px`,
                                        marginLeft: "10px",
                                    }}
                                >
                                    {el}
                                </p>
                            ))}
                        {desc && <p className="desc">{desc}</p>}
                        {button && <Button btnContent={button} />}
                    </div>
                    {image === "Banner4" && screenX >= 768 && (
                        <div className="image-container">
                            <img
                                src={BannerScreen4}
                                style={{ width: `100%` }}
                                alt=""
                                className="b-4"
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default BannerTitle;
