import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import notFound from '../../../assets/not-found.png';

export interface IProduct {
  name: string;
  actual_price: string;
  image: string;
  regular_price: string;
  style: string;
  installments: string;
  code_color: string;
  sizes: ISize[];
}

interface ISize {
  available: boolean;
  size: string;
  sku: string;
}

interface IProps {
  product: IProduct;
  setIsOpen: () => void;
}

const Product: React.FC<IProps> = ({ product, setIsOpen }: IProps) => {
  const history = useHistory();

  const handleClickProduct = useCallback(() => {
    setIsOpen();
    history.push(`/product/${product.code_color}`);
  }, [history, product.code_color, setIsOpen]);

  return (
    <Container>
      <button type="button" onClick={handleClickProduct}>
        <picture className="card__picture">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <img src={notFound} alt="Imagem Indisponível" />
          )}
        </picture>
        <div className="product__info">
          <span>{product.name}</span>
          <span>
            <b>Tam:</b>
            {product.sizes
              .filter((size: ISize) => size.available === true)
              .map((size: ISize) => `${size.size} `)}
          </span>
        </div>
        <div className="product__price">
          <span>{product.actual_price}</span>
          <span>{product.installments}</span>
        </div>
      </button>
    </Container>
  );
};

export default Product;
