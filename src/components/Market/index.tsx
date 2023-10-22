import Card from '../Card'
import { GridContainer, MarketContainer } from './styles'
import expressoTradicional from '../../assets/coffeeTradicional.svg'
import expressoAmericano from '../../assets/expressoAmericano.svg'
import expressoCremoso from '../../assets/expressoCremoso.svg'
import expressoGelado from '../../assets/expressoGelado.svg'
import cafeComLeite from '../../assets/cafeComLeite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolateQuente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

const coffees = [
  {
    type: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    image: expressoTradicional,
    price: 9.75,
    tags: ['Tradicional'],
    quantity: 0,
  },

  {
    type: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: expressoAmericano,
    price: 9.9,
    tags: ['Tradicional'],
    quantity: 0,
  },
  {
    type: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 9.9,
    tags: ['Tradicional'],
    quantity: 0,
  },
  {
    type: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    quantity: 0,
  },
  {
    type: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouca leite e espuma',
    image: mocaccino,
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Chocolate Quente',
    description: 'Bebida feito com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    quantity: 0,
  },
  {
    type: 'Cubano',
    description: 'Drink de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    quantity: 0,
  },
  {
    type: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.9,
    tags: ['Especial'],
    quantity: 0,
  },
  {
    type: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.9,
    tags: ['Especial'],
    quantity: 0,
  },
  {
    type: 'Irlandês',
    description: 'Bebida a base de café, úisque irlandês, açucar e chantilly',
    image: irlandes,
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    quantity: 0,
  },
]

const Market = () => {
  return (
    <>
      <MarketContainer>
        <h1>Nossos cafés</h1>
        <GridContainer>
          {coffees.map((coffee) => (
            <Card infos={coffee} key={coffee.type} />
          ))}
        </GridContainer>
      </MarketContainer>
    </>
  )
}

export default Market
