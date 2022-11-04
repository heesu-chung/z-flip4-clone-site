import React, { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

/* SCSS */
import "./scss/main.scss";

/* Components */
import Header from "./components/global/Header";
import FrontCoverImg from "./components/FrontCoverImg";
import FeatureDesc from "./components/FeatureDesc";
import SectionBanners from "./components/SectionBanners";
import IntroVideo from "./components/IntroVideo";
import OverviewNav from "./components/OverviewNav";
import Overview from "./components/Overview";
import TitleDesign from "./components/TitleDesign";

import ApparatusTransition from "./components/ApparatusTransition";
import ContentPatternA from "./components/ContentPatternA";
import ContentPatternB from "./components/ContentPatternB";
import ContentPatternC from "./components/ContentPatternC";
import ContentPatternD from "./components/ContentPatternD";
import ContentPatternE from "./components/ContentPatternE";
import ContentPatternF from "./components/ContentPatternF";
import ContentPatternG from "./components/ContentPatternG";
import ContentPatternH from "./components/ContentPatternH";
import ContentPatternI from "./components/ContentPatternI";
import ContentPatternJ from "./components/ContentPatternJ";
import ContentPatternK from "./components/ContentPatternK";
import ContentPatternL from "./components/ContentPatternL";
import ContentPatternM from "./components/ContentPatternM";
import ContentPatternN from "./components/ContentPatternN";
import ContentPatternO from "./components/ContentPatternO";
import ContentPatternP from "./components/ContentPatternP";
import CameraImage from "./components/CameraImage";
import DurabilityImage from "./components/DurabilityImage";
import Quote from "./components/Quote";
import CameraEcosystem from "./components/CameraEcosystem";
import ImageSlider from "./components/ImageSlider";
import Question from "./components/Question";
import Entertainment from "./components/Entertainment";
import NavigationBar from "./components/global/NavigationBar";
import ContentPatternA_sub from "./components/ContentPatternA_sub";
import CheckModal from "./components/modals/CheckModal";
import ScrollToTopBtn from "./components/global/ScrollToTopBtn";

const content = [
    "Choose a color that goes with everything — but looks like nothing else. A hazy finish on the glass creates a soft contrast to the high-shine, glossy metal frame. Select from four shades: Bora Purple, Graphite, Pink Gold and Blue.",

    "Four hues not enough for you? We got you. Galaxy Z Flip4 Bespoke Edition is all about making it even more yours, so you can put your one-of-a-kind spin on a new phone with a custom color combo.",

    `The era of planning looks around your phone is over. Small but mighty when folded, Galaxy Z Flip4 is a compact full-sized smartphone, and just the right size to slip in a pocket when it's time to slay.`,

    `The 6.7-inch display unfolds a beautiful view thanks to Ultra Thin Glass.4 Advanced durability makes it stronger than ever — staying tough through more than 200,000 folds.`,

    `From the inside out, Galaxy Z Flip4 is made to be durable. These are our toughest foldables ever with exclusive Corning® Gorilla® Glass Victus®+. And the hinge is protected by Armor Aluminum — our toughest aluminum frame.`,

    `Water you worried about? These are the world’s first water-resistant foldable smartphones.7 It can hang out in 1.5 meters of water for up to 30 minutes without breaking a sweat.`,

    `Enroll in a worry-free Samsung Care+ to stay protected from accidental damage.`,

    `The night just got brighter with Nightography on the Rear Camera. Details are brought to light even in the dark with bigger pixels on the Wide Camera. Say cheese!`,

    `Nightography isn't just for stills — it's also got video skills. When the action gets going, recordings stay smooth, not shaky, with enhanced OIS and VDIS. Powerful processing allows Super Night Solution to minimize noise so clips of the crew stay clear well into the night.`,

    `Introducing FlexCam, a versatile, hands-free camera experience. Take advantage of your phone’s agile angles to capture group shots, selfies and videos from mind-blowing perspectives and impressive true-to-life detail — even in your go-to social apps.`,

    `Without opening your phone, take selfies with the Rear Camera while the Cover Screen gives you a real-time preview. Check yourself from afar with a full-screen viewfinder, or tap to see the original ratio to make sure everyone is in frame. And with new software upgrades, Quick Shot can flex open until FlexCam takes over, so you can capture hands-free photos at angles high and low.`,

    `Catch up via video chat on Google Meet.10 Maybe even do a movie night from your phone, co-watching high-quality video with your friends through Live sharing. With synced videos, catch everyone's reactions to the action in real time.`,

    `Content creation just got easier. FlexCam holds its own to broaden your directorial POV, letting you film yourself, your friends or your actors from fresh new angles.9 And once your movie is premiere-ready, simply upload it to your social media for some well-deserved accolades.`,

    `With this much juice, you can let every call go into overtime. An upgraded 4nm processor works with the long-lasting 3700mAh (typical) battery to power through the hours.`,

    `When it's low, plug in for Super Fast Charging or bypass the cord with Fast Wireless Charging 2.0.14 With all that power to spare, you can even share a charge with your friend or your earbuds with Wireless PowerShare.`,

    `With a customizable 1.9-inch Cover Screen, you get yet another canvas to play with.17 Change it up as much as you want using your videos, photos or your own AR emoji to personalize the clock face. With this much control, you can easily update it with your mood, the weather or to match your outfits.`,

    `Your daily digital regulars, right on the Cover Screen. Control your phone with taps and swipes on the 1.9-inch Cover Screen.17 Access Quick Settings, reply to texts and add widgets to keep apps at your fingertips — no Main Screen necessary.`,

    `Checking up on yourself just got easier. Track your sleep patterns right from your wrist with Galaxy Watch5 making note of your sleep patterns and more.18 Once it gets to know you, you can find out your sleep animal and get useful tips to help you make the most of your downtime.`,

    `Smart Switch makes the transition between your phone and Galaxy Z Flip4 simple — even if you don't already have a Samsung Galaxy. In just a few steps it brings over your photos, texts, data and more.`,
];

export const scrollValue = atom({
    key: "scrollValue",
    default: 0,
});

export const navValue = atom({
    key: "navValue",
    default: [0, 0, 0, 0, 0],
});

function App() {
    let screenX = window.innerWidth;

    const setScroll = useSetRecoilState(scrollValue);

    const onScroll = () => {
        setScroll(Math.floor(window.scrollY));
    };

    const navigation = [
        2590, 5970, 10390, 18070, 22800, 3560, 7730, 12630, 24360, 29560,
    ];

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        screenX = window.innerWidth;
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [screenX]);

    return (
        <>
            {/* <div className="scroll">
                <span>{scroll}</span>
            </div> */}
            {/* <CheckModal /> */}
            <ScrollToTopBtn />
            <Header />

            <FrontCoverImg />
            <IntroVideo />

            <Quote />

            <OverviewNav screenX={screenX} navigation={navigation} />
            <Overview screenX={screenX} />

            <TitleDesign title="DESIGN" subTitle="The phone that claps back" />

            <ContentPatternA
                category="colors"
                title={["Meet the", "new neutrals"]}
                content={content[0]}
                btnContent={"SeeIn360"}
                mainImage={[]}
                mainImageSize={[]}
            />

            <ApparatusTransition screenX={screenX} />

            <ContentPatternA
                category="BESPOKE EDITION"
                title={["Your Galaxy.", "Your Way."]}
                content={content[1]}
                btnContent={false}
                mainImage={[]}
                mainImageSize={[]}
            />

            <ImageSlider screenX={screenX} />

            <ContentPatternB
                category="COMPACT SIZE"
                title={["Fits", "all your fits"]}
                content={content[2]}
                btnContent={false}
                alert={true}
                image={["Fits"]}
            />

            <DurabilityImage screenX={screenX} id="durability" />

            <ContentPatternC
                category="MAIN SCREEN"
                title={["Holds up", "from flex", "to flat"]}
                content={content[3]}
                btnContent={false}
                mainImage={["MainScreen"]}
                mainImageSize={[429, 543]}
                image={["VDE", "BV"]}
                imageSize={[84, 101, 108, 123]}
                align={true}
            />

            <ContentPatternD
                category="EXTERIOR"
                title={["Flippin' strong"]}
                content={content[4]}
                btnContent={false}
                mainImage={["Exterior"]}
                mainImageSize={[370, 500]}
            />

            <ContentPatternE
                category="IPX8 WATER RESISTANCE"
                title={["Still unafraid", "of water"]}
                content={content[5]}
                btnContent={false}
                mainImage={["IPX8"]}
                mainImageSize={[475, 655]}
            />

            <ContentPatternA
                category="SAMSUNG CARE+"
                title={["Accidents can", "be forgiven"]}
                content={content[6]}
                btnContent={false}
                image={["samsung_care"]}
                imageSize={[214, 238]}
                mainImage={[]}
                mainImageSize={[]}
            />

            <CameraImage screenX={screenX} id="camera" />

            <ContentPatternF
                category="MULTI-CAMERA SYSTEM"
                title={["Live your best", "nightlife"]}
                content={[content[7], content[8]]}
                btnContent={false}
                mainImage={["FlipCamera"]}
                mainImageSize={[245, 504]}
                screenX={screenX}
            />

            <ContentPatternG
                category="FLEXCAM"
                title={["Go ahead,", "flex on them"]}
                content={content[9]}
                alert={true}
                btnContent={"CheckItOut"}
                mainImage={["FlexCam"]}
                mainImageSize={[444, 600]}
            />

            <ContentPatternH
                category="QUICK SHOT"
                title={["Enter your", "self-portrait", "era"]}
                content={content[10]}
                alert={true}
                btnContent={"CheckItOut"}
                mainImage={["QuickShot"]}
                mainImageSize={[357, 480]}
            />

            {screenX >= 768 && <Entertainment />}

            <ContentPatternI
                category="VIDEO CALL"
                title={["Share", "with the squad"]}
                align={true}
                content={content[11]}
                btnContent={false}
                alert={true}
                mainImage={["VideoCall"]}
                mainImageSize={[350, 550]}
                image={["GoogleMeet"]}
                imageSize={[139, 175]}
            />

            <ContentPatternH
                category="FLEXCAM FOR SOCIAL"
                title={["Give your", "feed a glow-", "up"]}
                content={content[12]}
                alert={true}
                btnContent={false}
                mainImage={["SocialVideo"]}
                mainImageSize={[357, 480]}
            />

            <ContentPatternJ
                title={["Power", "to the pocket"]}
                align={true}
                content={[content[13], content[14]]}
                btnContent={false}
                alert={true}
                mainImage={["Battery"]}
                mainImageSize={[410, 545]}
                id="battery"
            />

            <ContentPatternK
                title="COVER SCREEN"
                subTitle={["The window to your world"]}
                screenX={screenX}
            />

            <ContentPatternL
                category="CUSTOM COVER SCREEN"
                title={["Put your style", "on display"]}
                content={content[15]}
                btnContent={"CheckItOut"}
                mainImage={["CustomImage"]}
                mainImageSize={[444, 484]}
            />

            <ContentPatternM
                category="USEFUL COVER SCREEN"
                title={["Glance, act", "and go"]}
                content={content[16]}
                alert={alert}
                mainImage={["CoverScreen"]}
                mainImageSize={[312, 484]}
            />

            <ContentPatternN
                category="GALAXY WATCH5"
                title={["Better rest is", "all in the wrist"]}
                content={content[17]}
                btnContent={"CheckItOut"}
                alert={true}
                mainImage={["GalaxyWatch"]}
                mainImageSize={[360, 1000]}
            />

            <CameraEcosystem screenX={screenX} id="ecosystem" />

            <ContentPatternO
                category="SMART SWITCH"
                title={["Old phone,", "meet new", "phone"]}
                content={content[18]}
                alert={true}
                mainImage={["SmartSwitch"]}
                mainImageSize={[312, 570]}
                link={true}
            />

            <ContentPatternA_sub
                category="GALAXY EXCELLENCE"
                title={["Expect nothing", "less"]}
                card={true}
                mainImage={[]}
                mainImageSize={[]}
            />

            {/* <ContentPatternP
                category="ACCESSORIES"
                title={["Finesse your Flip"]}
                btnContent={"LearnMore"}
                flex={true}
                mainImage={["Accessories"]}
                mainImageSize={[500, 1116]}
            /> */}

            {/* <Question screenX={screenX} /> */}

            {/* <SectionBanners screenX={screenX} /> */}
            {/* <FeatureDesc /> */}
        </>
    );
}

export default App;
