import {
    FaInstagram,
    FaFacebook,
    FaTelegram,
    FaViber,
    FaWhatsapp,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa6"

/**
 * Returns the React icon component based on the provided string.
 * @param {string} string - The string representing the icon name.
 * @returns {React.Component} - The React icon component.
 */
export function getReactIcon(string) {
    switch (string) {
        case "telegram":
            return <FaTelegram />
        case "instagram":
            return <FaInstagram />
        case "facebook":
            return <FaFacebook />
        case "whatsapp":
            return <FaWhatsapp />
        case "twitter":
            return <FaTwitter />
        case "linkedin":
            return <FaLinkedin />
        case "youtube":
            return <FaYoutube />
        case "viber":
            return <FaViber />
    }
}

/**
 * Returns the HTML heading tag based on the given index.
 * @param {number} index - The index to determine the heading tag.
 * @returns {string} - The HTML heading tag.
 */
export const getHeadingTagBasedOnIndex = (index) => {
    switch (index) {
        case 0:
            return "h1"
        case 1:
            return "h2"
        case 2:
            return "h3"
        case 3:
            return "h4"
        case 4:
            return "h5"
        case 5:
            return "h6"
        default:
            return "p"
    }
}
