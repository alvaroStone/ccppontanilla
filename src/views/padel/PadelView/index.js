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

const Padel = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Padel">
      <Container maxWidth={false}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FMadrid&amp;src=ZjY5ZzVyODdsNDNidmpra2N0dXRuMms4bDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=MGZzaHZjZGdmbjZoam1mNW1qaW52MjZza2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237CB342&amp;color=%23C0CA33&amp;title=PISTAS%20DE%20PADEL&amp;mode=WEEK"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
          name="padelCalendar"
          title="padelCalendar"
        ></iframe>
      </Container>
    </Page>
  );
};

export default Padel;
