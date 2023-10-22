import { createContext, ReactNode, useState } from 'react'
import { FormatPrice } from '../components/Card'

interface CartProps {
  type?: string
  description?: string
  image?: string
  price?: number
  tags?: string[]
  quantity?: number
  amount?: number
  total?: number
}

interface CartContextData {
  cart: CartProps[]
  cartAmount: number
  removeItemCart: (product: CartProps) => void
  removeAmountItem: (product: CartProps) => void
  addItemCard: (newItem: CartProps) => void
  total: string
  totalComFrete: string
  limparCarrinho: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState('')
  const [totalComFrete, setTotalComFrete] = useState('')

  function addItemCard(newItem: CartProps) {
    const indexItem = cart.findIndex((item) => item.type === newItem!.type)

    if (indexItem !== -1) {
      const cartList = cart
      cartList[indexItem].amount! = cartList[indexItem].amount! + 1
      cartList[indexItem].total =
        cartList[indexItem].amount! * cartList[indexItem].price!

      setCart(cartList)
      totalResultCart(cartList)
    } else {
      const data: CartProps = {
        ...newItem,
        amount: newItem!.quantity!,
        total: newItem!.price! * newItem!.quantity!,
      }

      setCart((state) => [...state, data])
      totalResultCart([...cart, data])
    }
  }

  function removeItemCart(product: CartProps) {
    const removeItem = cart.filter((item) => item.type !== product.type)

    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function removeAmountItem(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.type === product.type)

    if (cart[indexItem].amount! > 1) {
      const cartList = [...cart]
      cartList[indexItem].amount = cartList[indexItem].amount! - 1
      cartList[indexItem].total =
        cartList[indexItem].amount! * cartList[indexItem].price!

      setCart(cartList)
      totalResultCart(cartList)
      return
    }

    const removeItem = cart.filter((item) => item.type !== product.type)

    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(items: CartProps[]) {
    const myCart = items
    const result = myCart.reduce((acc, item) => {
      return acc + item.total!
    }, 0)
    const resultFormat = FormatPrice(result)
    const resultFrete = FormatPrice(result + 3.5)
    setTotal(resultFormat)
    setTotalComFrete(resultFrete)
  }

  function limparCarrinho() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        removeItemCart,
        total,
        totalComFrete,
        removeAmountItem,
        limparCarrinho,
        addItemCard,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
