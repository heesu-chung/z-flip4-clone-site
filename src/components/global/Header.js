/* styles */
import "./Header_sub.scss";

/* assets */
import ArrowBlack from "../../assets/arrow-black.png";
import Logo from "../../assets/black-samsung-logo.png";

const Header = () => {
    return (
        <div className="nav">
            <div className="upper-bar">
                <div className="logo-container">
                    <img src={Logo} alt="Samsung Logo" />
                </div>
                <div className="product-container">
                    <div className="product-block">
                        <span className="product">Galaxy Z Flip4</span>
                        <span className="arrow">
                            <img src={ArrowBlack} alt="arrow-black" />
                        </span>
                    </div>
                </div>

                <div className="menu-bar">
                    <div className="menu-bar-block">
                        <span className="string"></span>
                        <span className="string"></span>
                        <span className="string"></span>
                    </div>
                </div>
            </div>
            <div className="menu-dist-line"></div>
            <div className="lower-bar">
                <div className="selected-bar"></div>
                <span className="select-link">
                    <span>HIGHLIGHTS</span>
                    <span>SHOWROOM</span>
                    <span>ACCESSORIES</span>
                    <span>SPECS</span>
                </span>
            </div>
        </div>
    );
};

export default Header;
