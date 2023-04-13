const tagTrackingId = process.env.GOOGLE_TAG_TRACKING_ID;
const anonymizeIP = process.env.GOOGLE_ANALYTICS_ANONYMIZE_IP || true;

module.exports = {
    gtag: {
        trackingID: tagTrackingId,
        anonymizeIP: anonymizeIP,
    },
};
