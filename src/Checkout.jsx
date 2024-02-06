import React, { useState } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

const Checkout = () => {
    const [{ options, isPendeing }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency)

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value)
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value
            }
        })
    }

    // сколько денег - сумма!
    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${}`
                    }
                }
            ]
        })
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`COMPLETED! BY ${name}`)
        })
    }

    return (
        <div className="checkout">
            {
                isPendeing ? <p>Loading...</p> : (
                    <>
                        <select value={currency} onChange={onCurrencyChange}>
                            <option value="USD">USD</option>
                            <option value="EUR">EURO</option>
                        </select>

                        <PayPalButtons style={{ layout: "vertical" }}
                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                            onApprove={(data, actions) => onApproveOrder(data, actions)} />
                    </>
                )
            }
        </div>
    )
}

export default Checkout