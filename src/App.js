import './App.css';

import Grid from "@mui/material/Grid";
import Demo from "./Pages/Demo";
import GameInfo from "./Pages/GameInfo"

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
            </Grid>
        </div>
    );
}

export default App;
