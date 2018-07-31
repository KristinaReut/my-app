import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    root: {
      width: '40%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    button: {
      margin: theme.spacing.unit,
    },
  });

  
  class CategoriesTableRow extends Component {

    render() {
        const { classes } = this.props;
        const { categories, index, category} = this.state;
        console.log(categories);
        return (
   <TableRow>
   <TableCell component="th" scope="row">{index}</TableCell>
   <TableCell numeric>{category} </TableCell>
   <TableCell>
     <Button variant="contained" color="secondary" className={classes.button}>
       Delete
   </Button>
     <Button variant="contained" color="primary" className={classes.button} >
       Edit
   </Button>
   </TableCell>
        </TableRow> )
    }
}
CategoriesTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CategoriesTableRow);