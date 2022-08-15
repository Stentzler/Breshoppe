import {Container} from './styles';
import {ProductsContext} from '../../providers/products';
import {useContext, useState, useEffect} from 'react';
import CardCarousel from '../CardCarousel';

const Carousel = () => {
  const {products} = useContext(ProductsContext);

  const [firstProduct, setFirstProduct] = useState(0);
  const [secondProduct, setSecondProduct] = useState(1);
  const [thirdProduct, setThirdProduct] = useState(2);
  const [fourthProduct, setFourthProduct] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstProduct(prevItem =>
        prevItem + 4 >= products.length ? prevItem + 4 - products.length : prevItem + 4
      );

      setSecondProduct(prevItem =>
        prevItem + 4 >= products.length ? prevItem + 4 - products.length : prevItem + 4
      );

      setThirdProduct(prevItem =>
        prevItem + 4 >= products.length ? prevItem + 4 - products.length : prevItem + 4
      );

      setFourthProduct(prevItem =>
        prevItem + 4 >= products.length ? prevItem + 4 - products.length : prevItem + 4
      );
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [products]);

  return (
    <Container>
      {products[firstProduct] && (
        <CardCarousel key={firstProduct} product={products[firstProduct]} mobile='' />
      )}

      {products[secondProduct] && (
        <CardCarousel key={secondProduct} product={products[secondProduct]} mobile='mobile' />
      )}

      {products[thirdProduct] && (
        <CardCarousel key={thirdProduct} product={products[thirdProduct]} mobile='mobile' />
      )}

      {products[fourthProduct] && (
        <CardCarousel key={fourthProduct} product={products[fourthProduct]} mobile='mobile' />
      )}
    </Container>
  );
};

export default Carousel;
