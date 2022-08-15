import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4%;
  margin-top: 36px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  p {
    color: var(--support);
    font-size: 14px;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    h2 {
      font-size: 24px;
    }
  }

  .faq {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    width: 100%;

    p.description-faq {
      max-width: 60%;
      text-align: left;
      margin-bottom: 34px;
    }
  }

  .display-row {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    gap: 50px;
  }

  .faqs {
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;

    h4 {
      width: 100%;
      font-size: 14px;
      text-align: left;
    }
  }
  .p-faq {
    width: 100%;
    text-align: justify;
    font-size: 12px;
    line-height: 1.4;
  }

  .redirect-products {
    cursor: pointer;
    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }
  }

  @media (max-width: 964px) {
    .faqs {
      width: 42%;
    }

    .display-row {
      gap: 16px;
      justify-content: space-around;
    }

    .p-faq {
      min-height: 90px;
    }
  }
`;
