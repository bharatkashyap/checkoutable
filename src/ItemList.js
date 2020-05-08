import React from "react";
import { connect } from 'react-redux';
import { getItemsState, getCartState } from './selectors';
import { setItemQuantity } from './actions';

import styled from "styled-components"
import { SectionHeading, ItemTitle, ItemMeta, IconSuccess } from './styles';

const ItemWrapper = styled.div`
    width: 50%;
    border-right: 1px solid #AEAEAE;
`

const ItemsListWrapper = styled.div`
    height: calc(90vh - 4.2rem);
    overflow-y: scroll;
    overflow-x: hidden;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh 2vh;
`

const ItemOrder = styled.span`
    font-weight: 300;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: 0.5rem;
        min-width: 20px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    border-radius: 0.4rem;
    margin-right: 0.5rem;
    box-shadow: 0 0 2px 1px #CEECEE;
    background-color: #E0FFFF;
    color: #1E90FF;
    transition: all 0.2s ease-in;
`

const ItemPrice = styled.span`
    color: #6E6E6E;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
    margin-left: 2.1rem;
    margin-top: 0.2rem;
`

const ItemTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    margin-left: 2.1rem;
    margin-bottom: 0.8rem;
`

const QuantityButton = styled.button`
    border-radius: 1rem;
    font-weight: 300;
    border: 1px solid #CCC;
    background: #FFF;
    font-size: 1rem;
    color: ${props => props.type === 'increment' ? '#24BD1C' : '#777'};
    transition: all 0.1s ease-in;
    &:first-of-type {
        margin-right: 0.5rem;
    }
    &:last-of-type {
        margin-left: 0.5rem;
    }
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        border: 1px solid #999;
    }
`

const ItemQuantityInput = styled.input`
    width: 1.5rem;
    text-align: center;
    background-color: #FFF;
    color: #24BD1C;
    font-weight: 600;
    border: 1px solid #CCC;
    &:focus {
        outline: none;
    }
`

const mapStateToProps = state => (
    { 
        items: getItemsState(state),
        cartItems: getCartState(state)
     }
    )

const mapDispatchToProps = {
    setItemQuantity
}


class ItemList extends React.Component {

      handleSetItemQuantity = (itemId, value) => {

        if(isNaN(value) || value < 0) {
            return;
        }
        else this.props.setItemQuantity(itemId, value)
    }

    render = () => {
        let itemsList = this.props.items;
        let cartItemsList = this.props.cartItems;
        return (
            <ItemWrapper> 
                <SectionHeading>Items</SectionHeading>
                <ItemsListWrapper>
                {Object.keys(itemsList).map( (itemId, i) => {
                    return (
                    <Item key={i}>
                        <ItemMeta>
                            <ItemOrder className={cartItemsList[itemId] > 0 ? 'outlineSuccess' : ''}>{i+1}</ItemOrder>
                            <ItemTitleRow>
                                <ItemTitle>{itemsList[itemId].title}</ItemTitle>
                                <IconSuccess className={cartItemsList[itemId] > 0 ? 'visible' : ''}>✓</IconSuccess>
                            </ItemTitleRow>
                        </ItemMeta>
                        <ItemPrice>₹{itemsList[itemId].price.toFixed(2)}</ItemPrice>
                        
                        <QuantityWrapper>
                            <QuantityButton type='decrement' onClick = {e => this.handleSetItemQuantity(itemId, parseInt(e.target.nextElementSibling.value) - 1)}>-</QuantityButton>
                            <ItemQuantityInput  onChange = {e => this.handleSetItemQuantity(itemId, e.target.value)} value={cartItemsList[itemId]}> 
                            </ItemQuantityInput>
                            <QuantityButton type='increment' onClick = {e => this.handleSetItemQuantity(itemId, parseInt(e.target.previousElementSibling.value) + 1)}>+</QuantityButton>
                        </QuantityWrapper>
                    </Item>)
                })}
                </ItemsListWrapper>
            </ItemWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

