import "./modal.css";

const Modal = (props) => {

    const cancelHandler = () => {
        props.onCancel();
    }
    const confirmHandler = () => {
        props.onConfirm();
    }
  return (
    <div class="modal">
      <div class="modal-content">
        <p class="modal-title">Are you sure you want to delete?</p>
        <button className="modal-cancel-btn" onClick={cancelHandler}>cancel</button>
        <button className="modal-confirm-btn" onClick={confirmHandler}>confirm</button>
      </div>
    </div>
  );
};

export { Modal };
