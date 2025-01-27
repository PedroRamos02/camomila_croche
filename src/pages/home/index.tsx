import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posição da rolagem
      const fadeOutPoint = 300; // Ponto onde a opacidade será 0
      const newOpacity = Math.max(1 - scrollTop / fadeOutPoint, 0); // Calcula a opacidade
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url('../src/assets/bg1.png')",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh !important",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundSize: '100% 100%',
        backgroundRepeat: "no-repeat",
        "@media (max-width: 900px)":{
            backgroundPosition: "50% 50%",
            backgroundSize: "cover"
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20% 0 30% 0",
          transition: "opacity 0.4s ease",
          opacity: opacity, 
          "@media (max-width: 900px)":{
            padding: "20% 0 40% 0",
          }
        }}
      >
        <img
          src="../src/assets/logo1.png"
          style={{
            width: "300px",
          }}
        />
        <h1
          style={{
            fontFamily: "primaryFont",
            color: "#3d3b3a",
            letterSpacing: "5px",
          }}
        >
          Camomila crochê
        </h1>
        <p
          style={{
            fontFamily: "secondFont",
            color: "#3d3b3a",
            letterSpacing: "5px",
            marginTop: "0",
            fontSize: "24px",
          }}
        >
          Fashion brand
        </p>
      </Box>
    </Box>
  );
}

export default Home;
