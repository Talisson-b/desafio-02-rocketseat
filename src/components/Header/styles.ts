import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 10px;
  z-index: 100;
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  padding-inline: 10rem;
  transition: box-shadow 0.3s ease;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const LocationCity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  font-size: 0.875rem;

  line-height: 1.3;

  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: 20px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.725rem;
    font-weight: bold;
    padding-block: 2px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
