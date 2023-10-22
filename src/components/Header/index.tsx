import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import {
  Cart,
  HeaderContainer,
  LocationCity,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Header = () => {
  const { cartAmount } = useContext(CartContext)
  return (
    <HeaderContainer
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
      </div>

      <LocationContainer>
        <LocationCity>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </LocationCity>

        <Cart>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {cartAmount > 0 && <span>{cartAmount}</span>}
        </Cart>
      </LocationContainer>
    </HeaderContainer>
  )
}

export default Header
