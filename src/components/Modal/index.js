import React from 'react';
import './Modal.css'

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleClick = () => {
  
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  handleOutsideClick = e => {
    if(e.target.id === "Submit-btn"){
      return;
    }
    if (!this.node.contains(e.target)) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <button type="button" className="open-modal-btn" id="Submit-btn" onClick={() => this.handleClick()}>Open Modal</button>
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content" ref={node => {this.node = node}}>
              <span className="close" onClick={() => this.handleClick()}>&times;</span>
              <p>Some text in the Modal..</p>
              <button onClick={() => this.handleClick()} type="button" className='close-btn'>Close Modal</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
