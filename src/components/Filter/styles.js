import styled from 'styled-components';

export const StyledFilter = styled.div`
  width: 210px;
  margin: 0 4%;
  padding-bottom: 24px;
  position: sticky;
  top: 22px;
  border-radius: 8px;
  background-color: #fff;
  float: left;
  box-shadow: 1.5px 1.5px 2px #000;

  hr {
    background-color: var(--support);
  }

  div {
    width: 100%;
    color: var(--black);
    display: block;
    margin: 0 5%;
    padding: 2px;
  }

  button {
    background-color: white;
    border: none;
    color: var(--black);
    font-size: 18px;
    transition: all 0.5s;

    &:hover {
      text-decoration: underline;
    }
  }

  div:first-child {
    margin: 0 -10px;
  }
  div:nth-child(3) {
    margin: 0 -5px;
  }
  div:nth-child(4) {
    margin: 0 5px;
  }

  section {
    margin-top: 10%;
  }

  svg {
    font-size: 22px;
    transform: translateY(4px);
  }

  @media (max-width: 964px) {
    display: none;
  }
`;
