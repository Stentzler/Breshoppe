import { StyledFilter } from "./styles";
import { ImWoman } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { GiArmoredPants } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { useContext } from "react";
import { FilterContext } from "../../providers/filtro";

export const Filter = () => {
  const { filterGender, filterCategory } = useContext(FilterContext);

  return (
    <StyledFilter>
      <section>
        <div>
          <ImWoman />
          <button
            onClick={() => {
              filterGender("Feminino");
              filterCategory("");
            }}
          >
            Feminino
          </button>
        </div>

        <div>
          <FaTshirt />
          <button
            onClick={() => {
              filterCategory("Camisetas");
              filterGender("Feminino");
            }}
          >
            Camisetas
          </button>
        </div>

        <div>
          <GiArmoredPants />
          <button
            onClick={() => {
              filterCategory("Calças");
              filterGender("Feminino");
            }}
          >
            Calças
          </button>
        </div>

        <div>
          <GiRunningShoe />
          <button
            onClick={() => {
              filterCategory("Calçados");
              filterGender("Feminino");
            }}
          >
            Calçados
          </button>
        </div>
      </section>

      <section>
        <div>
          <IoIosMan />
          <button
            onClick={() => {
              filterGender("Masculino");
              filterCategory("");
            }}
          >
            Masculino
          </button>
        </div>

        <div>
          <FaTshirt />
          <button
            onClick={() => {
              filterCategory("Camisetas");
              filterGender("Masculino");
            }}
          >
            Camisetas
          </button>
        </div>

        <div>
          <GiArmoredPants />
          <button
            onClick={() => {
              filterCategory("Calças");
              filterGender("Masculino");
            }}
          >
            Calças
          </button>
        </div>

        <div>
          <GiRunningShoe />
          <button
            onClick={() => {
              filterCategory("Calçados");
              filterGender("Masculino");
            }}
          >
            Calçados
          </button>
        </div>
        <hr />
      </section>
    </StyledFilter>
  );
};
