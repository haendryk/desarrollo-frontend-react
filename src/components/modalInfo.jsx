import { motion } from "framer-motion";
const ModalInfo = ({visible, message, onClose }) => {
    if (!visible) return null;
  return (
    <div className="modal-overlay">
    <motion.div
    className="notification-success"
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 0.5}}
    >

    <div>
        <div>
            <p>{message}</p>
        </div>
            <button onClick={onClose} className="close-btn-success" >X</button>
    </div>
    </motion.div>
    </div>
  );
};

export default ModalInfo;