import React, {Component} from 'react';
import { MdCreate, MdDelete } from 'react-icons/lib/md'
import { Link } from 'react-router-dom'
import './ButtonsBox.css'

class ButtonsBox extends Component {
  render() {
    const { editFunc, deleteFunc, id, parentId = null } = this.props
    return (
      <div>
        <Link className="button-box" to={`/react/${id}/edit`}><MdCreate/></Link>
        <a className="button-box" onClick={() => deleteFunc(id, parentId)}><MdDelete/></a>
      </div>
    );
  }
}

export default ButtonsBox;
