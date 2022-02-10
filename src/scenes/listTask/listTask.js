import PropTypes from 'prop-types';

import {Assets} from '../../utils/assents'
import {BoxList, ImageList, BoxListTask } from '../../components/styleComponents';

const ListTask = (props) => (
    <BoxListTask>
        <h1>Lista de Tareas</h1>
        <div>
            {props.newsListTask.map((task) => (
                <BoxList key={task.text}>
                    <div>{task.text}</div>
                    <ImageList src={Assets.image.closet} onClick={props.deleteListTask} />
                </BoxList>
            ) )
            }
        </div>
    </BoxListTask>
);

ListTask.propTypes = {
    newsListTask: PropTypes.array,
    deleteListTask: PropTypes.func,
};

ListTask.defaultProps = {
    newsListTask:[],
    deleteListTask: () => {},
};

export default ListTask;