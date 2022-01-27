import React, { useState } from 'react';
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
    if (!this.node.contains(e.target)) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div ref={node => {this.node = node}}>
        <button onClick={handleOpenModal}>Open Modal</button>
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => this.handleClick()}>&times;</span>
              <p>Some text in the Modal..</p>
              <button onClick={() => this.handleClick()}>close modal</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
