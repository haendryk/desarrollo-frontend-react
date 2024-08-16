import { useEffect, useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(10);

  const handleContador1 = () => {
    setCount(count + 1);
  };

  const handleContador2 = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(12);
  }, []);

  useEffect(() => {
    if (count > 15) {
      alert("mayor a 15");
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("desmontado");
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleContador1}>Incrementar</button>
      <button onClick={handleContador2}>Decrementar</button>
    </>
  );
};

export default Contador;