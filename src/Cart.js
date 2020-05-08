import React from "react";
import { connect } from 'react-redux';
import { getItemsState, getCartState, getTotalAmount } from './selectors';
import { setItemQuantity } from './actions';
import styled from "styled-components"

import { SectionHeading, TableHeading } from './styles'

const CartWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const CartItem = styled.tr`
`

const CartItemTitle = styled.td`
    font-size: 1rem;
    @media (max-width: 420px) {
        font-size: 0.7rem;
        max-width: 50px;
    }
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`


const CartItemQuantity = styled.td`
    font-weight: 300;
    text-align: center;
    font-size: 0.8rem;
    width: 1.6rem;
    border-radius: 0.4rem;
    box-shadow: 0 0 2px 1px #CEECEE;
    background-color: #E0FFFF;
    color: #1E90FF;
`

const CartItemAmount = styled.td`
    font-family: 'Inconsolata', monospace;
    text-align: center;
    color: #6AD391;
`

const TableWrapper = styled.div`
    width: 100%;
    max-height: calc(90vh - 4.2rem);
    overflow: auto;
`

const ItemSummary = styled.table`
    border-spacing: 0.5rem;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #CECECE;
`

const BillSummary = styled.div`
    margin: 3vh 3vw;
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: space-between;
`

const CartTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TotalAmount = styled.span`
    font-weight: 600;
    color: #6AD391
`

const CheckoutButton = styled.button`
    color: #FFF;
    text-transform: uppercase;
    border: none;
    align-self: flex-end;
    outline: none;
    font-weight: bold;
    font-size: 0.8rem;
    width: 30%;
    padding: 1rem 0;
    margin: 2rem 0;
    @media (max-width: 768px) {
        margin: 1.2rem 0;
        width: 65%;
    }
    transition: all 0.3s ease-in;
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 15px 4px #6ADF91;
    }
    background-color: #6AD391;
`

const mapStateToProps = state => (
    { 
        cartItems: getCartState(state),
        items: getItemsState(state),
        totalAmount: getTotalAmount(state)
    }
)

const mapDispatchToProps = {
    setItemQuantity
}

class Cart extends React.Component {

    clearCart = () => {
        Object.keys(this.props.cartItems).forEach( (key, index) => {
            this.props.setItemQuantity(key, 0)
        })
    }

    render = () => {
        let cartItemsList = this.props.cartItems;
        let itemsList = this.props.items;

        return (
            <CartWrapper> 
                <SectionHeading>Cart</SectionHeading>
                <TableWrapper>
                <ItemSummary>
                    <thead>
                        <tr>
                            <TableHeading></TableHeading>
                            <TableHeading>Qty</TableHeading>
                            <TableHeading>Amt</TableHeading>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.keys(cartItemsList).map( (itemId, i) => {
                        let amount = cartItemsList[itemId] * itemsList[itemId].price;
                        return cartItemsList[itemId] > 0 ? (                        
                        <CartItem key={i}>
                            <CartItemTitle>{itemsList[itemId].title}</CartItemTitle>
                            <CartItemQuantity>{cartItemsList[itemId]}</CartItemQuantity>
                            <CartItemAmount>₹{amount.toFixed(2)}</CartItemAmount>
                        </CartItem>)
                        : null })}
                    </tbody>
                </ItemSummary>
                </TableWrapper>
                <BillSummary>
                    <CartTotal>
                        <span>Total</span><TotalAmount>₹{this.props.totalAmount.toFixed(2)}</TotalAmount>
                    </CartTotal>
                    <CheckoutButton onClick={this.clearCart}>Check out  →</CheckoutButton>
                </BillSummary>
                
            </CartWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

