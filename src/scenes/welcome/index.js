import Button from '../../components/commons/button';
import { useHistory } from 'react-router';
import SearchTask from '../../components/searchTask';
import Counter from '../../components/Counter';

import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const Welcome = () => {
  const {totalTask} = useFormCreatesListTask();
  let history = useHistory();
  
const onCreate = () => {
  history.push('/create')
};

  return(
    <>
      <h1>Bienvenidos</h1>
      <div> ¿Que quieres hacer? </div>
      <Button text="Crear Tarea" onClick={onCreate}/>
      <SearchTask/>
      <Counter totalTask={totalTask} />
    </>
  );
};

export default Welcome;
