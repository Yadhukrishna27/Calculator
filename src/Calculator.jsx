import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateExpression, evaluateExpression, resetExpression } from './redux/calculateSlice';


function Calculator() {
    const dispatch = useDispatch();
    const { expression, result } = useSelector((store) => store.expressionReducer);

    const handleInputChange = (e) => {
        dispatch(updateExpression(e.target.value));
    };

    const handleEvaluate = () => {
        dispatch(evaluateExpression());
    };

    const handleReset = () => {
        dispatch(resetExpression());
    };


    return (
        <>
            <div className="calculator-box d-flex flex-column align-items-center border border-secondary">
                <h1 className="text-primary mb-4 text-center">Calculator</h1>
                <input
                    type="text"
                    value={expression}
                    onChange={handleInputChange}
                    placeholder="Enter expression"
                    className="form-control mb-3"
                />
                <div className="d-flex mb-3">
                    <button className="btn btn-info me-3" onClick={handleEvaluate}>
                        Calculator
                    </button>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>
                <h3 className="tx1 text-dark">Result: {result !== null ? result : "0"}</h3>
            </div>
        </>
    )
}

export default Calculator