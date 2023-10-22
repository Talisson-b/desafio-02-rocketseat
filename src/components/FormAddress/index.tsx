import { useContext } from 'react'
import {
  AddressContainer,
  ContainerBairro,
  ContainerNumero,
  ContentPayments,
  FormContainer,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNumero,
  InputRua,
  InputUF,
  PaymentsMethods,
  TypeButton,
  TypePayment,
} from './styles'
import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { FormContext, FormProps } from '../../context/FormContext'
import CoffeeSelected from '../CoffeesSelected'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormAdress = () => {
  const { addAddress } = useContext(FormContext)

  const { register, handleSubmit, control } = useForm<FormProps>()
  const navigate = useNavigate()

  function handleForm(data: FormProps) {
    addAddress(data)
    navigate('/success')
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <AddressContainer data-aos="zoom-in-right">
              <div>
                <MapPinLine size={22} />
                <div>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
              <InputCep type="text" placeholder="CEP" {...register('cep')} />
              <InputRua type="text" placeholder="Rua" {...register('rua')} />
              <ContainerNumero>
                <InputNumero
                  type="number"
                  placeholder="Número"
                  {...register('numero', { valueAsNumber: true })}
                />
                <InputComplemento
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                  required
                />
              </ContainerNumero>
              <ContainerBairro>
                <InputBairro
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <InputCidade
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <InputUF type="text" placeholder="UF" {...register('uf')} />
              </ContainerBairro>
            </AddressContainer>
            <PaymentsMethods data-aos="flip-left">
              <CurrencyDollarSimple size={22} />
              <div>
                <ContentPayments>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </ContentPayments>
                <Controller
                  control={control}
                  name="methods"
                  render={({ field }) => {
                    return (
                      <TypePayment
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <TypeButton value="Cartão de Crédito">
                          <CreditCard />
                          Cartão de crédito
                        </TypeButton>
                        <TypeButton value="Cartão de Débito">
                          <Bank />
                          cartão de débito
                        </TypeButton>
                        <TypeButton value="Dinheiro">
                          <Money />
                          dinheiro
                        </TypeButton>
                      </TypePayment>
                    )
                  }}
                />
              </div>
            </PaymentsMethods>
          </div>

          <CoffeeSelected />
        </form>
      </FormContainer>
    </>
  )
}

export default FormAdress
