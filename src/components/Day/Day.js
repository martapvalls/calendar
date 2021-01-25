import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CreateDateModal from '../CreateDateModal/CreateDateModal'

const Day = ({day}) => {
    const [dates, setDates ] = useState([])
    const [openModal, setOpenModal ] = useState(false)

    //update dates from that day, when a new date is introduced
    const getDate = date => {
        setDates([
            ...dates, 
            date
        ])
    }

    //to open the modal when user wants to add a new date
    const handleModal = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    return (  
        <Fragment>
            <p> {day.dia} </p>
            <ul>
                {dates.map(date => <li>{date.title}</li>)}
            </ul>
            <FontAwesomeIcon className="add__date" icon={faPlusCircle} onClick={(e) => handleModal(e)}/>
           {openModal && <CreateDateModal setOpenModal={setOpenModal} getDate={getDate}/>}
        </Fragment>
    );
}
 
export default Day;