import styled from 'styled-components'
import background from '../../assets/Background.svg'
import { motion } from 'framer-motion'
export const BannerContainer = styled(motion.div)`
  display: flex;
  gap: 3.5rem;
  padding-top: 5.75rem;
  padding-bottom: 6.75rem;
  padding-inline: 10rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`
export const ContentContainer = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.3;
    font-family: 'Baloo 2', cursive;
    font-weight: 900;
    color: ${(props) => props.theme['base-title']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 18.375rem;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.white};
      width: 1rem;
      height: 1rem;
    }
  }

  span {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    justify-content: flex-start;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ContainerImage = styled.div`
  /* img {
    width: 29.75rem;
    height: 22.5rem;
  } */
`
