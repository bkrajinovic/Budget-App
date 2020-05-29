import React from 'react'
import "./styles.css"


function BudgetInfo() {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title" id="budget">10000 HRK</h5>
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
