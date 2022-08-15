import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 240px;
  height: 315px;
  background-color: #fff;
  box-shadow: 1px 1px 2px #555;
  border: 1.5px solid #000;

  img {
    overflow: hidden;
    height: 80%;
    max-width: 100%;
  }

  h5 {
    font-size: 16px;
    padding: 0 8px;
    height: 26px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    display: inline-block;
    font-size: 14px;
    color: var(--support);
    text-align: left;
  }

  .add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
  }

  button {
    font-size: 14px;
    display: inline-block;
    background: #04052e;
    color: white;
    transition: all 0.4s;
    margin-bottom: 2px;

    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }
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
`;
