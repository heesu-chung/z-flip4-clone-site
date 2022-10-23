import "./ContentTitle.scss";

const ContentTitle = ({ title, category, align }) => {
    const screenX = window.innerWidth;

    return (
        <div className="titles">
            <h3 className="category">{category}</h3>
            {screenX >= 1024 &&
                [...title].map((el, idx) => (
                    <p key={idx} className="title">
                        {el}
                    </p>
                ))}
            {screenX < 1024 && !align && (
                <p className="title">{title.join(" ")}</p>
            )}
            {screenX < 1024 &&
                align === true &&
                [...title].map((el, idx) => (
                    <p key={idx} className="title">
                        {el}
                    </p>
                ))}
        </div>
    );
};

export default ContentTitle;
