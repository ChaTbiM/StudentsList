import React, { FC, useReducer, useEffect } from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import StudentsList from "./StudentsList/StudentsList.tsx";
import AgeList from "./AgeList/AgeList.tsx";
import LevelList from "./LevelList/LevelList";
import reducer from "./store/reducer";
import initialState from "./store/initialState";

import style from "./App.css.js";
// Container - Component with state
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const classes = style();

  return (
    <CssBaseline>
      <Container maxWidth="md" className={classes.App}>
        <Grid container spacing={2} className={classes.root}>
          {/* studentslist */}

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <StudentsList
                students={state.students}
                selectedStudent={state.selectedStudent}
                dispatch={dispatch}
                className="students__component"
              />
            </Paper>
          </Grid>

          {/* age list */}

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <AgeList
                selectedStudent={state.selectedStudent}
                students={state.students}
                dispatch={dispatch}
                className="age__component"
              />
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
};

export default App;
