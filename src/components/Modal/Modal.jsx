import Backdrop from "./Backdrop";
import Container from "./Container";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop />
            <Container isOpen={isOpen} onClose={onClose} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
