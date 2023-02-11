//import * as React from 'react';
import React, {useState} from "react";
import { useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';

export default function GameInfo() {
    const [name, setName] = useState("");
    const [cash, setCash] = useState("");
    const [time, setTime] = useState(0);
    const [createtime, setCreateTime] = useState(0);
    const [starttime, setStartTime] = useState(0);
    const [endtime, setEndTime] = useState(0);
    const [description, setDes] = useState("");
    const inputVal = useRef(null)
    const getMsgFromback = () => {

        fetch('http://localhost:3000/game/'+inputVal.current.value).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data);
                    setName(data.gamename);
                    setTime(data.time);
                    setDes(data.gamedescription)
                    setCash(data.init_cash)
                    setCreateTime(data.createTime)
                    setStartTime(data.startTime)
                    setEndTime(data.endtime)
                })
            } else {
                setName("ERROR!");
            }
        }).catch(() => setName("ERROR!"))
    };

    return (
        <Card sx={{minWidth: 275}}>
        <CardContent>
            <Typography variant="h5">
                Game name: {name}
            </Typography>
            {/* <Typography sx={{mt: 1}} color="text.secondary">
                This is a simple demo of this programme.
            </Typography> */}
            <Divider/>
            <Typography sx={{p: 1}} align={"left"}>
                Game discription: {description}
            </Typography>
            <Divider/>
            <Stack>
                {/* <Typography variant="h6" sx={{mb: 1}}>
                    Start your Backend, then you can run the demo below!
                </Typography> */}
                {/* <Typography>
                    Message from Backend: {msg}
                </Typography> */}
                <Typography>
                    Visited time: {time ? new Date(time).toLocaleString() : ""}
                </Typography>
                <Typography>
                    create time: {time ? new Date(createtime).toLocaleString() : ""}
                </Typography>
                <Typography>
                    start time: {time ? new Date(starttime).toLocaleString() : ""}
                </Typography>
                <Typography>
                    end time: {time ? new Date(endtime).toLocaleString() : ""}
                </Typography>
                <Typography>
                    init cash: {cash}
                </Typography>
            </Stack>
        </CardContent>
        <CardActions sx={{justifyContent: 'right'}}>
        <div>
            <input type='text' ref={inputVal} />
        </div>
            <Button size="small" variant="outlined" onClick={getMsgFromback}>Get messages from Backend</Button>
        </CardActions>
    </Card>
    );
}
