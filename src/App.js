import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import ItemList from './ItemList';
import Cart from './Cart';

import './App.css';

const CheckoutWrap = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    width: 95%;
  }
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 90vh;
  overflow-y: hidden;
  
`

const Header = styled.div`
  background: #171E30;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeadingText = styled.p`
  background: linear-gradient(90deg, rgba(123,243,169,1) 0%, rgba(101,213,206,1) 50%, rgba(60,143,200,1) 100%);
  text-align: center;
  font-size: 1.6rem;
  margin: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function App() {
  return (
    <Provider store={store}>
      <Header>
        <HeadingText>Shopping Cart</HeadingText>
      </Header>
      <CheckoutWrap>
        <ItemList></ItemList>
        <Cart></Cart>
      </CheckoutWrap>
    </Provider>
  );
}

export default App;
