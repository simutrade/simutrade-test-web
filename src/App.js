import './App.css';

import Grid from "@mui/material/Grid";
import Demo from "./Pages/Demo";
import GameInfo from "./Pages/GameInfo"

function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={4}>
                    <Demo/>
                </Grid>
                <Grid item xs={8}>
                    <GameInfo/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
