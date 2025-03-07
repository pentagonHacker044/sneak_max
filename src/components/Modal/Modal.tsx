import { Dispatch } from "react";
import "./Modal.css";

type TBoolean = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

const Modal: React.FC<TBoolean> = ({ open, setOpen, children }) => {
  return (
    <div
      className={open ? "modal active" : "modal"}
      onClick={() => setOpen(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="closeBtn" onClick={() => setOpen(false)}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/external-cross-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
            alt="external-cross-user-interface-tanah-basah-detailed-outline-tanah-basah"
          />
        </button>
      </div>
    </div>
  );
};
export default Modal;
