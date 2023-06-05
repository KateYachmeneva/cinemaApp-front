/* eslint-disable react/prop-types */
import {useEffect, useRef} from "react";
import QRCode from "qrcode";

export default function QR(props) {
    const {code} = props;
    const imgRef = useRef(null);

    const generateQR = async (text) => {
        try {
            imgRef.current.src = await QRCode.toDataURL(
                text, {
                    errorCorrectionLevel: 'M',
                    margin: 3,
                });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => generateQR(code), [imgRef]);

    return (
        <img ref={imgRef} className="ticket__info-qr" alt="QRCode"/>
    );
}