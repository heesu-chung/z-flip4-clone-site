import React from "react";
import "./FeatureDesc.scss";
const desc = [
    `Color availability may vary depending on country, region, or carrier.`,
    `Bespoke Edition only available on Samsung.com. Please allow 3 to 4 weeks (estimate) for delivery. Bespoke Edition color availability may vary depending on country, region, or carrier.`,
    `Measures 165.2 x 71.9 x 6.9 mm when unfolded and 84.9 x 71.9 x 15.9 ~ 17.1 mm when folded.`,
    `Measured diagonally, Galaxy Z Flip4’s Main Screen size is 6.7" in the full rectangle and 6.6" accounting for the rounded corners; actual viewable area is less due to the rounded corners and camera hole.`,
    `Tested and certified by Bureau Veritas.`,
    `When compared to Galaxy Z Flip3 5G Ultra Thin Glass.`,
    `Refers to Galaxy Z Fold4, Z Flip4, Z Fold3 5G and Z Flip3 5G. Galaxy Z Flip4 is rated as IPX8. IPX8 is based on test conditions for submersion in up to 1.5 meters of freshwater for up to 30 minutes. Not advised for beach or pool use. Not dust-resistant.Samsung Care+ coverage may vary by country, region or carrier. Deductibles may apply.`,
    `Samsung Care+ coverage may vary by country, region or carrier. Deductibles may apply.`,
    `FlexCam refers to camera experience using Flex mode. Flex mode supported at angles between 75° and 115°.`,
    `Google Meet is a trademark of Google LLC. Participants may need to upgrade to the latest Google Duo or Google Meet and YouTube app to use Live sharing.`,
    `Up to 100 people can be connected at once. Live sharing video quality, availability and supported apps may vary depending on the number of participants (regarding video quality), device, network conditions, country or carrier. Some supported apps may require subscriptions with separate terms and conditions.`,
    `Typical value tested under third-party laboratory condition. Typical value is the estimated average value considering the deviation in battery capacity among the battery samples tested under IEC 61960 standard. Rated capacity is 3,595mAh.`,
    `Estimated against the usage profile of an average/typical user. Independently assessed by Strategy Analytics between 2022.07.07–07.12 in USA with pre-release versions of SM-F721U under default setting using 5G Sub6 networks (NOT tested under 5G mmWave network). Actual battery life varies by network environment, features and apps used, frequency of calls and messages, number of times charged, and many other factors.`,
    `From 0% up to 50% charge in around 30 minutes with 25W Adapter or higher.`,
    `Limited to wireless charge compatible (QI standard) devices only. If battery power is lower than 30% Wireless PowerShare may not function. May not work with certain accessories, covers, other brand devices or some Samsung wearables. Wireless PowerShare may affect call reception or data services depending on your network environment.`,
    `25W Power Adapter sold separately.`,
    `Measured diagonally, Galaxy Z Flip4's Cover Screen size is 1.9" in the full rectangle and 1.8" accounting for the rounded corners; actual viewable area is smaller due to the rounded corners.`,
    `Product and feature availability may vary by country or region. Galaxy Watch5 must be paired with a Samsung Galaxy Phone with Android 8.0, minimum 1.5GB RAM and Samsung Health app version 6.22.1 or later. Intended for general wellness and fitness purposes only. Not intended for use in detection, diagnosis, treatment of sleep disorders or conditions. The measurements are for your personal reference only. Please consult a medical professional for advice.`,
    `Galaxy Watch5 sold separately.`,
    `Wired transfers require at least Android™ 4.3, iOS 5 or Windows Mobile OS 8.1 or OS 10 on your old device. Devices with an older OS must use wireless transfer options. If you do not have the required USB cable/connector for a wired transfer to Samsung Galaxy, you can also use wireless transfer options. Open Smart Switch Mobile in “Settings” on your new Galaxy phone or download Smart Switch for PC/Mac. Data and content available for transfer may vary by OS. To transfer data from iCloud or other cloud storage services, a data connection is required. To avoid disruption in text messaging when transferring from iOS, change your iMessage settings appropriately.`,
    `Compared to previous Samsung Galaxy foldables.`,
    `Requires optimal 5G connection. Actual speed may vary depending on country, carrier and user environment.`,
    `Actual storage availability may vary depending on pre-installed software.`,
    `Availability of Gallery sync through Microsoft OneDrive may vary depending on country or region. Requires set up of OneDrive syncing on your Samsung Galaxy device. Start with 5GB of free cloud storage or upgrade to a subscription for more storage.`,
    `Six-month trial of OneDrive 100 GB cloud storage available for consumers who have purchased a Galaxy Z Fold4 and Galaxy Z Flip4 only. Availability may vary. Google Play’s terms and conditions apply. Refer to https://www.microsoft.com/onedrive-samsung-offer for details.`,
];

const FeatureDesc = () => {
    return (
        <section>
            <div className="section">
                <ol>
                    {desc.map((el, idx) => (
                        <li key={idx}>{el}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default FeatureDesc;
