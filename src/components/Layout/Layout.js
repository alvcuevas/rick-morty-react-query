import React from 'react';
import { Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import { Character, Characters, Episode, Episodes } from '../../components';

const Layout = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <nav className={classes.menu}>
        <Link component={RouterLink} to="/episodes">
          <Button color="primary">Episodes</Button>
        </Link>
        <Link component={RouterLink} to="/characters">
          <Button color="primary">Characters</Button>
        </Link>
      </nav>
      <main className={classes.main}>
        <Switch>
          <Route exact path="/episodes/:episodeId">
            <Episode />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/characters/:characterId">
            <Character />
          </Route>
          <Route path="/">
            <Episodes />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  main: {
    margin: '0 auto',
    padding: '16px'
  },
  menu: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'orange',
    '& button': {
      margin: theme.spacing(1)
    }
  }
}));

export default Layout;
