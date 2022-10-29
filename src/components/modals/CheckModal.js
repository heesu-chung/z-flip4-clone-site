import "./CheckModal.scss";

import TryTab from "../../assets/modal_tap.svg";
import Info from "../../assets/modal_info.svg";
import Play from "../../assets/modal_play.svg";
import Pause from "../../assets/modal_pause.svg";
import Replay from "../../assets/modal_restart.svg";

import QuickShot from "../../assets/modal_quick.mp4";

const category = `FLEXCAM`;
const title = `Go ahead, flex your photo skills`;
const alert = `*Video simulated for illustrative purposes. Actual UI may be different.`;
const video = `QuickShot`;

const CheckModal = () => {
    const screenX = window.innerWidth;

    return (
        <div className="check-modal">
            <div className="bg-container"></div>
            <div className="modal-container">
                <div className="exit-modal-btn">
                    <span className="left"></span>
                    <span className="right"></span>
                </div>
                {screenX < 1024 && (
                    <div className="modal-content">
                        <div className="exit-btn">
                            <span className="left"></span>
                            <span className="right"></span>
                        </div>
                        <span className="category">{category}</span>
                        <strong className="title">{title}</strong>
                        <p className="desc">{alert}</p>
                        <div className="try-tab">
                            <img src={TryTab} alt="" />
                            <span className="try-desc">Tap to try</span>
                        </div>
                    </div>
                )}
                {screenX >= 1024 && (
                    <div className="modal-screen-content">
                        <span className="category">{category}</span>
                        <strong className="title">{title}</strong>
                        <p className="desc">{alert}</p>
                    </div>
                )}
                <div className="content-container">
                    {video === `QuickShot` && (
                        <div className="video-container">
                            <video src={QuickShot} />
                        </div>
                    )}
                    <div className="play-block">
                        <img src={Play} alt="" />
                        <span className="play play-desc">Play</span>
                    </div>
                </div>
                {screenX < 1024 && (
                    <div className="info-modal-container">
                        <div className="info-modal">
                            <img src={Info} alt="" />
                            <span className="info-category">{category}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckModal;
