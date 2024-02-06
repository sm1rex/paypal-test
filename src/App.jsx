import Checkout from './Checkout'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'


const initialOptions = {
  "client-id": "AcFtrsHkC5Ah685PmN-iq-hNSsNGHI3_08XUX7121P7vLuuWIRuyAn1LN1DFHFCviqJxYVmuhb_WvRk2",
  currency: "USD",
  intent: "capture"
}

function App() {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
      <Checkout />
      </PayPalScriptProvider>
    </>
  )
}

export default App
