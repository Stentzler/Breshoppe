import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    overflow: hidden;

    max-width: 160px;
    max-height: 120px;
    border-radius: 15px;
  }

  .price {
    padding-left: 25px;
  }

  @media (max-width: 964px) {
    max-width: 100%;
    img {
      max-width: 70px;
      max-height: 70px;
    }
  }
`;

export const NamePriceContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  text-align: left;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;

  .price {
    padding: 0;
  }

  @media (max-width: 964px) {
    margin-left: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    max-width: 250px;
  }
`;

export const ProductName = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 964px) {
    padding: 0;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: rgb(120, 120, 120);
    cursor: pointer;
    transition: 0.4s;
  }

  span:hover {
    color: rgb(163, 159, 159);
    transition: 0.4s;
  }

  @media (max-width: 964px) {
    p {
      max-width: 220px;
    }
  }
`;
