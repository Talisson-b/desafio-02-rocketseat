import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    
  }

  /* button {
    font-size: 0.85rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  } */
`
