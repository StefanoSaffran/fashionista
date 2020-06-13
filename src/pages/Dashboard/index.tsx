import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import Product, { IProduct } from '../../components/Product';
import Header from '../../components/Header';
import Modal from '../../components/Modal/ModalSearch';
import ModalCart from '../../components/Modal/ModalCart';

import { Container, Content, ProductsCount, ProductList } from './styles';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleCartModal = useCallback(() => {
    setCartModalOpen(!cartModalOpen);
  }, [cartModalOpen]);

  useEffect(() => {
    api.get<IProduct[]>('catalog').then(response => {
      let id = 0;
      setProducts(
        response.data.map(product => {
          id += 1;
          return {
            ...product,
            id,
          };
        })
      );
    });
  }, []);

  return (
    <>
      <Header openModal={toggleModal} openCartModal={toggleCartModal} />
      <Container>
        <Content>
          <ProductsCount>{`${products.length} itens`}</ProductsCount>
          <ProductList>
            {products?.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </ProductList>
        </Content>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
      <ModalCart isOpen={cartModalOpen} setIsOpen={toggleCartModal} />
    </>
  );
};

export default Dashboard;
