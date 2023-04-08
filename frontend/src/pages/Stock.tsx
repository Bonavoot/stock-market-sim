import StockChart from "../components/StockChart";
import { Balances } from "./Balance.type";

const Stock = ({ balance }: Balances) => {
  return <StockChart />;
};

export default Stock;
