import Footer from "./components/Footer";
import Header from "./components/Header";
import DrinkPage from "./pages/DrinkPage/index";
import ListCardDrinkPage from './pages/ListCardDrinkPage/index';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <ListCardDrinkPage></ListCardDrinkPage>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
