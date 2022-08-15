import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 50px;
  height: 62px;
  background-color: var(--black);

  svg {
    cursor: pointer;
  }

  .footer-content {
    height: 100%;
    padding: 0 4%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 14px;
      color: #d9dbe1;
    }

    .footer-icons {
      display: flex;
      gap: 10px;

      color: #fff;
      font-size: 24px;
    }
  }
`;
