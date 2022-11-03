import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

interface CustomerCardType {
    food:string[],
    name:string,
    id:string
}

export default function CustomerCard({name,food,id}:CustomerCardType) {

const [customerFood, setCustomerFood] =useState('')
const dispatch =useDispatch()
const handleFoodItems = () =>{
    if(!customerFood) return
     dispatch(addFoodToCustomer({food:customerFood, id}))
     setCustomerFood('')
}

  return (
    <div className="customer-food-card-container">
            <h3>{name}</h3>
            <div className="customer-foods-container">
              <div className="customer-food">
                {food.map((food) =>{
                    return <p>{food}</p>
                })}
              </div>
              <div className="customer-food-input-container">
                <input value = {customerFood}
                onChange={(e)=>setCustomerFood(e.target.value)}/>
                <button onClick={handleFoodItems}>Add</button>
              </div>
            </div>
          </div>
  )
}
