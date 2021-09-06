import Item from './commons/item';

const list = [
    {id: 1, text: "Estudiar platzi", completed: false},
    {id: 2, text: "Trabajar Itglobers", completed: false},
    {id: 3, text: "Jugar con sarai", completed: false}
]

const List = () => {
    return (
      <>
        {list.map(listas => (
            <Item key={listas.id} text={listas.text} />
        ))  }
      </>
    );
  };
  
  export default List;