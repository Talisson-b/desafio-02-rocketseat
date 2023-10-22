import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import bannerCoffee from '../../assets/bannerCoffee.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  BannerContainer,
  ContainerImage,
  ContentContainer,
  GridContainer,
} from './styles'

const infos = [
  {
    icon: <ShoppingCart weight={'fill'} />,
    description: 'Compra simples e segura',
    color: defaultTheme['yellow-dark'],
  },
  {
    icon: <Package weight={'fill'} />,
    description: 'Embalagem mantém o café intacto',
    color: defaultTheme['base-text'],
  },
  {
    icon: <Timer weight={'fill'} />,
    description: 'Entrega rápida e rastreada',
    color: defaultTheme.yellow,
  },
  {
    icon: <Coffee weight={'fill'} />,
    description: 'O café chega fresquinho até você',
    color: defaultTheme.purple,
  },
]

const Banner = () => {
  return (
    <BannerContainer>
      <ContentContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <GridContainer>
          {infos.map((info) => (
            <div key={info.description}>
              <span
                style={{
                  backgroundColor: info.color,
                }}
              >
                {info.icon}
              </span>
              <p>{info.description}</p>
            </div>
          ))}
        </GridContainer>
      </ContentContainer>
      <ContainerImage>
        <img src={bannerCoffee} alt="" />
      </ContainerImage>
    </BannerContainer>
  )
}

export default Banner
