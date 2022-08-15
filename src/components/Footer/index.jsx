import {Container} from './styles';
import {FaInstagram, FaTwitter, FaYoutube, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <Container>
      <div className='footer-content'>
        <p>&copy;2022 Breshoppe LTDA Todos os direitos reservados.</p>
        <div className='footer-icons'>
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
          <FaYoutube />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
