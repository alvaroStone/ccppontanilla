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
      <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FMadrid&amp;title=Reserva%20Salones&amp;src=MjM3cG1haDFkbHNnbXNwc2IwMDBzcGdtb2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YjNpMHY2cGtmcG5lMTdrZ2h1ZDhoczgydWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bW0wczdobHRmbmh2am04ZzJyNWUxdXAzNGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;color=%237986CB&amp;color=%23B39DDB&amp;mode=WEEK" 
        width="800" 
        height="600" 
        frameborder="0" 
        scrolling="no">

      </iframe>
      </Container>
    </Page>
  );
};

export default Reunion;
