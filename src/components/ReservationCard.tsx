import React from 'react'
import {useDispatch} from 'react-redux'
import {removeReservation} from '../features/reservationSlice'
import {v4 as uuid} from 'uuid'
import {addCustomer} from '../features/customerSlice'

interface ReservationCardType{
 name: string,
 index:number
}

function ReservationCard({name, index}: ReservationCardType) {
    const dispatch = useDispatch()
  return (
    <div className="reservation-card-container" onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id:uuid(),
            name,
            food:[]
        }))
    }    
    }>
        {name}
    </div>
  )
}

export default ReservationCard