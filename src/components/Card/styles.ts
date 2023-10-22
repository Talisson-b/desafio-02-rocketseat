import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;
  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;

  img {
    width: 120px;
    height: 120px;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};

    margin-block: 1rem 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2.125rem;
  }

  > div {
    display: flex;
    margin-top: 0.75rem;
    gap: 0.25rem;
  }
`

export const Tag = styled.span`
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 1.3;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  /* margin-top: 0.75rem; */
  padding: 0.25rem 0.5rem;

  border-radius: 100px;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 38px;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    margin-right: 1.25rem;

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`

export const CartButton = styled.button`
  height: 100%;
  border-radius: 6px;
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 8px;
  border: none;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  height: 100%;
  /* width: 72px; */
  /* margin-left: 1.25rem; */
  /* margin-right: 0.5rem; */
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  input {
    width: 15px;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};

    border: none;
    background-color: ${(props) => props.theme['base-button']};

    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-title']};
      text-align: center;
      line-height: 1.3;
      font-size: 1rem;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }
`
