import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Reunion = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Salas de Reunión"
    >
      <Container maxWidth={false}>
        <p>Reunión</p>
      </Container>
    </Page>
  );
};

export default Reunion;
