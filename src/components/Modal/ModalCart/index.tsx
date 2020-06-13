import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaSadCry } from 'react-icons/fa';

import Modal from '..';
import Product from '../../Product/CartProduct';
import { formatPrice } from '../../../utils/format';

import { useCart, ICartProduct } from '../../../hooks/cart';
import { useToast } from '../../../hooks/toast';

import { Header, Body, Products, Empty, Total } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalCart: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    increment,
    decrement,
    removeProduct,
    products,
    getTotal,
    removeAll,
  } = useCart();
  const { addToast } = useToast();
  const history = useHistory();

  const total = useMemo(() => formatPrice(getTotal()), [getTotal]);

  const handleCheckout = useCallback(() => {
    removeAll();

    addToast({
      type: 'success',
      title: 'Compra finalizada!',
      description: 'Obrigado pela preferência, volte sempre!',
    });
    setIsOpen();
    history.push('/');
  }, [addToast, removeAll, setIsOpen, history]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <div className="header__context">
          <button type="button" onClick={() => setIsOpen()}>
            <FiArrowLeft size={24} />
          </button>
          <span>Seu Carrinho</span>
        </div>
      </Header>
      <Body>
        {products.length ? (
          <>
            <Products>
              {products.map((product: ICartProduct, index) => (
                <Product
                  key={index}
                  product={product}
                  increment={increment}
                  decrement={decrement}
                  removeProduct={removeProduct}
                />
              ))}
            </Products>
            <Total>
              <span>Total:</span>
              <strong>{total}</strong>
            </Total>
            <button type="button" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </>
        ) : (
          <Empty>
            <h1>Seu carrinho esta vazio</h1>
            <FaSadCry size={50} />
          </Empty>
        )}
      </Body>
    </Modal>
  );
};

export default ModalCart;
