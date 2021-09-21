import {useHistory} from 'react-router';

import Button from '../../components/commons/button';
import SearchTask from '../../components/searchTask';
import Counter from '../../components/counter/Counter';
import {ContainerWelcome, BoxButton} from '../../components/styleComponents';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const Welcome = () => {
  const {totalTask} = useFormCreatesListTask();
  let history = useHistory();
  
const onCreate = () => {
  history.push('/create')
};

const onEdit = () => {
  history.push('/edit')
};

  return(
    <ContainerWelcome>
      <h1>Bienvenidos</h1>
      <BoxButton>
        <span> ¿Que quieres hacer? </span>
        <div>
          <Button text="Crear Tarea" onClick={onCreate}/>
          <Button text="Editar Tarea" onClick={onEdit}/>
        </div>
      </BoxButton>
      <SearchTask/>
      <Counter totalTask={totalTask} />
    </ContainerWelcome>
  );
};

export default Welcome;
