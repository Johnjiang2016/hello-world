import React, {
  Component,
  PropTypes
} from 'react'
 // assas 
export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const text = this.refs.input.value;
    this.props.onAddClick(text)
    this.refs.input.value = '';


  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

 
