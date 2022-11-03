import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";


function App() {
 
  const [reservationName, setReservationName] = useState('')
  const reservations = useSelector((state:RootState)=> state.reservation.value)
  const customers = useSelector((state:RootState)=> state.customer.value)

  const dispatch = useDispatch()

  const handleAddReservations = () => {
     if(!reservationName) return
     dispatch(addReservation(reservationName))
     setReservationName('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index)=>{
                 return <ReservationCard name ={name} index={index}/>})}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value = {reservationName}
            onChange={(e)=> setReservationName(e.target.value)}/>
            <button onClick={handleAddReservations}> Add</button>
          </div>
        </div>
        <div className="customer-food-container">
         {customers.map((customer)=>{
          return <CustomerCard name={customer.name} food ={customer.food} id={customer.id}/>})}
        </div>
      </div>
    </div>
  );
}

export default App;