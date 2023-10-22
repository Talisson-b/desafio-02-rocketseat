import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'
export const FormContainer = styled.div`
  form {
    display: flex;
    gap: 20px;
    /* flex-direction: column; */
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  > div {
    display: flex;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
      margin-right: 0.5rem;
    }
    p {
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
const InputBase = styled.input`
  height: 2.625rem;
  border: none;
  padding: 0.725rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  &::placeholder {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    /* padding: 0.725rem; */
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const InputCep = styled(InputBase)`
  width: 12.5rem;
  margin-block: 2rem 1rem;
`

export const InputRua = styled(InputBase)`
  margin-bottom: 1rem;
`

export const InputNumero = styled(InputBase)`
  margin-bottom: 1rem;
`

export const InputComplemento = styled(InputBase)`
  flex: 1;
`

export const InputBairro = styled(InputBase)`
  width: 12.5rem;
`

export const InputCidade = styled(InputBase)`
  width: 17.25rem;
`

export const InputUF = styled(InputBase)`
  width: 3.75rem;
`

export const ContainerNumero = styled.div`
  display: flex;
  gap: 0.725rem;
`
export const ContainerBairro = styled.div`
  display: flex;
  gap: 0.725rem;
`

export const PaymentsMethods = styled.div`
  display: flex;
  margin-top: 0.75rem;
  padding: 2.5rem;
  max-width: 40rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  > svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.purple};
  }
`

export const ContentPayments = styled.div`
  h4 {
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 2rem;
  }
`

export const TypePayment = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const TypeButton = styled(RadioGroup.Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.725rem;
  text-transform: uppercase;
  padding: 1rem;
  height: 50px;
  width: 180px;
  gap: 0.725rem;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.purple};
  }
`
