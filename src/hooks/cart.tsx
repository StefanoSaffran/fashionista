import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

export interface ICartProduct {
  name: string;
  price: string;
  image: string;
  quantity: number;
  size: string;
  installments: string;
  code_color: string;
}

interface ICartContext {
  products: ICartProduct[];
  addToCart(item: Omit<ICartProduct, 'quantity'>): void;
  increment(code_color: string, size: string): void;
  decrement(code_color: string, size: string): void;
  removeProduct(code_color: string, size: string): void;
  removeAll(): void;
  getQuantity(code_color: string, size: string): number;
  getTotalQuantity(): number;
  getSubTotal(code_color: string, size: string): number;
  getTotal(): number;
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ICartProduct[]>(() => {
    const storedProducts = localStorage.getItem('@Fashionista:products');

    if (storedProducts) return JSON.parse(storedProducts);
    return [];
  });

  useEffect(() => {
    async function updateStoredProducts(): Promise<void> {
      localStorage.setItem('@Fashionista:products', JSON.stringify(products));
    }

    updateStoredProducts();
  }, [products]);

  const getQuantity = useCallback(
    (code_color: string, size: string) => {
      const foundproduct = products.filter(
        product => product.code_color === code_color && product.size === size
      );

      return foundproduct[0].quantity;
    },
    [products]
  );

  const getTotalQuantity = useCallback(() => {
    const totalQuantity = products.reduce(
      (total, { quantity }) => total + quantity,
      0
    );

    return totalQuantity;
  }, [products]);

  const getSubTotal = useCallback(
    (code_color: string, size: string) => {
      const foundProduct = products.find(
        product => product.code_color === code_color && product.size === size
      );

      if (!foundProduct) return 0;

      const [_, value] = foundProduct?.price.split(' ');
      const subtotal = foundProduct?.quantity * Number(value.replace(',', '.'));
      return subtotal;
    },
    [products]
  );

  const getTotal = useCallback(() => {
    return products.reduce((total, nextProduct) => {
      const [_, value] = nextProduct.price.split(' ');
      const subtotal = nextProduct.quantity * Number(value.replace(',', '.'));
      return (total += subtotal);
    }, 0);
  }, [products]);

  const addToCart = useCallback(
    async ({
      image,
      installments,
      name,
      price,
      size,
      code_color,
    }: Omit<ICartProduct, 'quantity'>) => {
      const checkIfNewProduct = products.find(
        product => product.code_color === code_color && product.size === size
      );

      if (!checkIfNewProduct) {
        setProducts(oldProducts => [
          ...oldProducts,
          { image, installments, name, price, size, code_color, quantity: 1 },
        ]);

        return;
      }

      const updatedProducts = products.map(product => {
        if (product.code_color !== code_color) return product;

        const updatedProduct = {
          ...product,
          quantity: product.quantity + 1,
        };

        return updatedProduct;
      });

      setProducts(updatedProducts);
    },
    [products]
  );

  const increment = useCallback(
    async (code_color: string, size: string) => {
      const updatedProducts = products.map(product => {
        if (product.code_color !== code_color || product.size !== size)
          return product;

        const updatedProduct = {
          ...product,
          quantity: product.quantity + 1,
        };

        return updatedProduct;
      });

      setProducts(updatedProducts);
    },
    [products]
  );

  const decrement = useCallback(
    async (code_color: string, size: string) => {
      const updatedProducts = products
        .map(product => {
          if (product.code_color !== code_color || product.size !== size)
            return product;

          const updatedProduct = {
            ...product,
            quantity: product.quantity - 1,
          };

          return updatedProduct;
        })
        .filter(product => product.quantity > 0);

      setProducts(updatedProducts);
    },
    [products]
  );

  const removeProduct = useCallback(
    (code_color: string, size: string) => {
      setProducts(
        products.filter(
          product => product.code_color !== code_color || product.size !== size
        )
      );
    },
    [products]
  );

  const removeAll = useCallback(() => {
    setProducts([]);
  }, []);

  const value = React.useMemo(
    () => ({
      products,
      addToCart,
      increment,
      decrement,
      getQuantity,
      getTotalQuantity,
      getSubTotal,
      getTotal,
      removeProduct,
      removeAll,
    }),
    [
      products,
      addToCart,
      increment,
      decrement,
      getQuantity,
      getTotalQuantity,
      getSubTotal,
      getTotal,
      removeProduct,
      removeAll,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
