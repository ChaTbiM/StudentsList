import React, { FC, useReducer } from "react";

import { Container, CssBaseline, Grid, Paper } from "@material-ui/core";

import StudentsList from "./StudentsList/StudentsList";
import AgeList from "./AgeList/AgeList";
import LevelList from "./LevelList/LevelList";
import reducer from "./store/reducer";
import initialState from "./store/initialState";

import style from "./App.style";

// Container - Component with state
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const classes = style();

  return (
    <CssBaseline>
      <Container maxWidth="md" className={classes.App}>
        <Grid
          justify="center"
          alignItems="flex-end"
          container
          spacing={2}
          className={classes.root}
        >
          {/* studentslist */}

          <Grid item xs={10} md={4}>
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

          <Grid item xs={10} md={4}>
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

          <Grid item xs={10} md={4}>
            <Paper className={classes.paper}>
              <LevelList
                selectedStudent={state.selectedStudent}
                students={state.students}
                dispatch={dispatch}
                className="level__component"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
};

export default App;
