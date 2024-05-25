import { useState } from "react";
import "./App.css";
import Card from "./assets/components/Card";
import { nanoid } from "nanoid";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "olma",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ratione repellendus aperiam voluptas neque iure nostrum modi illo praesentium amet reiciendis animi, veniam ex rem et laboriosam vel consequatur quaerat! ",
    },
  ]);

  const [cardData, SetCardData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    let payload = { ...cardData, id };
    console.log(payload);
    product.push(payload);
    setProduct([...product]);
    event.target.reset();
  };

  const handeleChange = (event) => {
    const { name, value } = event.target;
    SetCardData({ ...cardData, [name]: value });
  };

  const deleteCard = (id) => {
    const new_card = product?.filter((item) => item.id !== id);
    setProduct([...new_card]);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const editCard = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div class="container">
        <form id="contact" onSubmit={handleSubmit}>
          <fieldset>
            <input
              placeholder="Fruit name enter..."
              type="text"
              tabindex="1"
              name="name"
              required
              autofocus
              onChange={handeleChange}
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder=" Your message about the product "
              tabindex="5"
              name="desc"
              onChange={handeleChange}
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit">
              Add new product card
            </button>
          </fieldset>
        </form>
      </div>

      {product?.map((item, index) => (
        <>
          <Card
            product={item}
            deleteProduct={deleteCard}
            editProduct={editCard}
          />
        </>
      ))}

      <Rodal visible={modalVisible} onClose={closeModal} height={300}>
        <div class="container">
          <form id="contact" onSubmit={handleSubmit}>
            <fieldset>
              <input
                placeholder="Enter fruit name"
                type="text"
                tabindex="1"
                name="name"
                required
                autofocus
                onChange={handeleChange}
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder=" Your message about the product "
                tabindex="5"
                name="desc"
                onChange={handeleChange}
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit">
                Save
              </button>
            </fieldset>
          </form>
        </div>
      </Rodal>
    </>
  );
}

export default App;
