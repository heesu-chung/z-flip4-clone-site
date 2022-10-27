import "./IntroVideo.scss";

import thumb1 from "../assets/video-thumb-1.jpg";
import thumb2 from "../assets/video-thumb-2.jpg";
import YoutubeBtn from "../assets/youtube_btn.png";
import { useEffect, useState } from "react";

const IntroVideo = () => {
    const [video, setVideo] = useState(0);
    useEffect(() => {}, []);

    const onClick = (e) => {
        if (e === 4) {
            setVideo(0);
            return;
        }
        setVideo(e);
    };
    return (
        <section className="intro-video-wrapper">
            {video === 1 && (
                <div
                    className="youtube-video-container"
                    onClick={() => onClick(4)}
                >
                    <div className="player"></div>
                </div>
            )}
            {video === 2 && (
                <div
                    className="youtube-video-container"
                    onClick={() => onClick(4)}
                >
                    <div className="player"></div>
                </div>
            )}
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
