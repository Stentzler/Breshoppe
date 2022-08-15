import {
  Container,
  ProdutosCadastro,
  BarraDePesquisa,
  InfoDeProdutos,
  ListaDeProdutos,
  ContainerProdutos,
  InputHolder,
  SelectHolder,
  ErrorHolder,
} from './styles';
import {RiCloseLine} from 'react-icons/ri';
import 'react-icons';
import {FiSearch} from 'react-icons/fi';
import {IoAddOutline} from 'react-icons/io5';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import api from '../../services/api';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../providers/user';
import {ProductsContext} from '../../providers/products';
import CardMeusProdutos from '../../components/CardMeusProdutos';
import {Redirect} from 'react-router-dom';

const Dashboard = () => {
  const {user} = useContext(UserContext);
  const {products, productAdded, setProductAdded} = useContext(ProductsContext);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(undefined);
  const [productImage, setProductImage] = useState('');
  const [productImage2, setProductImage2] = useState('');
  const [productSize, setProductSize] = useState('');

  const [currentItem, setCurrentItem] = useState(null);
  const [userProducts, setUserProducts] = useState(
    products.filter(product => product.owner === user.email)
  );
  const [input, setInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem('@Breshopee:token')) || '');

  useEffect(() => {
    setUserProducts(products.filter(product => product.owner === user.email));
  }, [products]);

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!').max(40, 'Max 40 caracteres'),
    price: yup
      .number('Formato incorreto. Ex: (25.99)')
      .required('Campo obrigatório!')
      .positive('Numero precisa ser positivo'),
    image: yup.string().url().required('Campo obrigatório!'),
    image2: yup.string().url().required('Campo obrigatório!'),
    size: yup.string().required('Campo obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema), reValidateMode: 'onSubmit'});

  function onSubmit(data) {
    data.owner = user.email;

    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('@Breshopee:token'))}`,
      },
    };

    api
      .post('/products', data, config)
      .then(res => {
        toast.success('Produto Cadastrado!', {
          autoClose: 1500,
        });

        closeModal();
        setProductAdded(!productAdded);
      })
      .catch(error =>
        toast.error('Ocorreu um erro!', {
          autoClose: 1500,
        })
      );
  }

  const filterProducts = input => {
    const newProductList = userProducts.filter(product =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts([...newProductList]);
  };

  function openModal() {
    const modal = document.getElementById('cadastrarModal');
    modal.classList.add('mostrar');
  }
  function closeModal() {
    const modal = document.getElementById('cadastrarModal');
    modal.classList.remove('mostrar');
  }

  const handleNewProductModalClose = e => {
    if (e.target.id === 'cadastrarModal') {
      closeModal();
    }
  };

  if (!token) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <ProdutosCadastro>
        <p>Produtos</p>
        <div>
          <button onClick={openModal}>
            <IoAddOutline className='add' /> &nbsp; Novo produto
          </button>
        </div>
      </ProdutosCadastro>

      <BarraDePesquisa>
        <FiSearch className='lupa'></FiSearch>

        <input
          placeholder='Faça sua busca aqui'
          value={input}
          onChange={e => {
            setInput(e.target.value);
            filterProducts(e.target.value);
          }}
        ></input>
      </BarraDePesquisa>

      <ContainerProdutos>
        <InfoDeProdutos>
          <p className='id'>ID</p>
          <p className='nome'>Nome</p>
          <p className='editar'>Editar</p>
        </InfoDeProdutos>
        <hr />

        {userProducts.length <= 0 ? (
          <h3>Nenhum produto cadastrado</h3>
        ) : input ? (
          filteredProducts.length > 0 ? (
            <ListaDeProdutos>
              {filteredProducts?.map(product => {
                const key = `${product.name} + ${product.id}`;
                return (
                  <CardMeusProdutos
                    product={product}
                    key={key}
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                    schema={schema}
                  />
                );
              })}
            </ListaDeProdutos>
          ) : (
            <h3>Nenhum produto encontrado...</h3>
          )
        ) : (
          <ListaDeProdutos>
            {userProducts?.map(product => {
              const key = `${product.name} + ${product.id}`;
              return (
                <CardMeusProdutos
                  product={product}
                  key={key}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                  schema={schema}
                />
              );
            })}
          </ListaDeProdutos>
        )}
      </ContainerProdutos>
      <div
        id='cadastrarModal'
        className='modal_container'
        onClick={e => handleNewProductModalClose(e)}
      >
        <div className='modal'>
          <button id='btn-close' className='close' onClick={closeModal}>
            <RiCloseLine />
          </button>

          <form className='cadastrarForm' onSubmit={handleSubmit(onSubmit)}>
            <InputHolder className='input-name'>
              <input
                {...register('name')}
                type='text'
                className='input-email'
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
              <label className='label-email'>Nome do produto</label>
            </InputHolder>
            <ErrorHolder>{errors.name?.message}</ErrorHolder>

            <InputHolder className='input-price'>
              <input
                {...register('price')}
                type='number'
                className='input-value'
                value={productPrice}
                onChange={e => setProductPrice(e.target.value)}
              />
              <label className='label-value'>Valor</label>
            </InputHolder>
            <ErrorHolder>{errors.price?.message}</ErrorHolder>

            <InputHolder>
              <input
                {...register('image')}
                type='text'
                className='input-url'
                value={productImage}
                onChange={e => setProductImage(e.target.value)}
              />
              <label className='label-url'>URL da imagem</label>
            </InputHolder>
            <ErrorHolder>{errors.image?.message}</ErrorHolder>

            <InputHolder>
              <input
                {...register('image2')}
                type='text'
                className='input-url2'
                value={productImage2}
                onChange={e => setProductImage2(e.target.value)}
              />
              <label className='label-url'>URL da imagem 2</label>
            </InputHolder>
            <ErrorHolder>{errors.image2?.message}</ErrorHolder>

            <InputHolder>
              <input
                {...register('size')}
                type='text'
                className='input-size'
                value={productSize}
                onChange={e => setProductSize(e.target.value)}
              />
              <label className='label-size'>Tamanho</label>
            </InputHolder>
            <ErrorHolder>{errors.size?.message}</ErrorHolder>

            <SelectHolder>
              <select {...register('gender')} defaultValue='Feminino'>
                <option className='option-category'>Feminino</option>
                <option className='option-category'>Masculino</option>
              </select>

              <select {...register('category')} defaultValue='Camisetas'>
                <option className='option-category'>Camisetas</option>
                <option className='option-category'>Calças</option>
                <option className='option-category'>Calçados</option>
              </select>
            </SelectHolder>

            <button type='submit' className='login-modal'>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
