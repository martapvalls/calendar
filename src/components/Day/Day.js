import React, { Fragment, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Day.css'
//import components
import CreateDateModal from '../CreateDateModal/CreateDateModal'
import DateDetail from '../DateDetail/DateDetail'

const Day = ({day}) => {
    const [dates, setDates ] = useState([])
    const [openModal, setOpenModal ] = useState(false)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        sortDates()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update])

    //update dates from that day, when a new date is introduced
    const getDate = date => {
        setDates([
            ...dates, 
            date
        ])
        setUpdate(true)
    }

    //sort dates from start hour and update dates state
    const sortDates = () => {
        let getDates = dates

        getDates.forEach(date => {
            let numericDate = date.start.split(':').reduce((acc,time) => (60 * acc) + +time);
            date.numericDate = numericDate
        })

        getDates = getDates.sort(function(a,b){
            return a.numericDate - b.numericDate
        })
        setDates(getDates)
        setUpdate(false)
    }


    //to open the modal when user wants to add a new date
    const handleModal = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    return (  
        <Fragment>
            <p> {day.day} </p>
            <ul>
                {dates.map(date => <li className="date__details" key={date.title}> <DateDetail date={date}/> </li>)}
            </ul>
            <FontAwesomeIcon className="add__date" icon={faPlusCircle} onClick={(e) => handleModal(e)}/>
           {openModal && <CreateDateModal setOpenModal={setOpenModal} getDate={getDate}/>}
        </Fragment>
    );
}
 
export default Day;