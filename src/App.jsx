import React, { useState } from "react";
import {
    Container,
    Card,
    CardContent,
    makeStyles,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import Scaner from "./components/Scaner";

function App() {
    const [imageUrl, setImageUrl] = useState("");
    const [text, setText] = useState("");
    //const [permiso, setPermiso] = useState("");
    const classes = useStyles();
    // navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then((stream) => {
    //         setPermiso(stream);
    //     })
    //     .catch((error) => {
    //         setPermiso(error);
    //     });
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container className={classes.conatiner}>
            <Card>
                <h2 className={classes.title}>Generador de Codigos QR</h2>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <TextField
                                label="Ingrese texto"
                                onChange={(e) => setText(e.target.value)}
                            />
                            <Button
                                className={classes.btn}
                                variant="contained"
                                color="primary"
                                onClick={() => generateQrCode()}
                            >
                                Generar
                            </Button>
                            <br />
                            <br />
                            <br />
                            {imageUrl ? (
                                <a href={imageUrl} download>
                                    <img src={imageUrl} alt="img" />
                                </a>
                            ) : null}
                        </Grid>

                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            {/* {permiso.active === true ? (
                                <Scaner />
                            ) : (
                                <h3>Permiso denegado</h3>
                            )} */}
                            <Scaner />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10,
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#3f51b5",
        color: "#fff",
        padding: 20,
    },
    btn: {
        marginTop: 10,
        marginBottom: 20,
    },
}));
export default App;
