import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 2px #555;

  img {
    overflow: hidden;
    height: 80%;
    max-width: 100%;
  }

  h5 {
    font-size: 16px;
    padding: 0 8px;
    height: 28px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    color: var(--support);
    text-align: left;
    padding: 0 8px;
  }

  .teste {
    animation: show 2s;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .mobile {
    display: none;
  }
`;
