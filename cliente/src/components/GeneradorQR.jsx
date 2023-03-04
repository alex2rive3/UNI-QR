import React from "react";
import QRCode from "react-qr-code";
const GereadorQR = () => {
    const day = new Date();
    console.log(day.getDay());
    //esto debe ir en algun useEfect y busca el modo de controlar que no se genere un qr nuevo cada vez que se recarga la pagina
    if (day.getDay() >= 1 && day.getDay() <= 5) {
        console.log("Generar codigo qr");
    } else {
        console.log("El Día de Hoy no tienes boletos ");
    }
    return (
        <div>
            <h2>Codigo QR Universitario</h2>
            <p>
                Utilice adecuadamente para que sigamos teniendo este veneficio
            </p>
            <div
                style={{
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 180,
                    width: "100%",
                }}
            >
                <QRCode
                    size={400}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                    }
                    viewBox={`0 0 256 256`}
                />
                <p>Codigo correspondiente al dia {day.getDay()} </p>
            </div>
        </div>
    );
};

export default GereadorQR;
