import React, {Component} from 'react';
import { MdCreate, MdDelete } from 'react-icons/lib/md'
import './ButtonsBox.css'

class ButtonsBox extends Component {
  render() {
    const { editFunc, deleteFunc, id } = this.props
    return (
      <div>
        <a className="button-box" onClick={() => editFunc(id)}><MdCreate/></a>
        <a className="button-box" onClick={() => deleteFunc(id)}><MdDelete/></a>
      </div>
    );
  }
}

export default ButtonsBox;
