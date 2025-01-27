import { Box } from "@mui/material";
import Styles from "./products.module.css";

function Products () {
    return (
        <Box sx={{
            backgroundColor: "#EECFBB",
            height: "100%",
            "@media (max-width: 900px)":{
                height: "120vh"
            }
        }}>
            <div className={Styles.container}>
                <h1 style={{ margin:'50px 0', textAlign:"center", fontFamily: 'secondFont', color: '#3d3b3a', letterSpacing: '5px', marginTop: '0', fontSize: '34px' }}>Peças</h1>
                <div className={Styles.fotoGallery}>
                    <div className={Styles.column}>
                        <div style={{marginTop: '50px'}} className={Styles.foto}>
                            <img src="../src/assets/img1.jpg"/>
                        </div>
                        <div className={Styles.foto}>
                            <img src="../src/assets/img2.jpg"/>
                        </div>
                        <div className={Styles.foto}>
                            <img src="../src/assets/img3.jpg"/>
                        </div>
                    </div>
                    <div className={Styles.column}>
                        <div className={Styles.foto}>
                            <img src="../src/assets/img4.jpg"/>
                        </div>
                        <div className={Styles.foto}>
                            <img src="../src/assets/img5.jpg"/>
                        </div>
                        <div className={Styles.foto}>
                            <img src="../src/assets/img6.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
    
        </Box>
    )
}

export default Products;