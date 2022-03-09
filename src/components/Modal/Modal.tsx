import React, {FC} from 'react'
import { IModal } from '../../interfaces/IModal';

const Modal:FC<IModal> = ({ modalId, text, title }) => {


  return (
    <div id={modalId} className="modal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title">{title}</h3>
        <a href="#close" title="Close" className="close">×</a>
      </div>
      <div className="modal-body">    
        <p>{text}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal