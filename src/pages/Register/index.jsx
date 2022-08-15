import {
  Container,
  Content,
  ErrorHolder,
  FormContainer,
  DualContainer,
  HalfHolder,
  InputHolder,
  LogoContainer,
  ButtonContainer,
  SideImage,
} from './styles';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {Link, Redirect, useHistory} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import sideImage from '../../assets/sideImage.svg';
import {useContext, useState} from 'react';
import api from '../../services/api';
import {toast} from 'react-toastify';
import {AuthContext} from '../../providers/auth';
import {UserContext} from '../../providers/user';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [token] = useState(JSON.parse(localStorage.getItem('@Breshopee:token')) || '');

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    surname: yup.string().required('Campo obrigatório'),
    username: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .matches(/^(?=.{8,})/, 'Senha deve ter pelo menos 8 caracteres'),
    city: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    neighborhood: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório').matches(/^\d+$/, 'Apenas números'),
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const history = useHistory();

  const {onLogin} = useContext(AuthContext);
  const {setCurrentUser} = useContext(UserContext);

  const onSubmitFunction = data => {
    const newUser = {
      email: email,
      password: password,
      username: username,
      firstName: name,
      lastName: surname,
      address: {
        city: city,
        street: street,
        neighborhood: neighborhood,
        number: number,
      },
    };

    api
      .post('/register', newUser)
      .then(response => {
        const token = response.data.accessToken;
        localStorage.setItem('@Breshopee:token', JSON.stringify(token));
        localStorage.setItem('@Breshopee:user', JSON.stringify(response.data.user));

        setCurrentUser(response.data.user);

        toast.success('Cadastro feito com sucesso!', {
          autoClose: 1000,
        });

        setTimeout(() => {
          onLogin();
          history.push('/');
        }, 2000);
      })
      .catch(error => {
        console.log(error);
        toast.error('Email já cadastrado!', {
          autoClose: 3000,
        });
      });
  };

  if (token) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </LogoContainer>
        <FormContainer>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmitFunction)}>
            <DualContainer>
              <section>
                <HalfHolder>
                  <input
                    type='text'
                    {...register('name')}
                    name='name'
                    value={name}
                    autoComplete='nope'
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                  <label htmlFor='name'> Nome </label>
                </HalfHolder>
                <ErrorHolder> {errors.name?.message} </ErrorHolder>
              </section>
              <section>
                <HalfHolder>
                  <input
                    {...register('surname')}
                    type='text'
                    name='surname'
                    autoComplete='nope'
                    value={surname}
                    onChange={e => {
                      setSurname(e.target.value);
                    }}
                  />
                  <label htmlFor='surname'> Sobrenome </label>
                </HalfHolder>
                <ErrorHolder>{errors.surname?.message}</ErrorHolder>
              </section>
            </DualContainer>
            <InputHolder>
              <input
                {...register('username')}
                type='text'
                name='username'
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
                autoComplete='off'
              />
              <label htmlFor='username'> Nome de usuário </label>
            </InputHolder>
            <ErrorHolder>{errors.username?.message}</ErrorHolder>
            <InputHolder>
              <input
                {...register('email')}
                type='email'
                name='email'
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                autoComplete='off'
              />
              <label htmlFor='email'> Email </label>
            </InputHolder>
            <ErrorHolder>{errors.email?.message}</ErrorHolder>
            <InputHolder>
              <input
                {...register('password')}
                type='password'
                name='password'
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                autoComplete='new-password'
              />
              <label htmlFor='password'> Senha </label>
            </InputHolder>
            <ErrorHolder>{errors.password?.message}</ErrorHolder>
            <DualContainer>
              <section>
                <HalfHolder>
                  <input
                    {...register('city')}
                    type='text'
                    name='city'
                    value={city}
                    onChange={e => {
                      setCity(e.target.value);
                    }}
                    autoComplete='nope'
                  />
                  <label htmlFor='first-city'> Cidade </label>
                </HalfHolder>
                <ErrorHolder>{errors.city?.message}</ErrorHolder>
              </section>
              <section>
                <HalfHolder>
                  <input
                    {...register('neighborhood')}
                    type='text'
                    name='neighborhood'
                    autoComplete='nope'
                    value={neighborhood}
                    onChange={e => {
                      setNeighborhood(e.target.value);
                    }}
                  />
                  <label htmlFor='neighborhood'> Bairro </label>
                </HalfHolder>
                <ErrorHolder>{errors.neighborhood?.message}</ErrorHolder>
              </section>
            </DualContainer>
            <DualContainer>
              <section>
                <HalfHolder>
                  <input
                    {...register('street')}
                    type='text'
                    name='street'
                    value={street}
                    onChange={e => {
                      setStreet(e.target.value);
                    }}
                    autoComplete='nope'
                  />
                  <label htmlFor='street'> Rua </label>
                </HalfHolder>
                <ErrorHolder>{errors.street?.message}</ErrorHolder>
              </section>
              <section>
                <HalfHolder>
                  <input
                    {...register('number')}
                    type='text'
                    name='number'
                    autoComplete='off'
                    value={number}
                    onChange={e => {
                      setNumber(e.target.value);
                    }}
                  />
                  <label htmlFor='number'> Número </label>
                </HalfHolder>
                <ErrorHolder>{errors.number?.message}</ErrorHolder>
              </section>
            </DualContainer>
            <ButtonContainer>
              <button type='submit'> Cadastrar </button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </Content>
      <SideImage>
        <img src={sideImage} alt='' />
      </SideImage>
    </Container>
  );
};

export default Register;
