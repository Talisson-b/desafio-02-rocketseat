import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { GlobalStyles } from './styles/globalStyles'
import CartProvider from './context/CartContext'
import FormProvider from './context/FormContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <FormProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </FormProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
