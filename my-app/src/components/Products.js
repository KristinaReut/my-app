import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  menu: {
    width: 200,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: 'green',
  },
  input: {
    display: 'none',
  },
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
    price: '',
    description: '',
    category: '' ,
    image: '',
    color: '',
    featured: false
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value,
      price: event.target.value,
      description: event.target.value,
      category: event.target.value,
      image: event.target.value,
      color: event.target.value, 
      featured: event.target.value,});
    
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const {classes} = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off" >
        <TextField
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          select
          label="Category-filter"
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select category"
          margin="normal"
        />
        </form>
        <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Description</TableCell>
            <TableCell numeric>Category</TableCell>
            <TableCell numeric>Image</TableCell>
            <TableCell numeric>Color</TableCell>
            <TableCell numeric>Featured</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
                <TableCell numeric></TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <form className={classes.container} noValidate autoComplete="off" onClick={this.handleSubmit}>
    <TextField
          required
          label="Name"
          className={classes.textField}
          margin="normal"
          value={this.state.name}
          onChange={this.handleChange}
        />
   <TextField
          required
          label="Price"
          type="number"
          className={classes.textField}
          margin="normal"
          value={this.state.price}
          onChange={this.handleChange}
        />
       <TextField
          label="Description"
          className={classes.textField}
          margin="normal"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <TextField
        required
          select
          label="Select category"
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <TextField
          required
          label="IMG URL"
          type="url"
          className={classes.textField}
          margin="normal"
          value={this.state.image}
          onChange={this.handleChange}
        />
           <TextField
          required
          label="Color"
          className={classes.textField}
          margin="normal"
          value={this.state.color}
          onChange={this.handleChange}
        />
        < Button variant="contained" size="small" color="primary" className={classes.button} onClick={this.handleSubmit}>
        Add Product
      </Button>
        </form>
      </div>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);