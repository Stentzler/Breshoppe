import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {Container, InputHolder, ErrorHolder} from './styles';
import {
  RiArrowDownSLine,
  RiShoppingCartLine,
  RiLoginBoxLine,
  RiCloseLine,
  RiLogoutBoxLine,
} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useHistory} from 'react-router-dom';
import {useContext, useState} from 'react';
import api from '../../services/api';
import {toast} from 'react-toastify';
import {AuthContext} from '../../providers/auth';
import {UserContext} from '../../providers/user';
import {CartContext} from '../../providers/cart';
import {FilterContext} from '../../providers/filtro';

const Header = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const {loggedIn, onLogin, onLogout} = useContext(AuthContext);
  const {setCurrentUser, deleteCurrentUser} = useContext(UserContext);
  const {cart} = useContext(CartContext);
  const {filterGender, filterCategory, resetFilter} = useContext(FilterContext);

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema), reValidateMode: 'onSubmit'});

  function onSubmit(data) {
    api
      .post('/login', data)
      .then(res => {
        const token = res.data.accessToken;
        localStorage.setItem('@Breshopee:token', JSON.stringify(token));
        localStorage.setItem('@Breshopee:user', JSON.stringify(res.data.user));

        onLogin();

        setCurrentUser(res.data.user);

        toast.success('Login feito com sucesso!', {
          autoClose: 1500,
        });

        if (window.innerWidth <= 964) {
          toggleMenu();
        }

        closeModal();
      })
      .catch(_ => {
        return toast.error('Email ou senha inválidos', {
          autoClose: 1500,
        });
      });
  }

  function handleLogout() {
    onLogout();
    deleteCurrentUser();
    localStorage.removeItem('@Breshopee:token');
    localStorage.removeItem('@Breshopee:user');
    history.push('/');

    if (window.innerWidth <= 964) {
      toggleMenu();
    }
  }

  function handleClick(event) {
    event.stopPropagation();
    const active = event.currentTarget.className;
    const dropDown = document.getElementById(active);

    dropDown.style.opacity = '1';
    dropDown.style.top = 'inherit';
  }

  function handleMouseOut(event) {
    event.stopPropagation();
    const target = event.currentTarget;

    target.style.opacity = '0';
    target.style.top = '-320px';
  }

  function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');

    menu.classList.toggle('active');
  }

  function handleRedirectHome() {
    history.push('/');
  }

  function handleRedirectCart() {
    history.push('/carrinho');
  }
  function handleRedirectRegister() {
    history.push('/register');
  }
  function handleRedirectDashboard() {
    toggleMenu();
    history.push('/dashboard');
  }

  function openModal() {
    toggleMenu();

    const modal = document.getElementById('loginModal');
    modal.classList.add('mostrar');
  }

  function closeModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('mostrar');
  }

  const redirectShowAll = () => {
    history.push('/vitrine');
    resetFilter();
  };

  const feminineShirt = () => {
    history.push('/vitrine');
    filterCategory('Camisetas');
    filterGender('Feminino');
  };

  const femininePants = () => {
    history.push('/vitrine');
    filterCategory('Calças');
    filterGender('Feminino');
  };

  const feminineShoes = () => {
    history.push('/vitrine');
    filterCategory('Calçados');
    filterGender('Feminino');
  };

  const feminineAll = () => {
    history.push('/vitrine');
    filterCategory('');
    filterGender('Feminino');
  };

  const masculineShirt = () => {
    history.push('/vitrine');
    filterCategory('Camisetas');
    filterGender('Masculino');
  };

  const masculinePants = () => {
    history.push('/vitrine');
    filterCategory('Calças');
    filterGender('Masculino');
  };

  const masculineShoes = () => {
    history.push('/vitrine');
    filterCategory('Calçados');
    filterGender('Masculino');
  };

  const masculineAll = () => {
    history.push('/vitrine');
    filterCategory('');
    filterGender('Masculino');
  };

  const handleMenuModalClose = e => {
    if (e.target.classList[0] === 'mobile-menu') {
      toggleMenu();
    }
  };

  const HandleLoginModalClose = e => {
    if (e.target.id === 'loginModal') {
      closeModal();
    }
  };

  return (
    <Container>
      <div className='nav-container'>
        <h1 onClick={handleRedirectHome}>Breshopee</h1>
        <nav>
          <ul>
            <li className='feminino' onClick={handleClick}>
              Feminino
              <RiArrowDownSLine />
              <ul className='dropdown-menu feminino' id='feminino' onMouseLeave={handleMouseOut}>
                <li onClick={() => feminineShirt()}>Camisetas</li>
                <li onClick={() => femininePants()}>Calças</li>
                <li onClick={() => feminineShoes()}>Calçados</li>
                <li onClick={() => feminineAll()}>Todos</li>
              </ul>
            </li>
            <li className='masculino' onClick={handleClick}>
              Masculino
              <RiArrowDownSLine />
              <ul className='dropdown-menu masculino' id='masculino' onMouseLeave={handleMouseOut}>
                <li onClick={() => masculineShirt()}>Camisetas</li>
                <li onClick={() => masculinePants()}>Calças</li>
                <li onClick={() => masculineShoes()}>Calçados</li>
                <li onClick={() => masculineAll()}>Todos</li>
              </ul>
            </li>
            <li onClick={() => redirectShowAll()}>Produtos</li>
          </ul>
        </nav>
      </div>
      <div className='btn-container'>
        <RiShoppingCartLine className='cart-icon' onClick={handleRedirectCart} />
        <small className='cart-count'>{cart.length}</small>

        {!loggedIn && (
          <>
            <button className='btn-light' onClick={openModal}>
              <RiLoginBoxLine className='login-icon' />
              Login
            </button>
            <button onClick={handleRedirectRegister}>Cadastre-se</button>
          </>
        )}
        {loggedIn && (
          <>
            <button className='btn-light' onClick={handleLogout}>
              <RiLogoutBoxLine className='login-icon' />
              Logout
            </button>
            <button className='btn-meusProdutos' onClick={handleRedirectDashboard}>
              Meus Produtos
            </button>
          </>
        )}
        <GiHamburgerMenu className='mobile' onClick={toggleMenu} />
      </div>

      <div className='mobile-menu' onClick={e => handleMenuModalClose(e)}>
        <ul className='mobile-ul'>
          <RiCloseLine className='mobile-close' onClick={toggleMenu} />
          <li
            className='mobile-li'
            onClick={() => {
              toggleMenu();
              redirectShowAll();
            }}
          >
            Produtos
          </li>
          <li
            className='mobile-li'
            onClick={() => {
              toggleMenu();
              feminineAll();
            }}
          >
            Feminino
          </li>
          <li
            className='mobile-li'
            onClick={() => {
              toggleMenu();
              masculineAll();
            }}
          >
            Masculino
          </li>
          {!loggedIn && (
            <li className='mobile-li' onClick={openModal}>
              Login
            </li>
          )}
          {!loggedIn && (
            <li
              className='mobile-li'
              onClick={() => {
                handleRedirectRegister();
                toggleMenu();
              }}
            >
              Cadastrar-se
            </li>
          )}
          {loggedIn && (
            <li className='mobile-li' onClick={handleRedirectDashboard}>
              Meus Produtos
            </li>
          )}
          {loggedIn && (
            <li className='mobile-li' onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </div>

      <div id='loginModal' className='modal_container' onClick={e => HandleLoginModalClose(e)}>
        <div className='modal'>
          <button id='btn-close' className='close' onClick={closeModal}>
            <RiCloseLine />
          </button>

          <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
            <InputHolder>
              <input
                {...register('email')}
                type='text'
                className='input-email'
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <label className='label-email'>Email</label>
            </InputHolder>
            <ErrorHolder>{errors.email?.message}</ErrorHolder>

            <InputHolder>
              <input
                {...register('password')}
                type='password'
                className='input-pass'
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
              <label className='label-pass'>Senha</label>
            </InputHolder>
            <ErrorHolder>{errors.password?.message}</ErrorHolder>
            <button type='submit' className='login-modal'>
              Login
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Header;
