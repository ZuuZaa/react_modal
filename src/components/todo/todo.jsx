import "./todo.css";
import { useState } from "react";
import Modal from "../modal";

const ToDo = (props) => {

  const [showModel, setShowModel] = useState(false);
  const deleteHandler = () => {
    setShowModel(true);
  }

  const closeModalHandler = () => {
    setShowModel(false);
  }

  return (
    <div className="card">
      <h1 className="title">{props.title}</h1>
      <p className="description">- {props.description}</p>
      <div className="btn-wrapper">
        <button className="delete-btn" onClick={deleteHandler}>delete</button>
      </div>
      {showModel && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    </div>
  );
};

export { ToDo };
