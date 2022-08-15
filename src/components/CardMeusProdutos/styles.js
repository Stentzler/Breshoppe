import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
    height: 200px;
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

  .btn-delete-modal {
    width: 80px;
    font-size: 22px;
    margin: auto;
    border-radius: 8px;
    color: #444;
    background-color: #c4c4c4;

    &:hover {
      color: #fc3358;
      background-color: #e3e3e3;
    }
  }

  #delete-modal {
    max-width: 400px;
    max-height: 300px;
  }

  #edit-container {
    height: 90%;
    justify-content: space-between;
    padding: 20px;
  }

  .edit-form {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .edit-name {
    width: 80%;
  }
  .edit-price {
    width: 80%;
  }

  .input-price {
    width: 100%;
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

export const SelectHolder = styled.div`
  width: 80%;
  font-size: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 18px;

  margin-bottom: 8px;

  select {
    font-size: 15px;
    background-color: transparent;
    outline: none;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 4px 2px;
  }
`;
