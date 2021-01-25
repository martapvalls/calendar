import React, {useState, useEffect} from 'react';
import './Calendar.css'
import Day from '../Day/Day'

const Calendar = () => {
    const [days, setDays] = useState([])

    let diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', ];

    useEffect(() => {
        const dias = getDays()
        setDays(dias)
    }, [])

    //obtener los días totales del mes y en qué día de la semana caen
    const getDays = () => {
        let today = new Date()
        let año = today.getFullYear();
        let mes = today.getMonth();
        
        let diasMes = new Date(año, mes, 0).getDate();
        
        let dias = []

        for (let dia = 1; dia <= diasMes; dia++) {
          let indice = new Date(año, mes, dia - 1).getDay();

            let dia_ = { id: dia, dia, diasSemana: diasSemana[indice], indice: indice }
            dias.push(dia_)
        }
        console.log(dias)
        return dias
    }

    return (  
        <div className="container">
            <h1>Enero 2021</h1>
            <ol className="calendar">
                {diasSemana.map(dia => <li className="day__name" key={dia}> {dia} </li>)}

                {days.map(day => 
                    <li key={day.id} className={`${(day.id === 1 ? 'first-day day' : 'day')}`}> 
                        <Day day={day}/>                   
                    </li>
                )}
            </ol>
        </div>
    );
}
 
export default Calendar;