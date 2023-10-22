import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  ButtonConfirm,
  Info,
  InfosContainer,
  InputAdd,
  InputContainer,
  ListContainer,
  SelectedCoffeContainer,
  Separator,
  TitleCarrinhoVazio,
  Total,
  TotalContainer,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FormatPrice } from '../Card'

const CoffeeSelected = () => {
  const {
    cart,
    removeItemCart,
    total,
    totalComFrete,
    addItemCard,
    removeAmountItem,
  } = useContext(CartContext)

  return (
    <>
      {cart.length > 0 ? (
        <SelectedCoffeContainer data-aos="zoom-in-left">
          {cart.map((item) => (
            <>
              <ListContainer key={item.type}>
                <img src={item.image} alt="" />
                <InfosContainer>
                  <Info>
                    <p>{item.type}</p>
                    <span>R$ {FormatPrice(item!.total!)}</span>
                  </Info>
                  <InputAdd>
                    <InputContainer>
                      <button>
                        <Minus
                          weight="bold"
                          size={14}
                          onClick={() => removeAmountItem(item)}
                        />
                      </button>
                      <input
                        type="number"
                        required
                        min={1}
                        placeholder="1"
                        value={item.amount}
                      />
                      <button>
                        <Plus
                          weight="bold"
                          size={14}
                          onClick={() => addItemCard(item)}
                        />
                      </button>
                    </InputContainer>
                    <button onClick={() => removeItemCart(item)}>
                      <Trash size={16} />
                      REMOVER
                    </button>
                  </InputAdd>
                </InfosContainer>
              </ListContainer>
              <Separator></Separator>
            </>
          ))}
          <TotalContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ {total}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <Total>
              <span>Total</span>
              <span>R$ {totalComFrete}</span>
            </Total>
            <ButtonConfirm type="submit">CONFIRMAR PEDIDO</ButtonConfirm>
          </TotalContainer>
        </SelectedCoffeContainer>
      ) : (
        <SelectedCoffeContainer>
          <TitleCarrinhoVazio>
            Ops... Seu carinho está vazio...
          </TitleCarrinhoVazio>
        </SelectedCoffeContainer>
      )}
    </>
  )
}

export default CoffeeSelected
