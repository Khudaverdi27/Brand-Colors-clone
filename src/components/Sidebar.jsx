import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <Link to={"/"}>
            Brand<b>Colors</b>
          </Link>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <IoMdClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over 2 million pageviews. There are now over 600 brands
          with 1600 colors and the collection is always growing.
        </p>
      </ReactModal>
    </>
  );
}
