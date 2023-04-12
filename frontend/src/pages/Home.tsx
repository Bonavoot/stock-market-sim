import BalanceHistoryChart from "../components/BalanceHistoryChart";
import StockList from "../components/StockList";
import { Balances } from "./Balance.type";
import "/src/Home.css";
const Home = ({ balance }: Balances) => {
  return (
    <div className="home">
      <div className="balance-chart">
        <BalanceHistoryChart balance={balance} />
      </div>
      <StockList />
    </div>
  );
};

export default Home;
