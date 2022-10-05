import React from 'react'
import loginUi from '../assets/loginUI.png'
import paymentUi from '../assets/paymentUI.png'
import learningUi from '../assets/learningUI.png'
import calculatorUi from '../assets/calculatorUI.png'

const UiDesign = () => {
  return (
    <section className="uidesign">
        <div className="ui-content">
            <div className="title">
                <h3>UI Design</h3>
            </div>
            <div className="imgContent">
            <a href="https://dribbble.com/shots/17319523-Daily-UI-001" target="_blank" rel="noreferrer">
                <img src={loginUi} alt="/" />
            </a>
            <a href="https://dribbble.com/shots/17330886-Daily-UI-002" target="_blank" rel="noreferrer">
                <img src={paymentUi} alt="/" />
            </a>
            <a href="https://dribbble.com/shots/18741452-eLearning-Website-Design" target="_blank" rel="noreferrer">
                <img src={learningUi} alt="/" />
            </a>
            <a href="https://dribbble.com/shots/17352293-Daily-UI-004-Mortgage-Calculator" target="_blank" rel="noreferrer">
                <img src={calculatorUi} alt="/" />
            </a>
            </div>
        <a href="https://dribbble.com/nehanalinik" target="_blank" rel="noreferrer"><button>View More</button></a>
        </div>
        <div className='ui-bg-text'>ui design</div>
    </section>
  )
}

export default UiDesign