import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
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
}

const Product: React.FC<IProps> = ({ product }: IProps) => {
  const replaceSpacesForDash = useMemo(() => {
    return product.name.replace(/ /g, '-');
  }, [product.name]);

  return (
    <Container>
      <Link to={`/product/${product.code_color}`}>
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
      </Link>
    </Container>
  );
};

export default Product;
