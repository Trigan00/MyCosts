import "./CostItem.css";
import Card from "../UI/Card";
import CostDate from "./CostDate";

function CostItem(props) {
  return (
    <li>
      <Card className="cost-item">
        <div className="cost-item__description">
          <CostDate date={props.date} />
          <h2>{props.description}</h2>
        </div>
        <div className="cost-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

export default CostItem;
