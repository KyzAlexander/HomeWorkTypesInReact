import "./App.css";

import React, { useContext, useState } from "react";

// const ThemeContext = React.createContext({
//   them: "light",
//   ChangeThem: function ChangeThem() {},
// });
// function App() {
//   const [them, setThem] = useState("light");
//   const ContextValue = {
//     them: them,
//     ChangeThem: function ChangeThem() {
//       setThem((prevState) => {
//         return prevState === "light" ? "dark" : "light";
//       });
//     },
//   };

//   return (
//     <ThemeContext.Provider value={ContextValue}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton(props) {
//   const context = useContext(ThemeContext);

//   return (
//     <div
//       style={{ backgroundColor: context.them === "light" ? "black" : "red" }}
//     >
//       <button
//         onClick={function HandleClick() {
//           context.ChangeThem();
//         }}
//       >
//         Themed Button
//       </button>
//     </div>
//   );
// }

function App() {
  return <div className='App'></div>;
}

export default App;
