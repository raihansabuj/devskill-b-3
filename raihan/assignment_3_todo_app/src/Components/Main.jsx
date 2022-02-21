import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackImage from "../images/img2.jpg";
import profileImage from "../images/img1.jpg";
import { styled } from '@mui/material/styles'; 
import Paper from '@mui/material/Paper';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = styled({
  greenBg:  {
    backgroundColor: "limegreen",
  },
  blueBg:  {
    backgroundColor: "blue",
  },
  greenBorder:{
    border: "1px solid green",
  },
  purpleBg:  {
    backgroundColor: "#a43f49",
  },
  btn1: {
     backgroundColor: "blue",
     color: "white",
     "&:hover":{
       backgroundColor:"red"
     }
   },
   btn2: {
     backgroundColor: "green",
     color: "white",
     "&:hover":{
       backgroundColor:"pink"
     }
   },
   btn3: {
     backgroundColor: "purple",
     color: "white",
     "&:hover":{
       backgroundColor:"black"
     }
   },
   grid: {
    background: "#fffff",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: "20px",
   },
    mainGrid: {
      /* backgroundImage: `url(${"../images/img2.jpg"})`, */ 
       backgroundImage: {BackImage}, //imported at top
    },
    menu: {
      left: "10%",
      backgroundColor: "#a43f49",
      boxSizing: "border-box",
      height: "100vh",
      maxHeight: "100vh !important",
      maxWidth: "20vw !important",
      minWidth: "45px !important",
      outline: "none",
      overflowX: "hidden !important",
      overflowY: "auto !important",
      padding: 0,
      position: "fixed !important",
      top: "calc(0px)",
      width: "20%",
      willChange: "transform",
      zIndex: "9999 !important",
  },
  profileImg : {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    textAlign: "center",
    marginTop: "60px",
    marginBottom: "0",
    padding:"0",    
  },
  authorContent:{
    margin: "0px 0px 30px 0px",
    color:  "#FFFFFF",
    fontWeight: "bold"
  },
});

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));              
 
const Main = () =>{

  const classes = useStyles();

  return (
    <>
  
    <Grid
      container fullWidth
      className={classes.mainGrid}
      justifyContent="center"
      alignItems="center"
      style={{backgroundColor: "#eee"}} 
    >
    <Grid container md={12} justifyContent={"center"} >
        <Grid item container justifyContent={"center"} sx={{ py: 8 }}  md={4} sm={6} xs={12} className={classes.menu} style={{textAlign:'center'}}>
            
            <Grid container style={{textAlign:'center'}} className={classes.authorContent}>
              <Grid item md={12}>
                <a href="#"><img src={profileImage} alt="" className={classes.profileImg} /></a>
              </Grid>
              <Grid item md={12} className={classes.authorContent}>
                <Typography variant="h4" gutterBottom component="div">
                  Md Raihanul Hoque
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  Web Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>About Me</Item>
                <Item>Key Skills</Item>
                <Item>About me </Item>
                <Item>Project Portfolio</Item>
                <Item>Experience</Item>
              </Grid>
            </Grid>  
            {/* <nav class="main-nav" role="navigation">
              <ul class="main-menu">
                <li class="active"><a href="#section1">About Me</a></li>
                <li><a href="#section2">What I’m good at</a></li>
                <li><a href="#section3">My Work</a></li>
                <li><a href="#section4">Contact Me</a></li>
              </ul>
            </nav> */}
            <div class="social-network">
              <ul class="soial-icons">
                <li>
                  <a href="https://fb.com/templatemo"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-rss"></i></a>
                </li>
              </ul>
            </div>
            <div class="copyright-text">
              <p>Copyright 2022 Raihan Sabuj</p>
            </div> 

        </Grid>
        <Grid item container spacing={8} className="section about-me"sx={{ py: 8 }}  md={4} sm={6} xs={12}>
        <section class="section about-me" data-section="section1">
            <div class="container">
              <div class="section-heading">
                <h2>About Me</h2>
                <div class="line-dec"></div>
                <span
                  >This is a Bootstrap v4.2.1 CSS Template for you. Edit and use
                  this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.</span
                >
              </div>
              <div class="left-image-post">
                <div class="row">
                  <div class="col-md-6">
                    <div class="left-image">
                      <img src="assets/images/left-image.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="right-text">
                      <h4>Reflux HTML CSS Template</h4>
                      <p>
                        Donec tristique feugiat lacus, at sollicitudin nunc euismod
                        sed. Mauris viverra, erat non sagittis gravida, elit dui
                        mollis ante, sit amet eleifend purus ligula eget eros. Sed
                        tincidunt quam vitae neque pharetra dignissim eget ut
                        libero.
                      </p>
                      <div class="white-button">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-image-post">
                <div class="row">
                  <div class="col-md-6">
                    <div class="left-text">
                      <h4>Sed sagittis rhoncus velit</h4>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Vestibulum fermentum
                        eleifend nibh, vitae sodales elit finibus pretium.
                        Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                        semper.
                      </p>
                      <div class="white-button">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="right-image">
                      <img src="assets/images/right-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </Grid>
      </Grid>
  </Grid>
    
   </>
);

}

export default Main;