import styled from 'styled-components';

export const SectionHeading = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: #171F30;
    text-align: center;
    padding: 0.8rem 0.5rem;
    box-sizing: border-box;
    margin-bottom: 0;
    border-bottom: 1px solid #BEBEBE;
`

export const ItemTitle = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        max-width: 100px;
        font-size: 0.8rem;
    }
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ItemMeta = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.2rem;
`
export const TableHeading = styled.th`
    font-size: 0.8rem;
    color: #BBB;
    text-transform: uppercase;
`
export const IconSuccess = styled.div`
    box-sizing: border-box;
    display: flex;
    color: #FFF;
    align-self: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
        display: none;
    }
    background-color: rgb(0, 210, 144);
    border-radius: 50%;
    border-style: none;
    border-color: initial;
    border-image: initial;
    opacity: 0;
    transition: all 0.1s ease-in;
`