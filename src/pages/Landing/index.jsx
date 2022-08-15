import { Container } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";
import Carousel from "../../components/Carousel";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  function handleRedirectProdutos() {
    history.push("/vitrine");
  }

  return (
    <Container>
      <section className="intro">
        <h2>O desapego de alguém pode ser o seu renovo</h2>
        <p>Os modelos mais desejados do momento. Confira!</p>
      </section>

      <Carousel />

      <button className="redirect-products" onClick={handleRedirectProdutos}>
        Veja mais produtos
        <BsArrowRightShort />
      </button>

      <section className="faq">
        <h2>FAQs</h2>
        <p className="description-faq">
          Tudo que você precisa saber sobre o produto. Não consegue encontrar a
          resposta que procura? entre em contato com a nossa equipe.
        </p>
        <div className="display-row">
          <div className="faqs">
            <h4>Como são feitos os envios?</h4>
            <p className="p-faq">
              Os envios são feitos pelos Correios. Quando as entregas saem, você
              recebe o código de rastreamento automaticamente no e-mail
              cadastrado.
            </p>
          </div>

          <div className="faqs">
            <h4>As peças são originais?</h4>
            <p className="p-faq">
              Com o fim de assegurar a originalidade de sua peça e de cada
              produto em nosso site, todos os produtos são sujeitos a um
              processo de autenticidade feito por uma equipe de especialistas
              que analisa os detalhes distintivos de cada marca.
            </p>
          </div>

          <div className="faqs">
            <h4>Qual o prazo de entrega da Breshopee?</h4>
            <p className="p-faq">
              "O prazo de entrega dependerá da localização, as opções
              disponíveis são PAC ou SEDEX."
            </p>
          </div>

          <div className="faqs">
            <h4>Quais as formas de pagamento?</h4>
            <p className="p-faq">
              O pagamento pode ser realizado à vista, por meio de Pix ou boleto,
              com até 10% de desconto, ou em até 10x sem juros no cartão de
              crédito (Visa, Mastercard, American Express e Elo).
            </p>
          </div>

          <div className="faqs">
            <h4>Qual a política de devolução?</h4>
            <p className="p-faq">
              O prazo para solicitação de devolução é de 7 (sete) dias corridos,
              contados a partir da data de recebimento do produto.
            </p>
          </div>

          <div className="faqs">
            <h4>Todos os produtos são usados?</h4>
            <p className="p-faq">
              Embora possuímos peças que nunca foram usadas, é importante notar
              que todas as peças são de segunda mão.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Landing;
