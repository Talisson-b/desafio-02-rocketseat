import Header from '../../components/Header'
import entregador from '../../assets/entregador.svg'
import { defaultTheme } from '../../styles/themes/default'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import {
  ContainerImagem,
  ContentContainer,
  InformationBox,
  OrderConfirmed,
  SuccessContainer,
} from './styles'
import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import { CartContext } from '../../context/CartContext'

const Success = () => {
  const { address } = useContext(FormContext)
  const { limparCarrinho } = useContext(CartContext)
  limparCarrinho()

  return (
    <>
      <Header />
      <SuccessContainer>
        <ContentContainer>
          <OrderConfirmed>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </OrderConfirmed>
          <InformationBox>
            <div>
              <span style={{ backgroundColor: defaultTheme.purple }}>
                <MapPin size={16} weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {address?.rua}, {address?.numero}
                  </strong>
                </p>
                <p>
                  {address?.cidade} - {address?.bairro}, {address?.uf}
                </p>
              </div>
            </div>
            <div>
              <span style={{ backgroundColor: defaultTheme.yellow }}>
                <Timer size={16} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <span style={{ backgroundColor: defaultTheme['yellow-dark'] }}>
                <CurrencyDollar size={16} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{address.methods}</strong>
              </div>
            </div>
          </InformationBox>
        </ContentContainer>
        <ContainerImagem
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <img src={entregador} alt="" />
        </ContainerImagem>
      </SuccessContainer>
    </>
  )
}

export default Success
