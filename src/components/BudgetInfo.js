import React, {useContext} from 'react'
import "./styles.css"
import { ExpensesContext } from '../store'


function BudgetInfo() {

    const {value} = useContext(ExpensesContext) 


    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="budget">{value.budget} HRK</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Expenses</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="expenses">-750 HRK</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Balance</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="balance">9250 HRK</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetInfo
