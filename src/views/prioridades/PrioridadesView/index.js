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

const Prioridades = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Padel">
      <Container maxWidth={false}>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1XsfCS9qgNF_8AO9PjP3JI14S32_dhYg92UqN5I6ub4A/preview" 
          width="800"
          height="600"
        >

        </iframe>
      </Container>
    </Page>
  );
};

export default Prioridades;
