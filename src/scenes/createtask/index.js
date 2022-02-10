import FormCreates from './FormCreates';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const CreateTask = () => {
    const hook = useFormCreatesListTask();
    return <FormCreates {...hook} />
};

export default CreateTask;