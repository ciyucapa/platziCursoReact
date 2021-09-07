import FormCreates from './FormCreates';
import useFormCreatesListTask from '../../hook/useFormCreatesListTask';

const CreateTask = () => {
    const hook = useFormCreatesListTask();
    console.log(hook)
    return <FormCreates {...hook} />
};

export default CreateTask;