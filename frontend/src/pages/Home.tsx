import BalanceHistoryChart from "../components/BalanceHistoryChart";
import { Balances } from "./Balance.type";
import "/src/Home.css";
const Home = ({ balance }: Balances) => {
  return (
    <div>
      <h1>{balance}</h1>
      <BalanceHistoryChart />
    </div>
  );
};

export default Home;
