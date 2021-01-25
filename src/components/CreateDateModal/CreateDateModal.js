import React, {useState} from 'react'
import './CreateDateModal.css'

function CreateDateModal({setOpenModal, getDate}) {
    const [error, setError] = useState(false)
    const [dateModal, setDateModal] = useState({
        title: '',
        start: '',
        end: ''
    })

    const { title, start, end } = dateModal

    //when user writes into an input and update the state
    const handleChange = e => {
        setDateModal({
            ...dateModal,
            [e.target.name] : e.target.value
        })
    }

    //when form is send
    const submitDate = e => {
        e.preventDefault()

        if(title.trim() === '' || start.trim() === '' || end.trim() === '' ){ 
            setError(true)
            return
        }
        setError(false)
        getDate(dateModal)
        setOpenModal(false)
        
    }

    //to cancel adding a new date
    const handleModal = (e) => {
        e.preventDefault()
        setOpenModal(false)
    }

    return (
        <div className="modal__container">
            <form className="modal__form"
                onSubmit={submitDate}
            >
                <h1 className="modal__title">Añadir Cita</h1>
                { error ?  <p> Todos los campos son obligatorios </p> : null}

                <label>Título</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Título cita"
                    onChange={handleChange}
                    value={title}
                />
                <label>Hora inicio</label>
                <input 
                    type="time"
                    name="start"
                    onChange={handleChange}
                    value={start}
                />

                <label>Hora final</label>
                <input 
                    type="time"
                    name="end"
                    onChange={handleChange}
                    value={end}
                />
                <button
                    type="submit"
                >
                    Agregar Cita
                </button>
                <button onClick={handleModal}>Cancelar</button>
            </form>
            
        </div>
    )
}

export default CreateDateModal
