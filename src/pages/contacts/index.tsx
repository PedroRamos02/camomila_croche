import { Box } from "@mui/material";
import Styles from "./contacts.module.css"

function Contacts () {
    return (
        <Box sx={{
            height: '100vh',
            backgroundImage: "url('../src/assets/bg2.png')",
            ackgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            alignContent: 'center',
            textAlign: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <h2 className={Styles.contacts}>Contatos</h2>
                <div className={Styles.redes}>
                    <p><a href="https://www.instagram.com/camomilacroche_/">Instagram</a></p>
                </div>
                <div className={Styles.redes}>
                    <p><a href="mailto:camillemorim@gmail.com">Email</a></p>
                </div>
                <div className={Styles.redes}>
                    <p><a href="https://wa.me/5551982331358">WhatsApp</a></p>
                </div>
            </Box>
            <img className={Styles.logo} src="../src/assets/logo2.png" style={{
                width: '100px',
            }} />
        </Box>
    )
}

export default Contacts;