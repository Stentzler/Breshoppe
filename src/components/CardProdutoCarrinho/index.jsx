import {Container, ProductName, NamePriceContainer} from './styles';
import {useContext} from 'react';
import {CartContext} from '../../providers/cart';

function CardProdutoCarrinho({name, image, price, productId}) {
  const {removeFromCart} = useContext(CartContext);

  return (
    <Container>
      <img alt={name} src={image}></img>

      <NamePriceContainer>
        <ProductName>
          <p>{name}</p>
          <span onClick={() => removeFromCart(productId)}>Remover</span>
        </ProductName>

        <p className='price'>R$ {Number(price).toFixed(2)}</p>
      </NamePriceContainer>
    </Container>
  );
}

export default CardProdutoCarrinho;
