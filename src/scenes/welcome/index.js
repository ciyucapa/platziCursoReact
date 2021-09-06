import Button from '../../components/commons/button';
import { useHistory } from 'react-router';

const Welcome = () => {
  let history = useHistory();
  
const onCreate = () => {
  history.push('/counter')
};

  return(
    <>
      <h1>Bienvenidos</h1>
      <div> ¿Que quieres hacer? </div>
      <Button text="Crear Tarea" onClick={onCreate}/>
    </>
  );
};

export default Welcome;
