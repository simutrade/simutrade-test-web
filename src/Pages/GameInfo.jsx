import React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
export default function Infor() {

    const [characters, setCharacters] = useState([]);

    const handleGetMsg = () => {
        fetch('http://localhost:3000/user').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setCharacters(data.infor)
                    
                    console.log(characters);
                
                })
            } else {

            }
        }).catch()
    };
    const [game, setGame] = useState([]);

    const Gameinformation = () => {
        fetch('http://localhost:3000/game').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setGame(data.infor)
                    
                    console.log(game);
                
                })
            } else {

            }
        }).catch()
    };

    return (
        <Card sx={{minWidth: 290}}>
            <Button size="small" variant="outlined" onClick={handleGetMsg}>Get user's information</Button>
            <thead>
                <tr>
                    <th>Id{'\u00A0'}{'\u00A0'}</th>
                    <th>username{'\u00A0'}{'\u00A0'}</th>
                    <th>password{'\u00A0'}{'\u00A0'}</th>
                    <th>email{'\u00A0'}{'\u00A0'}</th>
                    <th>display_name{'\u00A0'}{'\u00A0'}</th>
                    <th>user_type{'\u00A0'}{'\u00A0'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    characters.map((item, index) => {
                        return (
                            <tr key={index}><td>{item.id}</td><td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            <td>{item.display_name}</td>
                            <td>{item.user_type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <Divider/>
            <Button size="small" variant="outlined" onClick={Gameinformation}>Get game's information</Button>
            <thead>
                <tr>
                    <th >GameId{'\u00A0'}</th>
                    <th>owner_fk{'\u00A0'}</th>
                    <th>name{'\u00A0'}</th>
                    <th>description{'\u00A0'}</th>
                    <th>create_time_utc{'\u00A0'}</th>
                    <th>start_time_utc{'\u00A0'}</th>
                    <th>end_time_utc{'\u00A0'}</th>
                    <th>init_cash{'\u00A0'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    game.map((item, index) => {
                        return (
                            <tr key={index}><td>{item.id}</td><td>{item.owner_fk}</td>
                            <td height='80' font-size='200pt'>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.create_time_utc}</td>
                            <td>{item.start_time_utc}</td>
                            <td>{item.end_time_utc}</td>
                            <td>{item.init_cash}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </Card>

    
            

    );
}
