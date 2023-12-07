import React, { useState } from 'react'
import './style/enter.css'
import EnterModal from './modal/EnterModal'
function Enter() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='enter__conteiner' onClick={() => { setModalOpen(true) }}>
      <i className="enter__icon vbf-person"></i>
      <div className='enter__title'>Войти</div>
      {modalOpen && <EnterModal
        onClose={() => setModalOpen(false)} />

      }
    </div>

  )
}

export default Enter