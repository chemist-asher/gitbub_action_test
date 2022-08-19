import { useCallback, useState } from "react";
import { Button } from "@ample-labs/ample-ui";

const CountView = () => {
  const [num, setNum] = useState(0);

  const clickIncrease = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  const clickDecrease = useCallback(() => {
    setNum(num - 1);
  }, [num]);

  return (
    <div>
      <div>React Test Code</div>
      <div>{num}</div>
      <Button onClick={clickIncrease}>+1</Button>
      <Button onClick={clickDecrease}>-1</Button>
    </div>
  );
};

export default CountView;
