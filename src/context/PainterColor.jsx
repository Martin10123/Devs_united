import { useState, createContext } from "react";

export const colors = [
  { name: "rosado", hex: "#ffa6c9" },
  { name: "naranja", hex: "#FF865C" },
  { name: "amarillo", hex: "#FFEA5C" },
  { name: "verde", hex: "#00DA76" },
  { name: "azul", hex: "#0096CE" },
  { name: "morado", hex: "#800FFF" },
];

export const ColorsContext = createContext();

export const ColorsProvider = ({ children }) => {
  const [colorSelect, setColorSelect] = useState(colors[0]);

  return (
    <ColorsContext.Provider value={{ colorSelect, setColorSelect }}>
      {children}
    </ColorsContext.Provider>
  );
};
