import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

import Modal from '..';
import Product from '../../Product/SearchCardProduct';
import { IProduct } from '../../Product';
import api from '../../../services/api';

import { Header, InputWrapper, Body, Products, Empty } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalSearch: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const loadSearchedProducts = async (): Promise<void> => {
      if (filter.length < 3) {
        setProducts([]);
        return;
      }

      const { data } = await api.get<IProduct[]>('catalog', {
        params: { search: filter.toUpperCase() },
      });

      setProducts(data);
    };
    loadSearchedProducts();
  }, [filter]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <div className="header__context">
          <button type="button" onClick={() => setIsOpen()}>
            <FiArrowLeft size={24} />
          </button>
          <span>Buscar Produtos</span>
        </div>
        <InputWrapper>
          <input
            type="text"
            value={filter}
            placeholder="Digite o nome do produto"
            onChange={({ target }) => setFilter(target.value)}
          />
        </InputWrapper>
      </Header>
      <Body>
        {products.length ? (
          <Products>
            {products.map((product: IProduct, index) => (
              <Product key={index} product={product} setIsOpen={setIsOpen} />
            ))}
          </Products>
        ) : (
          <Empty>
            {filter.length > 2 && !products.length && (
              <p>Nenhum produto encontrado...</p>
            )}
            <FiSearch size={50} />
          </Empty>
        )}
      </Body>
    </Modal>
  );
};

export default ModalSearch;
