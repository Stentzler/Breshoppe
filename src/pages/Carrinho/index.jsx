import {
  ContainerEmpty,
  Container,
  CartEmpty,
  Cart,
  CartContainer,
  Products,
  Total,
  AddProduct,
  MainSection,
} from './styles';
import {IoAddOutline} from 'react-icons/io5';
import {useHistory} from 'react-router-dom';
import CardProdutoCarrinho from '../../components/CardProdutoCarrinho';
import {useState, useEffect, useContext} from 'react';
import {CartContext} from '../../providers/cart';
import {ProductsContext} from '../../providers/products';
import {toast} from 'react-toastify';

const Carrinho = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const {cart, clearCart} = useContext(CartContext);
  const {products} = useContext(ProductsContext);

  function handleRedirectVitrine() {
    history.push('/vitrine');
  }

  function totalValue() {
    const sum = cart.reduce((accumulator, cart) => accumulator + Number(cart.price), 0);
    setValue(sum);
  }

  function finalizarCompra() {
    let verificacao = true;

    cart.forEach(product => {
      let verificacaoIndividual = products.some(item => item.id === product.id);

      if (!verificacaoIndividual) {
        verificacao = false;
      }
    });

    if (!verificacao) {
      clearCart();

      return toast.error('Desculpe, Seu carrinho continha um produto indisponível!', {
        autoClose: 3000,
      });
    } else {
      toast.success('Obrigado por comprar com a gente!', {
        autoClose: 1500,
      });

      clearCart();
      history.push('/');
    }
  }

  useEffect(() => {
    totalValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <MainSection>
      {cart.length < 1 ? (
        <ContainerEmpty>
          <CartEmpty>
            <h3>Seu carrinho está vazio...</h3>
            <button className='btn-voltar' onClick={handleRedirectVitrine}>
              Voltar para vitrine
            </button>
          </CartEmpty>
        </ContainerEmpty>
      ) : (
        <Container>
          <CartContainer>
            <Cart>
              <p className='product'>Produtos</p>
              <p className='price'>Preço</p>
            </Cart>
            <hr />
            <Products>
              {cart.map((product, index) => (
                <CardProdutoCarrinho
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  productId={product.id}
                  key={index}
                />
              ))}
            </Products>

            <hr />

            <AddProduct>
              <button onClick={handleRedirectVitrine}>Adicionar mais produtos</button>
              <IoAddOutline />
            </AddProduct>

            <Total>
              <div className='total_impost'>
                <p className='total'>Total: R$ {value.toFixed(2)} </p>
                <p className='impost'>
                  **O imposto e o custo de envio serão calculados posteriormente
                </p>
              </div>
              <button onClick={finalizarCompra}>Finalizar Compra</button>
            </Total>
          </CartContainer>
        </Container>
      )}
    </MainSection>
  );
};

export default Carrinho;
