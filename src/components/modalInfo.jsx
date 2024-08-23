import { motion } from "framer-motion";
const ModalInfo = ({visible, message, onClose }) => {
    if (!visible) return null;
  return (
    <motion.div
    className="notification-success"
    initial={{opacity: 0, y: -70}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    >

    <div className="modal-overlay">
        <div>
            <p>{message}</p>
        </div>
            <button onClick={onClose} className="close-btn-success" >X</button>
    </div>
    </motion.div>
  );
};
export default ModalInfo;