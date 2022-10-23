import React, { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const scrollValue = atom({
    key: "scrollValue",
    default: 0,
});

const ScrollChecker = () => {
    const setScroll = useSetRecoilState(scrollValue);
    const scroll = useRecoilValue(scrollValue);
    const onScroll = () => {
        setScroll(Math.floor(window.scrollY));
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return <span className="scroll-rate">{scroll}</span>;
};

export default ScrollChecker;
