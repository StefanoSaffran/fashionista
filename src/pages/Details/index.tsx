import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';

import { IProduct } from '../../components/Product';
import Header from '../../components/Header';
import Modal from '../../components/Modal/ModalSearch';
import ModalCart from '../../components/Modal/ModalCart';

import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import notFound from '../../assets/not-found.png';

import { Container, Content, ProductDetails, SelectWrapper } from './styles';

const Details: React.FC = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [selectedSize, setSelectedSize] = useState('0');
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const { code_color } = useParams();
  const history = useHistory();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleCartModal = useCallback(() => {
    setCartModalOpen(!cartModalOpen);
  }, [cartModalOpen]);

  const loadProduct = useCallback(async () => {
    try {
      const { data } = await api.get<IProduct[]>('catalog', {
        params: { search: code_color },
      });

      setProduct(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [code_color]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const handleSelectSize = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedSize(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      console.log(window.scrollY);
      console.log(window);

      if (selectedSize === '0') {
        addToast({
          type: 'error',
          title: 'Campo obrigatório',
          description: 'Selecione um tamanho.',
        });
        return;
      }

      addToCart({
        name: product.name,
        price: product.actual_price,
        image: product.image,
        size: selectedSize,
        installments: product.installments,
        code_color: product.code_color,
      });

      setSelectedSize('0');

      addToast({
        type: 'success',
        title: 'Produto adicionado.',
        description: `O Produto ${product.name} foi adicionado ao carrinho.`,
      });
    },
    [addToCart, product, selectedSize, addToast]
  );

  return (
    <>
      <Header openModal={toggleModal} openCartModal={toggleCartModal} />
      {!loading ? (
        <>
          <Container>
            <button type="button" onClick={() => history.goBack()}>
              <FiChevronLeft size={20} /> Voltar
            </button>
            <Content visible={product.discount_percentage ? 1 : 0}>
              <picture className="card__picture">
                <div className="card__discount">
                  <span>{product.discount_percentage}</span>
                </div>
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <img src={notFound} alt="Imagem Indisponível" />
                )}
              </picture>
              <ProductDetails>
                <h2>{product.name}</h2>
                <p>
                  {product.discount_percentage && (
                    <span className="discount">
                      De <b>{product.regular_price}</b> por{' '}
                    </span>
                  )}
                  {product.actual_price}{' '}
                  <span>em até {product.installments}</span>
                </p>
                <SelectWrapper isFilled={selectedSize === '0' ? 0 : 1}>
                  <select
                    aria-label="Escolha o tamanho"
                    value={selectedSize}
                    name="size"
                    id="size"
                    onChange={handleSelectSize}
                  >
                    <option value="0">Escolha o tamanho</option>
                    {product.sizes
                      ?.filter(({ available }) => available === true)
                      .map(({ size }) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                  </select>
                  <FiChevronDown />
                </SelectWrapper>

                <button type="button" onClick={handleSubmit}>
                  Adicionar ao Carrinho
                </button>
              </ProductDetails>
            </Content>
          </Container>
          <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
          <ModalCart isOpen={cartModalOpen} setIsOpen={toggleCartModal} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Details;
