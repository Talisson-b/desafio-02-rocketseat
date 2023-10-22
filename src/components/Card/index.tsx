/* eslint-disable prettier/prettier */
import { useEffect, useContext, useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Flip, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  CardContainer,
  CardContent,
  CartButton,
  InputContainer,
  PriceContainer,
  Tag,
} from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../../context/CartContext";

export interface InfoProps {
  infos: {
    type: string;
    description: string;
    image: string;
    price: number;
    tags?: string[];
    quantity?: number;
  };
}

export function FormatPrice(preco: number) {
  return preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

const Card = ({ infos }: InfoProps) => {
  const { description, image, price, type, tags } = infos;
  const [quantity, setQuantity] = useState(1);
  const { addItemCard } = useContext(CartContext);

  const notify = () => toast("🛒Item adicionado ao carrinho");

  function addQuantity() {
    setQuantity((state) => state + 1);
  }

  function removeQuantity() {
    setQuantity((state) => state - 1);
  }

  function handleAddCart() {
    // infos.infos.quantity! = quantity;
    infos.quantity! += quantity;
    addItemCard(infos);
  }

  function handleClick() {
    handleAddCart()
    notify()
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <CardContainer
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      <CardContent>
        <img src={image} alt="" />
        <div>{tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</div>
        <h3>{type}</h3>
        <p>{description}</p>
        <PriceContainer>
          <span>
            R$ <strong>{FormatPrice(price)}</strong>
          </span>

          <InputContainer>
            <button>
              <Minus weight="bold" size={14} onClick={() => removeQuantity()} />
            </button>

            <input
              type="number"
              required
              min={1}
              placeholder="1"
              value={quantity}
            />

            <button>
              <Plus weight="bold" size={14} onClick={() => addQuantity()} />
            </button>
          </InputContainer>
          <CartButton onClick={handleClick}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </PriceContainer>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
