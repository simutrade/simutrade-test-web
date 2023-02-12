import './App.css';

import Grid from "@mui/material/Grid";
import Demo from "./Pages/Demo";
import GameInfo from "./Pages/GameInfo"
import Home from "./Pages/Home"

function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={6}>
                    <Demo/>
                </Grid>
                <Grid item xs={6}>
                    <GameInfo/>
                </Grid>
                <Grid item xs={6}>
                    <Home/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
