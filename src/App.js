import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const initial_costs = [
  {
    id: "c1",
    date: new Date(),
    description: "Pen",
    amount: 10,
  },
  {
    id: "c2",
    date: new Date(),
    description: "T-shirt",
    amount: 45,
  },
  {
    id: "c3",
    date: new Date(),
    description: "MacBook",
    amount: 1200,
  },
];

function App() {
  const [costs, setCosts] = useState(initial_costs);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
