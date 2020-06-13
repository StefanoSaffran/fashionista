import React, { useMemo } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { FaTrash } from 'react-icons/fa';
import { formatPrice } from '../../../utils/format';
import notFound from '../../../assets/not-found.png';
import { useCart, ICartProduct } from '../../../hooks/cart';

import { Container } from './styles';

interface IProps {
  product: ICartProduct;
  increment(code_color: string, size: string): void;
  decrement(code_color: string, size: string): void;
  removeProduct(code_color: string, size: string): void;
}

const CardProduct: React.FC<IProps> = ({
  product,
  increment,
  decrement,
  removeProduct,
}: IProps) => {
  const { getQuantity, getSubTotal } = useCart();
  function handleIncrement(): void {
    increment(product.code_color, product.size);
  }

  function handleDecrement(): void {
    decrement(product.code_color, product.size);
  }

  function handleDelete(): void {
    removeProduct(product.code_color, product.size);
  }

  const subtotal = useMemo(
    () => formatPrice(getSubTotal(product.code_color, product.size)),
    [getSubTotal, product]
  );

  return (
    <Container>
      <figure className="card__picture">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <img src={notFound} alt="Imagem Indisponível" />
        )}
      </figure>
      <div className="product__info">
        <span>{product.name}</span>
        <span>{product.price}</span>
        <span>
          <b>Tam: </b>
          {product.size}
        </span>
      </div>
      <div className="product__quantity">
        <button type="button" onClick={handleDecrement}>
          <MdRemoveCircleOutline size={20} color="#ff9000" />
        </button>
        <input
          type="number"
          readOnly
          value={getQuantity(product.code_color, product.size)}
        />
        <button type="button" onClick={handleIncrement}>
          <MdAddCircleOutline size={20} color="#ff9000" />
        </button>
      </div>

      <div className="subtotal">
        <span>{subtotal}</span>
      </div>
      <button type="button" onClick={handleDelete}>
        <FaTrash />
      </button>
    </Container>
  );
};

export default CardProduct;
