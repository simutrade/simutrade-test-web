import React, {useState} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';

//this is a test demo programme
export default function Demo() {
    const [msg, setMsg] = useState("");
    const [time, setTime] = useState(0);

    const handleGetMsg = () => {
        fetch('http://localhost:3000/hello').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data);
                    setMsg(data.message);
                    setTime(data.time);
                })
            } else {
                setMsg("ERROR!");
            }
        }).catch(() => setMsg("ERROR!"))
    };

    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography variant="h5">
                    Demo Panel
                </Typography>
                <Typography sx={{mt: 1}} color="text.secondary">
                    This is a simple demo of this programme.
                </Typography>
                <Divider/>
                <Typography sx={{p: 1}} align={"left"}>
                    Requirement: Please finish your code in "src/Pages/GameInfo.jsx", and show the result in the
                    right panel
                </Typography>
                <Divider/>
                <Stack>
                    <Typography variant="h6" sx={{mb: 1}}>
                        Start your Backend, then you can run the demo below!
                    </Typography>
                    <Typography>
                        Message from Backend: {msg}
                    </Typography>
                    <Typography>
                        Update Time: {time ? new Date(time).toLocaleString() : ""}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{justifyContent: 'right'}}>
                <Button size="small" variant="outlined" onClick={handleGetMsg}>Get messages from Backend</Button>
            </CardActions>
        </Card>
    );
}
