import styled from 'styled-components'

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
