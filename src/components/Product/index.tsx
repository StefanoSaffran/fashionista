import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

import notFound from '../../assets/not-found.png';

export interface IProduct {
  id: number;
  name: string;
  actual_price: string;
  code_color: string;
  color: string;
  color_slug: string;
  discount_percentage: string;
  image: string;
  installments: string;
  on_sale: boolean;
  regular_price: string;
  style: string;
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
  return (
    <Container visible={product.discount_percentage ? 1 : 0}>
      <Link to={`/product/${product.code_color}`}>
        <div className="card__discount">
          <span>{product.discount_percentage}</span>
        </div>
        <picture className="card__picture">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <img src={notFound} alt="Imagem Indisponível" />
          )}
        </picture>
        <section>
          <p>{product.name}</p>

          {!product.discount_percentage ? (
            <span>{product.actual_price}</span>
          ) : (
            <div className="product__price">
              <span className="product__regularPrice">
                {product.regular_price}
              </span>
              <span> {product.actual_price}</span>
            </div>
          )}
        </section>
      </Link>
    </Container>
  );
};

export default Product;
