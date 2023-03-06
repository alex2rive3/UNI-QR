import React, { useEffect, useState } from "react";
import moment from "moment";
import QRCode from "react-qr-code";
import Cookies from "universal-cookie";
import axios from "axios";
const GereadorQR = () => {
    const [token, setToken] = useState("");
    const [dia, setDia] = useState("");
    const [cook, setCook] = useState("");
    const cookies = new Cookies();
    const GenerarQr = async () => {
        const res = await axios.post("http://localhost:8000/api/generar");
        setToken(res.data);
    };
    useEffect(() => {
        setDia(moment().format("dd"));
        //setCook(cookies.get("userToken"));
    }, []);
    useEffect(() => {
        if (dia === "Mo") {
            setCook(cookies.get("userToken"));
            console.log(cook);
            GenerarQr();
            console.log("Se genero el Qr");
        }
    }, [dia]);

    return (
        <div>
            <h2>Codigo QR Universitario</h2>
            <p>
                Utilice adecuadamente para que sigamos teniendo este veneficio
                tan importante
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
                    value={token}
                    viewBox={`0 0 256 256`}
                />
                <p>Codigo correspondiente al dia {dia} </p>
            </div>
        </div>
    );
};

export default GereadorQR;
