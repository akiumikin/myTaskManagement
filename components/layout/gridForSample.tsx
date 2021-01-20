import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

interface Props {
  children: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    marginBottom: 25,
  },
});

export default function GridForSample(props: Props) {
  const classes = useStyles();

  return(
    <>
      <Grid className={classes.root} container spacing={2}>
        {props.children}
      </Grid>
    </>
  )
}
