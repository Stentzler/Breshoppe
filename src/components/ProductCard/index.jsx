import {StyledCard} from './styles';
import {Link} from 'react-router-dom';

export const ProductCard = ({product}) => {
  return (
    <StyledCard>
      <Link to={`/vitrine/${product?.id}`}>
        <img src={product?.image} alt={product?.name} className='teste' />
      </Link>
      <div className='info-container'>
        <h5>{product?.name}</h5>
        <div className='add '>
          <p>R$ {Number(product?.price).toFixed(2)}</p>
          <Link to={`/vitrine/${product?.id}`}>
            <button>Ver produto</button>
          </Link>
        </div>
      </div>
    </StyledCard>
  );
};
