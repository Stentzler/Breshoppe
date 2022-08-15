import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";
import {
  Container,
  DesktopSideImages,
  ImageContainer,
  InfoButtonContainer,
  InfoDescContainer,
  InfoNameContainer,
  InfoPriceContainer,
  InformationContainer,
  InfoShippingContainer,
  MobileImageDisplay,
  MobileNameDisplay,
  SideImageContainer,
} from "./styles";
import { quotes } from "../../assets/dummyQuotes";
import { BsCartPlusFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/auth";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Produto = () => {
  const [product, setProduct] = useState();
  const [active, setActive] = useState(true);
  const [currentImage, setCurrentImage] = useState(product?.image);
  const [quote] = useState(quotes[Math.floor(Math.random() * 10)]);

  const { products } = useContext(ProductsContext);
  const { cart, addToCart } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);

  const params = useParams();

  useEffect(() => {
    setProduct(products.find((element) => element.id.toString() === params.id));
  }, [products]);

  useEffect(() => {
    setCurrentImage(product?.image);
  }, [product]);

  function toCart(item) {
    if (!loggedIn) {
      toast.error("Você precisa estar logado!", {
        autoClose: 1500,
      });
    } else {
      if (cart.some((element) => element.id === item.id)) {
        toast.error("Este produto já está em seu carrinho!", {
          autoClose: 1500,
        });
      } else {
        addToCart(item);

        toast.success("Produto adicionado ao carrinho!", {
          autoClose: 1500,
        });
      }
    }
  }

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    564: { items: 2 },
  };

  return (
    <Container>
      <DesktopSideImages>
        {product?.image && (
          <SideImageContainer>
            <img
              src={product.image}
              alt={product.name}
              className={`${active ? "active" : null} ${
                product.category === "Calçados" ? "shoesFormat" : null
              }`}
              onMouseEnter={() => {
                setActive(true);
                setCurrentImage(product.image);
              }}
            />
          </SideImageContainer>
        )}
        {product?.image2 && (
          <SideImageContainer>
            <img
              src={product.image2}
              alt={product.name}
              className={`${active ? null : "active"} ${
                product.category === "Calçados" ? "shoesFormat" : null
              } `}
              onMouseEnter={() => {
                setActive(false);
                setCurrentImage(product.image2);
              }}
            />
          </SideImageContainer>
        )}
      </DesktopSideImages>
      <MobileNameDisplay> {product?.name} </MobileNameDisplay>
      <MobileImageDisplay
        shoesSchema={product?.category === "Calçados" ? true : false}
      >
        <AliceCarousel
          // infinite
          disableButtonsControls
          responsive={responsive}
          items={[
            <img
              src={product?.image}
              onDragStart={handleDragStart}
              alt={product?.name}
            />,
            <img
              src={product?.image2}
              onDragStart={handleDragStart}
              alt={product?.name}
            />,
          ]}
        />
      </MobileImageDisplay>
      <ImageContainer
        shoesSchema={product?.category === "Calçados" ? true : false}
      >
        {currentImage && (
          <img
            src={currentImage}
            alt=""
            className={product?.category === "Calçados" ? "shoesFormat" : null}
          />
        )}
      </ImageContainer>
      <InformationContainer>
        <InfoNameContainer> {product?.name} </InfoNameContainer>
        <hr />
        <InfoPriceContainer>
          {product?.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </InfoPriceContainer>
        <InfoButtonContainer>
          <button onClick={() => toCart(product)}>
            <BsCartPlusFill /> Adicionar ao carrinho
          </button>
        </InfoButtonContainer>
        <InfoShippingContainer>
          <TbTruckDelivery /> FRETE GRÁTIS
        </InfoShippingContainer>
        <InfoDescContainer>Tamanho: {product?.size}</InfoDescContainer>
      </InformationContainer>
    </Container>
  );
};

export default Produto;
