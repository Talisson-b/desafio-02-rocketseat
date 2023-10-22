import FormAdress from '../../components/FormAddress'
import Header from '../../components/Header'
import { CheckoutContainer } from './styles'

const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <div>
          <h3>Complete seu pedido</h3>
          <FormAdress />
        </div>
      </CheckoutContainer>
    </>
  )
}

export default Checkout
