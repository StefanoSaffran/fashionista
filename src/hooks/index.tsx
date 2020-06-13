import React from 'react';

import { CartProvider } from './cart';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    <ToastProvider>{children}</ToastProvider>
  </CartProvider>
);

export default AppProvider;
