import React, { useState } from "react";
import styles from "./styles.module.scss";
import ModalGeneral from "../Modal";

function Menu() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "MILANO", price: "30,000 VND", img: "milano.jpg" },
    { id: 2, name: "APEROL SPRITZ", price: "30,000 VND", img: "aperol.jpg" },
    { id: 3, name: "CUBA LIBRE", price: "30,000 VND", img: "cuba.jpg" },
    { id: 4, name: "GIN FIZZ", price: "30,000 VND", img: "gin.jpg" },
    { id: 5, name: "BLOODY MARY", price: "30,000 VND", img: "bloody.jpg" },
    { id: 6, name: "Phomai đậy Nga", price: "125,000 VND", img: "phomai.jpg" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.menuContainer}>
      <h1>Thực Đơn</h1>
      <div className={styles.menuGrid}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={styles.menuItem}
            onClick={() => handleOpenModal(item)}
          >
            <img
              src={`images/${item.img}`}
              alt={item.name}
              className={styles.menuImage}
            />
            <div className={styles.menuInfo}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ModalGeneral
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          configModal={{ title: "Chi Tiết Món Ăn", type: "VIEW" }}
        >
          <div className={styles.modalContent}>
            <h2>{selectedItem?.name}</h2>
            <p>Giá: {selectedItem?.price}</p>
            <img
              src={`images/${selectedItem?.img}`}
              alt={selectedItem?.name}
              className={styles.modalImage}
            />
          </div>
        </ModalGeneral>
      )}
    </div>
  );
}

export default Menu;
