import {Counter} from "./components/Counter";
import {Search} from "./components/Seacrh";
import {List} from './components/List';
import { Button } from "./components/commons/Button";

const Dashboard = () => {
  return(
    <>
      <Counter/>
      <Search/>
      <List/>
      <Button/>
    </>
  );
};

export default Dashboard;
