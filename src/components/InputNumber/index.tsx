import { Minus, Plus } from '@phosphor-icons/react'
import { InputContainer } from './styles'

interface InputProps {
  amount: number
}

const InputNumber = ({ amount }: InputProps) => {
  return (
    <InputContainer>
      <button>
        <Minus weight="bold" size={14} />
      </button>
      <input type="number" required min={1} placeholder="1" value={amount} />
      <button>
        <Plus weight="bold" size={14} />
      </button>
    </InputContainer>
  )
}

export default InputNumber
