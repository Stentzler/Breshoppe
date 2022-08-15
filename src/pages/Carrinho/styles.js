import styled from 'styled-components';

export const MainSection = styled.section`
  min-height: calc(100vh - 184px);

  .btn-voltar {
    margin-top: 15%;
    font-size: 20px;

    transition: all 0.4s;

    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }
  }
`;

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 0 4%;
  display: flex;
  justify-content: center;

  @media (max-wdith: 964px) {
    width: 500px;
  }
`;

export const CartEmpty = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CartContainer = styled.div`
  @media (max-width: 964px) {
    width: 100%;
  }
`;

export const Cart = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 964px) {
    width: 100%;
  }
`;

export const Products = styled.div`
  .container_product {
    padding-bottom: 20px;
    padding-top: 20px;
    width: 700px;
  }

  img {
    overflow: hidden;
    max-width: 160px;
    max-height: 120px;
  }

  .name_button {
    padding-left: 25px;
  }

  @media (max-width: 964px) {
    width: 100%;

    .name_button {
      padding-left: 0;
    }
  }
`;

export const Total = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;

  .total {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
  }

  .impost {
    text-align: left;
    font-size: 14px;
    color: var(--support);
  }

  @media (max-width: 964px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    .container_product {
      width: 400px;
      background-color: red;
    }

    .impost {
      max-width: 326px;
      text-overflow: clip;
    }
  }
`;

export const AddProduct = styled.div`
  display: flex;
  margin-top: 16px;
  button {
    width: 220px;
    display: flex;
    justify-content: flex-end;
  }

  svg {
    transform: translate(-850%, 12%);
    font-size: 25px;
    color: #fff;
    z-index: 1;
  }
`;
