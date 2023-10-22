import { createContext, useState, ReactNode } from 'react'

export interface FormProps {
  rua?: string
  cep?: string
  numero?: number
  complemento?: string
  bairro?: string
  cidade?: string
  uf?: string
  methods?: 'credito' | 'debito' | 'dinheiro'
}

interface FormContextData {
  address: FormProps
  addAddress: (address: FormProps) => void
}

interface FormProviderProps {
  children: ReactNode
}
// Crianção do contexto
export const FormContext = createContext({} as FormContextData)

function FormProvider({ children }: FormProviderProps) {
  const [address, setAddress] = useState<FormProps>({})

  function addAddress(address: FormProps) {
    setAddress(address)
    console.log('funçao dentro do contexto')
  }

  return (
    <FormContext.Provider value={{ address, addAddress }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
