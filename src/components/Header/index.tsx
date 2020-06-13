import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import { useCart } from '../../hooks/cart';
import { Container, Content, Profile, Badge } from './styles';

interface IHeaderProps {
  openModal: () => void;
  openCartModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal, openCartModal }) => {
  const { products, getTotalQuantity } = useCart();

  const quantity = useMemo(() => getTotalQuantity(), [getTotalQuantity]);
  return (
    <Container>
      <Content>
        <Link to="/">Fashionista</Link>
        <aside>
          <Profile>
            <button
              type="button"
              onClick={() => {
                openModal();
              }}
            >
              <FiSearch />
            </button>
            <Badge
              type="button"
              onClick={() => openCartModal()}
              hasProducts={products.length}
            >
              <FiShoppingBag style={{ marginLeft: 15 }} />
              <sup>{quantity}</sup>
            </Badge>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
