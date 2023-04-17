import { Link } from "react-router-dom";
import "/src/StockCard.css";
const StockCard = () => {
  return (
    <div className="stock-card">
      <Link to="/stock">
        <li>AAPL</li>
      </Link>
    </div>
  );
};

export default StockCard;
