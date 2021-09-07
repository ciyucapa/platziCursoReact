import PropTypes from 'prop-types';

import {Assets} from '../../utils/assents'
import {ContainerList, ImageList } from '../../components/styleComponents';

const ListTask = (props) => (
    <>
        {props.newsListTask.map((task) => (
            <ContainerList>
                <ImageList src={Assets.image.checked}/>
                <div key={task.name}>{task.name}</div>
            </ContainerList>
        ) )
        }
    </>
);

ListTask.propTypes = {
    newsListTask: PropTypes.array,
};

ListTask.defaultProps = {
    newsListTask:[],
};

export default ListTask;