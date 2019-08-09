import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex'
  },

  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },

  chatWindow: {
    width: '70%'
height: '300px',
  },

  chatBox: {
    width: '85%'
height: '300px',

  },
  button: {
    width: '15%'
  }
}));

export default function Dashboard() {

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          Topic plaeholder
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>


          </div>
          <div className={classes.chatWindow}>

          </div>

          <div className={classes.flex}>
            <div className={classes.chatBox}


// </div>
// <List>
//               ['topic'].map(topic => (
//     <ListItem key={topic}
//   ))
// </List>

//           </div>
//       </Paper>
//     </div>
//       );
// }