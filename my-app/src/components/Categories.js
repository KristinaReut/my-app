import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createCategory, getAllCategories } from './api';
/*import CategoriesTableRow from './categories/CategoriesTableRow'*/

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  input: {
    display: 'none',
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

class Categories extends Component {
  state = {
    category: "",
    categories: [],
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  componentDidMount() {
    this.loadAllCategories();
  }
  loadAllCategories = () => {
    getAllCategories().then((categories) => {
      this.setState({ categories });
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { category } = this.state;
    createCategory({ category }).then(this.loadAllCategories);
    this.setState({
      category: '',
    })
  }
  render() {
    const { classes } = this.props;
    const { categories, category } = this.state;
    console.log(categories);
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            label="Categories"
            className={classes.textField}
            margin="normal"
            value={category}
            onChange={this.handleChange('category')}
          />
          <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={(e) => { console.log(e) }}>
            Add Category
         </Button>
        </form>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell numeric>Category</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);