import React from 'react'
import './App.css'
import Transaction from './Components/Transaction'


function App() {
  return (
    <>
    <div className="background">
      <div className="container">
        <div className="head">
          <h2>Expense Tracker</h2>
          <Transaction/>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
