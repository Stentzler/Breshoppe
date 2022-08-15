import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  z-index: 101;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: 964px) {
    /* width: 300px; */
  }
`;

const animationFromSide = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px)
}

to {
  opacity: 1;
  transform: translateX(0px)
}
`;

const animationFromAbove = keyframes`
from {
  opacity: 0;
  transform: translateY(-50px)
}

to {
  opacity: 1;
  transform: translateY(0px)
}
`;

export const Content = styled.div`
  width: 50%;
  animation: ${animationFromSide} 1s;
  justify-content: center;

  overflow-y: auto;
  @media (max-width: 964px) {
    width: 100%;
    animation: ${animationFromAbove} 1s;
  }
`;

export const SideImage = styled.div`
  width: 50%;
  height: 100vh;

  img {
    /* width: 100%; */
    /* height: 100vh; */
  }

  @media (max-width: 964px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 25.5%;

    margin-top: 5%;
    margin-bottom: 3%;
  }

  @media (max-width: 964px) {
    img {
      width: 24%;
      margin-top: 4%;
      margin-bottom: 2%;
    }
  }
  @media (max-width: 600px) {
    width: 100%;

    img {
      width: 30%;
      margin-top: 10%;
      margin-bottom: 6%;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  height: calc(23.8rem + 14.8%);
  margin: auto;

  padding-top: 1.625rem;

  border-radius: 20px;
  background-color: var(--white);

  form {
    width: 70%;
  }

  @media (max-width: 964px) {
    width: 90%;
    height: calc(27rem + 12.5%);

    padding-top: 8%;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: calc(25rem + 12%);

    padding-top: 8%;
  }
`;

export const InputHolder = styled.div`
  position: relative;
  width: 80%;
  margin: auto;

  label {
    position: absolute;
    top: 7px;
    left: 0.15rem;
    color: var(--support);
    transition: 0.4s;
    font-size: 0.8rem;

    pointer-events: none;
  }

  input {
    outline: none;
    text-align: left;
    border: none;
    border-bottom: 1px solid var(--secondary);

    width: 100%;

    padding: 5px;

    background: var(--white);
    transition: 0.3s;

    color: var(--black);
  }
  input:focus {
    border-bottom: 1px solid #1a73e8;
    transition: 0.3s;
  }

  input:focus ~ label,
  input:not([value='']) ~ label {
    top: -0.625rem;
    left: -0.1rem;
    color: #1a73e8;
    font-size: 0.6vw;
    padding-left: 3px;
    padding-right: 3px;
    transition: 0.4s;
  }

  @media (max-width: 964px) {
    label {
      top: 3px;
      left: 0.1rem;
    }

    input:focus ~ label,
    input:not([value='']) ~ label {
      top: -0.875rem;
      left: -0.05rem;
      font-size: 0.55rem;
      padding-left: 3px;
      padding-right: 3px;
      transition: 0.4s;
    }
  }
`;

export const DualContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: center;

  section + section {
    margin-left: 25px;
  }
`;

export const HalfHolder = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 7px;
    left: 0.15rem;
    color: var(--support);
    transition: 0.4s;
    font-size: 0.8rem;

    pointer-events: none;
  }

  input {
    outline: none;
    text-align: left;
    border: none;
    border-bottom: 1px solid var(--secondary);

    width: 100%;

    padding: 5px;

    background: var(--white);
    transition: 0.3s;

    color: var(--black);
  }
  input:focus {
    border-bottom: 1px solid #1a73e8;
    transition: 0.3s;
  }

  input:focus ~ label,
  input:not([value='']) ~ label {
    top: -0.625rem;
    left: -0.1rem;
    color: #1a73e8;
    font-size: 0.7vw;
    padding-left: 3px;
    padding-right: 3px;
    transition: 0.4s;
  }

  input:not(:focus) ~ label {
    color: var(--support);
  }

  @media (max-width: 964px) {
    label {
      top: 3px;
      left: 0.1rem;
    }

    input:focus ~ label,
    input:not([value='']) ~ label {
      top: -0.875rem;
      left: -0.05rem;
      font-size: 0.55rem;
      padding-left: 3px;
      padding-right: 3px;
      transition: 0.4s;
    }
  }
`;

export const ErrorHolder = styled.div`
  color: red;
  font-size: 0.48rem;
  height: 2.3rem;
  padding-top: 0.25rem;

  @media (max-width: 964px) {
    height: 2.2rem;
    font-size: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  button {
    padding: 0.775rem 30%;
    color: var(--white);
    background: var(--primary);

    margin: auto;

    transition: all 0.4s;

    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }

    @media (max-width: 964px) {
      padding: 0.75rem 6rem;

      width: 80%;
      display: flex;
      justify-content: center;
    }
  }
`;
