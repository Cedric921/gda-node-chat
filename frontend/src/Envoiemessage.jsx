import React, { Component } from 'react'

export default class Envoiemessage extends Component {
    render() {
    return (
      <div className='div d-flex  justify-content-center flex-column form-control w-50'>
        <p className='titre text-center text-primary text-uppercase'> Formulaire d'envoie Message</p>
        <button className='btn-primary btn m-1'> Message de...</button>
        <textarea className='textarea  text-center' placeholder='Votre Message ici'></textarea>
        <button className='btn m-2 btn-primary'>Envoi Message</button>
      </div>
    )
  }
}
