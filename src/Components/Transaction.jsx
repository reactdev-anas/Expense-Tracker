import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import TransactionList from './TransactionList'

function Transaction() {
    const [toggle, setToggle] = useState(true)
    const [description, setDescription]= useState('')
    const [newAmount, setNewAmount]=useState('')
    const [transaction, setTransaction]=useState([])
    const [transactionType, setTransactionType]=useState('income')
    const [income, setIncome]=useState(0);
    const [expense, setExpense]= useState(0);


    const AddTransaction=()=>{
        if(description=='' && newAmount===''){
            alert('feilds are empty')
        } else{
            const newTransaction = {
                id:Date.now(),
                desc:description,
                amount:Number(newAmount),
                type:transactionType,
            }
            setTransaction([...transaction, newTransaction])
            setDescription('')
            setNewAmount('')

        }
    }
    const CalculationIncomeExpense =()=>{
        let exp=0;
        let inc=0;
        transaction.map((transaction)=>{
            return transaction.type==='expense'? (exp = exp + transaction.amount):(inc = inc + transaction.amount)
        })
        setExpense(exp)
        setIncome(inc)
    }

    useEffect(()=>{
        CalculationIncomeExpense();
    },[transaction])
    return (
        <>
            <div className="header">
                <div className="balance">
                    <p>YOUR BALANCE</p>
                    <h2> ${income + expense}</h2>
                </div>
                <div className="add">
                    {
                        toggle
                            ?
                            <>
                                <Button variant="contained" onClick={() => setToggle(false)}>Add</Button></>
                            :
                            <>
                                <Button variant="contained" onClick={() => setToggle(true)}>Cancle</Button>
                            </>
                    }

                </div>
            </div>
            <div className="income-expense">
                <div className="income">
                    <p>INCOME</p>
                    <h4 style={{color:'green'}}>${income}</h4>
                </div>
                <hr />
                <div className="expense">
                    <p>EXPENSE</p>
                    <h4 style={{color:'red'}}>${expense}</h4>
                </div>
            </div>

            {toggle ? <></> : <>
                <div className="transaction">
                    <div className="transaction-head">
                        <h3>Add new transaction</h3>
                        <hr />
                    </div>
                    <div className="input-feild">
                        <label htmlFor='text'>Text</label>
                        <input type='text' placeholder='Enter a Text' value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    <div className="input-feild">
                        <label htmlFor='amount'>Amount</label>
                        <input type='number' placeholder='Enter Amount' value={newAmount} onChange={(e)=> setNewAmount(e.target.value)} />
                    </div>
                    <div className="radio-feild">
                        <div className="radio">
                            <label>Income</label>
                            <input type='radio' id='income' value='income' checked={transactionType==='income'} onChange={()=> setTransactionType('income')}/>
                        </div>
                        <div className="radio">
                            <label>Expense</label>
                            <input type='radio' id='expense' value='expense' checked={transactionType==='expense'} onChange={()=> setTransactionType('expense')} />
                        </div>
                    </div>
                    <div className="btn">
                        <Button variant='contained' onClick={AddTransaction}>Add transaction</Button>
                    </div>
                </div>
            </>}
            <TransactionList transaction={transaction} setTransaction={setTransaction}/>
        </>
    )
}

export default Transaction
