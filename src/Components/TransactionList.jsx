import React from 'react'
import { Button } from '@mui/material'

function TransactionList({transaction, setTransaction}) {

    const handleDelete=(id)=>{
    const updatedData= transaction.filter((transaction)=>{
        return transaction.id!=id;
    })
    setTransaction(updatedData)

    }
  return (
    <div className='transaction-list'>
     
      {
        transaction.map((transaction)=>{
            return(
               <>
                <h2>Transaction List</h2>
                <div className={transaction.type==='income'?'green':'red'}>
                <div className="list">
                <p>{transaction.desc}</p>
                    <h3>{transaction.type==='income'?'+':'-'} {transaction.amount}</h3>
                    <Button onClick={()=> handleDelete(transaction.id)}>Delete</Button>
                    </div>
                </div>
               </>
            )
        })
      }
    </div>
  )
}

export default TransactionList
