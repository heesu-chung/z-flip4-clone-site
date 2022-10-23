import "./IntroVideo.scss";

import thumb1 from "../assets/video-thumb-1.jpg";
import thumb2 from "../assets/video-thumb-2.jpg";
import YoutubeBtn from "../assets/youtube_btn.png";
import { useEffect } from "react";

const IntroVideo = () => {
    useEffect(() => {}, []);

    const onClick = (e) => {};
    return (
        <section className="intro-video-wrapper">
            <div className="intro-video-container">
                <div className="title">Stand up to the standard</div>
                <div className="video-container">
                    <div className="video-block">
                        <div className="video" onClick={() => onClick(1)}>
                            <img
                                src={thumb1}
                                alt="video thumbnail"
                                className="thumb-nail"
                            />
                            <div className="video-play-btn video-btn-1">
                                <img
                                    src={YoutubeBtn}
                                    className="youtube-btn youtube-pause youtube-pause-1"
                                    alt=""
                                />
                                <img
                                    src={YoutubeBtn}
                                    className="youtube-btn youtube-play youtube-play-1"
                                    alt=""
                                />
                            </div>
                        </div>
                        <strong>Official Launch Film</strong>
                    </div>
                    <div className="video-block">
                        <div className="video" onClick={() => onClick(2)}>
                            <img
                                src={thumb2}
                                alt="video thumbnail"
                                className="thumb-nail"
                            />
                            <div className="video-play-btn video-btn-2">
                                <img
                                    src={YoutubeBtn}
                                    className="youtube-btn youtube-pause youtube-play-2"
                                    alt=""
                                />
                                <img
                                    src={YoutubeBtn}
                                    className="youtube-btn youtube-play youtube-play-2"
                                    alt=""
                                />
                            </div>
                        </div>
                        <strong>Over the Horizon 2022</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroVideo;
