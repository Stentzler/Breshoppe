import Header from "./components/Header";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import GlobalProvider from "./providers";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Routes />
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default App;
