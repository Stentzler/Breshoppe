import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 72px;
  padding: 0 4%;

  box-shadow: 0 2px 2.5px -2.5px gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .nav-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 26px;
  }

  h1 {
    cursor: pointer;
    font-size: 24px;
  }

  nav {
    ul {
      font-size: 16px;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;

      li {
        cursor: pointer;
      }
    }
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.8s;

    position: absolute;
    padding: 16px 0 0 0;
    background-color: #fff;

    opacity: 0;
    top: -120px;
  }

  .dropdown-menu li {
    &:hover {
      color: #666;
    }
  }

  .btn-container {
    position: relative;
    height: 100%;

    font-size: 16px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;

    button {
      transition: all 0.4s;

      &:hover {
        background-color: var(--secondary);
        opacity: 0.9;
        color: var(--black);
      }
    }

    button.btn-light {
      background-color: transparent;
      font-size: 17px;
      color: var(--support);

      &:hover {
        color: var(--black);
      }
    }

    button.btn-meusProdutos {
      margin-left: 10px;
    }
  }

  svg {
    transform: translateY(3px);
  }

  .cart-icon {
    font-size: 26px;
    transform: translateY(-1px);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: rgba(4, 5, 46, 0.8);
    }
  }

  .cart-count {
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 0 4px;
    border-radius: 50%;

    background-color: var(--secondary);
    color: #f31511;
    font-weight: 600;

    z-index: 10;
  }

  .mobile {
    display: none;
    cursor: pointer;
  }

  .mobile-menu {
    display: none;
  }

  /* Modal popUp */

  .modal_container {
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    justify-content: center;
    align-items: center;
  }

  .modal_container.mostrar {
    display: flex;
  }

  .modal {
    background-color: var(--white);
    width: 50%;
    min-width: 300px;
    padding: 40px;
    border: 10px solid;
    box-shadow: 0 0 0 10px var(--white);
    position: relative;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .close {
    position: absolute;
    top: -30px;
    right: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid var(--white);
    background-color: #0a1e32;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    font-size: 1.2em;
  }

  .modal .mostrar {
    animation: modal 0.3s;
  }

  .login-modal {
    width: 50%;
    margin: 0 auto;
    padding: 12px 0;
  }

  @media (max-width: 964px) {
    .mobile {
      display: inherit;

      font-size: 28px;
      transform: translateY(0);

      transition: all 0.3s;

      z-index: 10;

      &:hover {
        color: rgba(4, 5, 46, 0.8);
      }
    }

    //overlay dark
    .mobile-menu {
      display: none;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 2000;
      justify-content: center;
      align-items: center;
    }

    .mobile-menu.mostrar {
      display: flex;
    }

    .mobile-ul {
      background-color: var(--white);
      width: 80%;
      height: 80vh;
      min-width: 300px;
      padding: 40px;
      border: 10px solid;
      box-shadow: 0 0 0 10px var(--white);
      position: relative;
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10%;
    }

    .mobile-ul li {
      font-size: 22px;
      cursor: pointer;
    }

    .mobile-close {
      font-size: 32px;
      position: absolute;
      top: 12px;
      left: 14px;
    }

    .mobile-menu.active {
      display: inherit;
    }

    .btn-container {
      gap: 22px;
    }
    nav {
      display: none;
    }
    button {
      display: none;
    }

    .close,
    .login-modal {
      display: inherit;
    }
  }
`;

export const InputHolder = styled.div`
  position: relative;
  width: 100%;
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
