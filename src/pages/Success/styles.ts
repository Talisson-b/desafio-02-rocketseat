import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-inline: 10rem;
  margin-top: 5rem;
`

export const ContentContainer = styled.div``

export const OrderConfirmed = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.3;

    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  & > div {
    display: flex;
    gap: 0.725rem;
  }

  span {
    /* background: #000; */
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  p {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
  strong {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`

export const ContainerImagem = styled(motion.div)`
  display: flex;
  margin-top: 6rem;
`
