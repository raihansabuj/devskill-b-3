import React, { useState } from "react";

import { Container, Grid, Typography, Paper, TextField, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Avatar, Link, Stack, Step } from "@mui/material";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { ListItemText } from "@material-ui/core";
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';


const styles ={
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#CCC",
        borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
        textAlign:"center"
    },
    sectionText:{
        marginTop: "5px",
        fontSize: "16px",
        color: "#CCC",
        letterSpacing: "0.5px",
    },
    sectionHeadBtmLine:{
        width: "60px",
        height: "3px !important",
        backgroundColor: "#a43f49",
        margin: "10px auto",
    },
    cardFeatureImage:{
        borderRadius:"5px",
        maxHeight:"250px",

    },
    section:{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        color:"#FFF",
        borderRadius:"5px",
        minHeight:"600px",
    },
    cardStyle:{
        width:"33%",
    } 
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Todo = () =>{

const [task, setTask]=useState("");
const [error, setError]=useState(false);
const [taskList, setTaskList]=useState([]);
const addTask = () =>{
    if(task.length){ 
        const prevTask = [...taskList];
        prevTask.push(task);
       setTaskList(prevTask);
    }else{
        setError(true);
    }
};
const delTask = (task) =>{
    this.setState({ task: undefined });
}
const settaskName = (e) =>{
    setError(false);
    setTask(e.target.value);
}
    return <>
    <Grid item container spacing={2} justifyContent="center" style={styles.section}>
        
        <Grid container justifyContent="center">
            <Item sx={6} style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                To Do Application
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Task Name
                            </Typography>
                            <TextField
                            onChange={(e)=>settaskName(e)}
                            fullWidth
                                error={error}
                                id="outlined"
                                label="Task Name"
                                defaultValue="Hello World"
                                helperText={error? "Must fill the task field!":""}
                                variant="outlined"
                                value={task}
                            />
                            <Button sx={{ mt:5 }} onClick={addTask} variant="contained" color="secondary">
                            Add Task
                            </Button>

                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
            <Item xs={6}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Task List
                        </Typography>
                         <Grid>
                             {taskList.map((task)=>{
                                 return (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar style={{ height:"16px", width:"16px" }}>
                                            <PanoramaFishEyeIcon style={{ fontSize:"12px" }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={task}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={delTask({task})}  edge="end" aria-label="delete">
                                            <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                 )
                                 
                                 
                             })}
                            
                         </Grid>
                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
        </Grid>
    </Grid>


    </>
}
export default Todo;