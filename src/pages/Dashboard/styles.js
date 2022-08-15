import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 4%;
  height: 100%;
  min-height: calc(100vh - 216px);
  max-width: 1800px;

  @media (max-width: 964px) {
    height: calc(32rem + 14vh);
  }

  @media (min-width: 1800px) {
    margin: 0 8%;
  }

  /* Modal popUp */

  .hr {
    width: 100%;
    margin-left: -8px;
    background-color: #ddd;
  }

  h3 {
    padding: 10px 0;
  }

  .modal_container {
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 11;
    justify-content: center;
    align-items: center;
  }

  .modal_container.mostrar {
    display: flex;
  }

  .modal {
    height: 90%;
    background-color: var(--white);
    width: 50%;
    min-width: 300px;
    padding: 20px;
    border: 10px solid;
    box-shadow: 0 0 0 10px var(--white);
    position: relative;
    border-radius: 5px;
  }

  .cadastrarForm {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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

  .modal.mostrar {
    animation: modal 0.3s;
  }

  .login-modal {
    transition: all 0.4s;

    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }
  }
`;

export const ProdutosCadastro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;

  p {
    font-weight: 500;
    font-size: 1.9rem;

    @media (max-width: 964px) {
      font-size: 1.4rem;
    }
  }

  button {
    width: 208px;
    height: 40px;
    margin-right: 20%;
    &:hover {
      background-color: var(--secondary);
      opacity: 0.9;
      color: var(--black);
    }

    svg {
      transform: translateY(4px);
    }
    @media (max-width: 964px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9rem;
      margin-right: 0;
      height: 2.25rem;
    }
  }

  .add {
    transform: translate(0%, 15%);

    @media (max-width: 964px) {
      transform: translateY(-2px);
    }
  }
`;

export const BarraDePesquisa = styled.div`
  margin-top: 34px;
  position: relative;
  display: flex;

  input {
    width: 320px;
    height: 44px;
    border-radius: 8px;
    border: none;
    text-align: left;
    padding-left: 40px;
    border: solid 1px gray;
  }
  .lupa {
    position: absolute;
    top: 50%;
    transform: translate(80%, -45%);
  }
`;

export const ContainerProdutos = styled.div`
  border: #53687e solid 1px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: #f9fafb;
`;

export const InfoDeProdutos = styled.div`
  display: flex;
  background-color: #f9fafb;
  height: 44px;
  gap: 12px;
  color: #53687e;
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .id {
    width: 126px;
    text-align: left;
  }

  .nome {
    width: 120px;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .editar {
    width: 100%;
    padding-right: 22px;
    text-align: right;
  }

  @media (max-width: 964px) {
    .endereco {
      display: none;
    }
  }
`;

export const ListaDeProdutos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  padding-right: 0;
  gap: 22px;

  p {
    font-size: smaller;
  }

  .div_img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
  }

  img {
    width: 64px;
    height: 64px;
    padding: 3px;
    margin-left: 10px;
    border-radius: 50%;
    border: solid 1px gray;
  }

  .list_id {
    width: 60px;
    display: flex;
  }

  .list_img_name {
    width: 800px;
    display: flex;
  }

  .list_name_preco {
    padding-left: 12px;

    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    width: 100%;
  }

  .list_name {
    text-align: left;
  }

  .list_preco {
    color: #53687e;
    text-align: left;
  }

  .list_endereco {
    padding-right: 25px;
  }

  button.delete {
    font-size: 24px;
    color: #53687e;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    transition: all 0.3s;

    transform: translateY(1.3px);

    &:hover {
      color: #fc3358;
      background-color: #e3e3e3;
    }
  }

  button.edit {
    font-size: 24px;
    color: #53687e;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    transition: all 0.3s;

    transform: translateY(1.3px);
    &:hover {
      color: #1bbf4c;
      background-color: #e3e3e3;
    }
  }

  @media (max-width: 964px) {
    .list_endereco {
      display: none;
    }
  }
`;

export const InputHolder = styled.div`
  position: relative;
  width: 90%;
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

  margin: -18px 0 10px 0;

  select {
    font-size: 15px;
    background-color: transparent;
    outline: none;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 4px 2px;
  }
`;
