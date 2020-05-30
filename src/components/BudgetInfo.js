import React, {useContext} from 'react'
import "./styles.css"
import { ExpensesContext } from '../store'


function BudgetInfo() {

    const {value, budget} = useContext(ExpensesContext) 

    const totalExpenses = value.expenses.length > 0 ? (
        value.expenses.reduce((acc, curr) => {
            acc += parseInt(curr.amount)
            return acc
        }, 0)) : 0;

    return (      
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="budget">{budget.budget} HRK</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Expenses</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="expenses">-{totalExpenses} HRK</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Balance</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="balance">{budget.budget - totalExpenses} HRK</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetInfo
