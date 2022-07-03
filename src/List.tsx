import { listCountState } from "./selectors/listCountState";
import { useRecoilValue } from "recoil";

const List = () => {
  const list = useRecoilValue(listCountState);
  console.log(list);
  return (
    <div>
      <ul>
        {list &&
          list.map((lap) => {
            return <li>{lap.toFixed(3)}</li>;
          })}
      </ul>
    </div>
  );
};

export default List;
