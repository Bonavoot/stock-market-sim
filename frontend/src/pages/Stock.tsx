import StockChart from "../components/StockChart";
import { Balances } from "./Balance.type";
import StockList from "../components/StockList";
import "/src/Stock.css";

const Stock = ({ balance }: Balances) => {
  return (
    <div className="stock">
      <StockChart />
      <StockList />
    </div>
  );
};

export default Stock;
