import StockChart from "./components/StockChart";
import "./App.css";

type Dates = {
  date: number;
  name: string;
};

const obj = {
  name: "joey",
  last: "b",
};

function App(props: Dates) {
  return <StockChart />;
}

export default App;
