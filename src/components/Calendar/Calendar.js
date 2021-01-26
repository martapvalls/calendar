import React, {useState, useEffect} from 'react';
import './Calendar.css'
import Day from '../Day/Day'

const Calendar = () => {
    const [days, setDays] = useState([])
    const [currentMonth, setCurrentMonth] = useState('')

    let daysWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', ];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    useEffect(() => {
        const days = getDays()
        setDays(days)
    }, [])

    //get total days of the month
    const getDays = () => {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth()

        setCurrentMonth( `${months[month]} ${today.getFullYear()}`)
        
        let daysMonth = new Date(year, month, 0).getDate()
        
        let days = []

        for (let day = 1; day <= daysMonth; day++) {
          let dayIndex = new Date(year, month, day - 1).getDay()

            let day_ = { id: day, day, daysWeek: daysWeek[dayIndex], index: dayIndex }
            days.push(day_)
        }
        return days
    }

    return (  
        <div className="container">
            <h1> {currentMonth}</h1>
            <ol className="calendar">
                {daysWeek.map(day => <li className="day__name" key={day}> {day} </li>)}

                {days.map(day => 
                    <li key={day.id} className={`${(day.id === 1 ? `first-day__${day.daysWeek} day`  : 'day')}`}> 
                        <Day day={day}/>                   
                    </li>
                )}
            </ol>
        </div>
    );
}
 
export default Calendar;