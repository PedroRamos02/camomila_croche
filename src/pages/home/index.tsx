import { Box } from "@mui/material";


function Home() {
    return (
        <Box sx={{
            backgroundImage: "url('../src/assets/bg1.png')",
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh !important',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            '&:after': {
                content: '""',
                height: '100vh',
                width: '100%',
                position: "absolute",
                zIndex: '8',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 0 60%, #000ff 100% )',
            }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20% 0"
            }}>
                <img src="../src/assets/logo1.png" style={{
                    width: "300px"
                }} />
                <h1 style={{ fontFamily: 'primaryFont', color: '#3d3b3a', letterSpacing: '5px' }}>Camomila crochê</h1>
                <p style={{ fontFamily: 'secondFont', color: '#3d3b3a', letterSpacing: '5px', marginTop: '0', fontSize: '24px' }}>Fashion brand</p>
            </Box>
        </Box>
    )
}

export default Home;