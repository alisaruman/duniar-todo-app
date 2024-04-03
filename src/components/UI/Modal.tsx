import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  description: string;
  return?: boolean;
}

const Modal = (props: Props) => {
  const navigate = useNavigate();

  const returnHandler = () => {
    navigate("/");
  };

  return (
    <dialog id={props.id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="py-4">{props.description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
            {props.return && (
              <button className="btn btn-primary" onClick={returnHandler}>
                Return
              </button>
            )}
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
