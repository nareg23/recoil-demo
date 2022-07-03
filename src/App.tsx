import Timer from "./Timer";
import "./styles.css";
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";
import List from "./List";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div>
          <Timer />
        </div>
        <div>
          <List />
        </div>
      </div>
    </RecoilRoot>
  );
}
