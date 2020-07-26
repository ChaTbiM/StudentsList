import React, { useReducer, useEffect } from "react";

import Container from "@material-ui/core/container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/grid";
import Paper from "@material-ui/core/paper";

import StudentsList from "./StudentsList/StudentsList";
import AgeList from "./AgeList/AgeList";
import LevelList from "./LevelList/LevelList";
import reducer from "./State/reducer";
import initialState from "./State/initialState";
import style from "./App.css.js";

// Container - Component with state
function App() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const classes = style();
  return (
    <CssBaseline>
      <Container maxWidth="md" className={classes.App}>
        <Grid container spacing={4} className={classes.root}>
          {/* studentslist */}

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <StudentsList
                students={state.students}
                className="students__component"
              />
            </Paper>
          </Grid>

          {/* age list */}

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <AgeList className="age__component" />
            </Paper>
          </Grid>

          {/* Year */}

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LevelList className="level__component" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
}

export default App;
