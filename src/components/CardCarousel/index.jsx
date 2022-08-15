import {Container} from './styles';

const CardCarousel = ({product, mobile}) => {
  return (
    <Container className={mobile}>
      <img src={product.image} alt={product.name} className='teste' />
      <h5 className='name'>{product.name}</h5>
      <p>R${Number(product.price).toFixed(2)}</p>
    </Container>
  );
};

export default CardCarousel;
