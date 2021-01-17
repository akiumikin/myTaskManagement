import * as React from "react";
import Style from '../../styles/general.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Chip, { ChipProps } from '@material-ui/core/Chip';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4791db',
    },
    secondary: {
      main: '#81c784',
    },
  },
});

interface Props {
  chipItems: ChipProps[]
}

export default function ChipList(props: Props) {

  const useStyles = makeStyles({
    root: {
      margin: '5px 10px 5px 0',
      height: 25,
    },
  });

  const classes = useStyles();
  
  return(
    <ThemeProvider theme={theme}>
      <div className={Style.chipList}>
        {props.chipItems.map((item, idx) => {
          return (
            <Chip
              key={item.id ? item.id : `chip_${idx + 1}`}
              className={classes.root}
              {...item}
            />
          )
        })}        
      </div>
    </ThemeProvider>
  )
}
