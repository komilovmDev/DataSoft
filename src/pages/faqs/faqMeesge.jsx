import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { useState } from 'react'

export default function FaqMessage({id, question, answer}) {

    const [isOpen, setIsOpen] = useState('none')
    const [icon, setIcon] = useState(<BsPlus className='plus' size='20px' color="#FFFFFF" />)

    function OnOff() {
        if (isOpen === 'none') {
            setIsOpen('')
            setIcon(<BiMinus className='plus' size='20px' color="#FFFFFF" />)
        } else {
            setIsOpen('none')
            setIcon(<BsPlus className='plus' size='20px' color="#FFFFFF" />)
        }
    }

    return (
        <div className="faq">
            <button onClick={OnOff}>
                <span>{question}</span>
                {icon}
            </button>
            <p className={isOpen}>
                {answer}
            </p>
        </div>
    )
}