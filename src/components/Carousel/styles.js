import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 22px;
  height: 360px;
  width: 100%;
  background-color: #f9f9f9;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;

  div {
    height: 100%;
    width: 240px;
    background-color: #fff;
    border: 1.5px solid #000;
  }

  @media (max-width: 964px) {
    .mobile {
      display: none;
    }
  }
`;
