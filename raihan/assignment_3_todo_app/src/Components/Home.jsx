import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { deepOrange, green } from '@mui/material/colors';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import DeleteIcon from '@mui/icons-material/Delete';

import { Avatar, Link, Stack, Step } from "@mui/material";
//Custom Components
import Main from "./Main";
import BackGroundImage from '../images/img2.jpg'
import ProfileImage from '../images/img1.jpg'
import { borderBottom } from "@mui/system";
import { StepLabel, Stepper } from "@material-ui/core";
import Todo from "./Todo";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const styles ={
    wraperContainer:{
        // height: "100%",
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:"#000",
        
    },
    main:{
        left: "10%", 
        backgroundColor: "#a43f49",
        boxSizing: "border-box",
        height: "100%",
        maxHeight: "100vh !important",
        maxWidth: "80vw !important",
        outline: "none",
        overflowX: "hidden !important",
        overflowY: "auto !important",
        padding: "0",
        position: "fixed !important",
        top: "calc(0px)",
        width: "20%",
        willChange: "transform",
        zIndex: "9999 !important",
        // position: "sticky",
    },
    avaterIcons:{
        height: "40px",
        width: "40px",
        lineHeight: "40px",
        fontSize: "14px",
        fontWeight: "700",
        color: "#fff",
        transition: "all 0.5s",
        '&:hover, &:focus': {
            background: "#ffeded",
            color: "#8c363e",
        },
        cursor: "pointer",
        textAlign:"center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#fff",
        // borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
    },
    sectionText:{
        marginTop: "5px",
        fontSize: "16px",
        color: "#fff",
        letterSpacing: "0.5px",
    },
    sectionHeadBtmLine:{
        width: "60px",
        height: "3px !important",
        backgroundColor: "#a43f49",
        margin: "10px auto",
    }
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const MenuItem = styled(Paper)(({ theme }) => ({
    height: "70px",
    lineHeight: "70px",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    color: "#fff",
    width: "100%",
    transition:" all 0.5s",
    borderTop: "2px solid #ffeded",
    background: "#a43f49",
    '&:hover, &:focus': {
        background: "#ffeded",
        color: "#8c363e",
    },
    cursor: "pointer",
  }));

  const AvatersCustom = styled(Paper)(({ theme }) => ({
    height: "40px",
    width: "40px",
    color: "#fff",
    transition: "all 0.5s",
    '&:hover, &:focus': {
        background: "#ffeded",
        color: "#8c363e",
    },
    cursor: "pointer",
    textAlign:"center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    
  }));

const Home = () => {
    return (
    <Grid container 
    style={styles.wraperContainer} 
    sx={{ flexGrow: 1 }} justifyContent="center">
      <Grid container spacing={2} xs={12} sm={6} md={12} lg={10} justifyContent="center">
        <Todo />
      </Grid>
    </Grid>
    )

}

export default Home;