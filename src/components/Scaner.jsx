import { useState } from "react";
import {QrReader} from "react-qr-reader";

const Scaner = () => {
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data `, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
            setStartScan(false);
            setLoadingScan(false);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };
    return (
        <div className="App">
            <h1>Escanear codigo de descuento</h1>
            <button
                onClick={() => {
                    setStartScan(!startScan);
                }}
            >
                {startScan ? "Stop Scan" : "Start Scan"}
            </button>
            {startScan && (
                <>
                    <QrReader
                        constraints={{ facingMode: "environment" }}
                        delay={1000}
                        onError={handleError}
                        onResult={handleScan}
                        style={{ width: "300px" }}
                    />
                </>
            )}
            {loadingScan && <p>Loading</p>}
            {data !== "" && <p>{data}</p>}
        </div>
    );
};

export default Scaner;