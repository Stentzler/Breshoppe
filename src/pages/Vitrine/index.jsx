import { useEffect, useState } from "react";
import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/ProductCard";
import api from "../../services/api";
import { FlexContainer, HeaderVitri, SectionVitrine } from "./styles";
import { useContext } from "react";
import { FilterContext } from "../../providers/filtro";

const Vitrine = () => {
  const [listproducts, setListproducts] = useState([]);
  const { filterOn, gender, category } = useContext(FilterContext);
  // const [category, setCategory] = useState('');
  // const [gender, setGender] = useState('');
  // const [filterOn, setFilterOn] = useState(false);

  // const filterCategory = category => {
  //   setCategory(category);
  //   setFilterOn(true);
  // };

  // const filterGender = gender => {
  //   setGender(gender);
  //   setFilterOn(true);
  // };

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setListproducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredCategory = listproducts.filter((product) => {
    if (gender && !category) {
      return product.gender === gender;
    } else if (category && !gender) {
      return product.category === category;
    } else {
      return product.category === category && product.gender === gender;
    }
  });

  return (
    <SectionVitrine>
      <HeaderVitri>
        <h2>Produtos</h2>
        <h4>O desapego de alguém, pode ser o seu renovo.</h4>
      </HeaderVitri>
      <Filter />
      <FlexContainer>
        {!filterOn
          ? listproducts &&
            listproducts.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))
          : filteredCategory.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        {filterOn && filteredCategory.length < 1 && (
          <h4>Nenhum Produto Encontrado...</h4>
        )}
      </FlexContainer>
    </SectionVitrine>
  );
};

export default Vitrine;
