import { Container, InputHolder, SelectHolder } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CardMeusProdutos = ({ product, setCurrentItem, currentItem, schema }) => {
  const { products, productAdded, setProductAdded } =
    useContext(ProductsContext);
  const { id, name, price, category, gender, image } = product;

  const { register } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(e) {
    e.preventDefault();

    const editedObj = {
      name: document.getElementById("edit-name").value,
      price: +document.getElementById("edit-price").value,
      image: document.getElementById("edit-image").value,
      image2: document.getElementById("edit-image2").value,
      gender: document.getElementById("edit-gender").value,
      size: document.getElementById("edit-size").value,
      category: document.getElementById("edit-category").value,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@Breshopee:token")
        )}`,
      },
    };

    api
      .patch(`/products/${currentItem}`, editedObj, config)
      .then((res) => {
        toast.success("Produto Editado!", {
          autoClose: 1500,
        });
        closeEditModal();
        setProductAdded(!productAdded);
      })
      .catch((error) =>
        toast.error("Ocorreu um erro!", {
          autoClose: 1500,
        })
      );
  }

  function deleteProduct() {
    const idToRemove = currentItem;
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@Breshopee:token")
        )}`,
      },
    };

    api
      .delete(`/products/${idToRemove}`, config)
      .then((res) => {
        toast.success("Produto Removido!", {
          autoClose: 1500,
        });
        setProductAdded(!productAdded);
      })
      .catch((err) =>
        toast.error("Não foi possível remover seu", {
          autoClose: 1500,
        })
      );

    closeDeleteModal();
  }

  function openDeleteModal() {
    const modal = document.getElementById("deleteModal");
    modal.classList.add("mostrar");
    setCurrentItem(id);
  }

  function openEditModal() {
    const modal = document.getElementById("editModal");
    modal.classList.add("mostrar");

    const productsArr = [...products];

    const [itemToEdit] = productsArr.filter((item) => item.id === +id);

    document.getElementById("edit-name").value = itemToEdit.name;
    document.getElementById("edit-price").value = itemToEdit.price;
    document.getElementById("edit-image").value = itemToEdit.image;
    document.getElementById("edit-image2").value = itemToEdit.image2;
    document.getElementById("edit-gender").value = itemToEdit.gender;
    document.getElementById("edit-category").value = itemToEdit.category;
    document.getElementById("edit-size").value = itemToEdit.size;

    setCurrentItem(id);
  }

  function closeDeleteModal() {
    const modal = document.getElementById("deleteModal");
    modal.classList.remove("mostrar");
  }

  function closeEditModal() {
    const modal = document.getElementById("editModal");
    modal.classList.remove("mostrar");
  }

  const handleDeleteProductModalClose = (e) => {
    if (e.target.classList[0] === "modal_container") {
      closeDeleteModal();
    }
  };

  const handleEditProductModalClose = (e) => {
    if (e.target.classList[0] === "modal_container") {
      closeEditModal();
    }
  };

  return (
    <>
      <Container>
        <p className="product_name">#{id}</p>
        <div className="div_img">
          <img alt={name} src={image}></img>
        </div>
        <div className="list_name_preco">
          <p className="list_name">{name}</p>
          <p className="list_preco">R$ {Number(price).toFixed(2)}</p>
        </div>

        <p className="list_endereco">
          {category}/{gender}
        </p>

        <button className="delete">
          <FiTrash2 onClick={openDeleteModal} />
        </button>

        <button className="edit">
          <HiOutlinePencil onClick={openEditModal} />
        </button>

        {/* Modal Delete */}
        <div
          id="deleteModal"
          className="modal_container"
          onClick={(e) => handleDeleteProductModalClose(e)}
        >
          <div className="modal" id="delete-modal">
            <button id="btn-close" className="close" onClick={closeDeleteModal}>
              <RiCloseLine />
            </button>
            <p>Deseja mesmo excluir o item de id {currentItem}?</p>
            <button
              type="submit"
              className="btn-delete-modal"
              onClick={deleteProduct}
            >
              Ok
            </button>
          </div>
        </div>

        {/* Modal Editar */}
        <div
          id="editModal"
          className="modal_container"
          onClick={(e) => handleEditProductModalClose(e)}
        >
          <div className="modal" id="edit-container">
            <button
              id="btn-close-edit"
              className="close"
              onClick={closeEditModal}
            >
              <RiCloseLine />
            </button>

            <form className="edit-form">
              <InputHolder className="edit-name">
                <input {...register("name")} type="text" id="edit-name" />
                <label className="label-name">Nome do produto</label>
              </InputHolder>

              <InputHolder className="edit-price">
                <input
                  {...register("price")}
                  type="text"
                  className="input-price"
                  id="edit-price"
                />
                <label className="label-price">Valor</label>
              </InputHolder>

              <InputHolder>
                <input
                  {...register("image1")}
                  type="text"
                  className="input-url"
                  id="edit-image"
                />
                <label className="label-url">URL da imagem</label>
              </InputHolder>

              <InputHolder>
                <input
                  {...register("image2")}
                  type="text"
                  className="input-url2"
                  id="edit-image2"
                />
                <label className="label-url">URL da imagem 2</label>
              </InputHolder>

              <InputHolder>
                <input
                  {...register("size")}
                  type="text"
                  className="input-size"
                  id="edit-size"
                />
                <label className="label-size">Tamanho</label>
              </InputHolder>

              <SelectHolder>
                <select
                  {...register("gender")}
                  defaultValue="Feminino"
                  id="edit-gender"
                >
                  <option className="option-category">Feminino</option>
                  <option className="option-category">Masculino</option>
                </select>

                <select
                  {...register("category")}
                  defaultValue="Camisetas"
                  id="edit-category"
                >
                  <option className="option-category">Camisetas</option>
                  <option className="option-category">Calças</option>
                  <option className="option-category">Calçados</option>
                </select>
              </SelectHolder>

              <button
                type="submit"
                className="login-modal"
                onClick={(e) => onSubmit(e)}
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </Container>
      <hr className="hr"></hr>
    </>
  );
};

export default CardMeusProdutos;
