import Header from "./components/Header";
import { Home } from "./components/pages/Home";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

export default App;
