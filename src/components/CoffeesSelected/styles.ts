import styled from 'styled-components'

export const SelectedCoffeContainer = styled.div`
  min-width: 448px;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img {
    display: flex;
    flex-direction: column;
    width: 64px;
    height: 64px;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputAdd = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 6.5px 8px;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.725rem;
    border-radius: 6px;
    gap: 4px;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const Separator = styled.div`
  margin-block: 1.5rem;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.725rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }

    span {
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
    }
  }
`
export const Total = styled.div`
  span {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 0.725rem;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;
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

export const TitleCarrinhoVazio = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['yellow-dark']};
`
