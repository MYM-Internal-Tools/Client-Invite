import  { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import '../../App.css';

interface Item {
  id: string;
  name: string;
}

const item: Item = {
  id: uuidv4(),
  name: 'Clean the house',
};

const item2: Item = {
  id: uuidv4(),
  name: 'Wash the car',
};

function DraggableList() {
  const [text, setText] = useState('');
  const [state, setState] = useState({
    todo: {
      title: 'Todo',
      items: [item, item2],
    },
    'in-progress': {
      title: 'In Progress',
      items: [],
    },
    done: {
      title: 'Completed',
      items: [],
    },
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
  
    const { source, destination } = result;
  
    // Check if source and destination are valid and not null or undefined
    if (!source || !destination) {
      return;
    }
  
    const itemCopy: Item = { ...state[source.droppableId].items[source.index] };
  
    setState((prev) => {
      const newState = { ...prev };
      newState[source.droppableId].items.splice(source.index, 1);
      newState[destination.droppableId].items.splice(destination.index, 0, itemCopy);
      return newState;
    });
  };

  const addItem = () => {
    const newItem: Item = {
      id: uuidv4(),
      name: text,
    };
  
    setState((prev) => ({
      ...prev,
      todo: {
        title: 'Todo',
        items: [newItem, ...prev.todo.items],
      },
    }));
  
    setText('');
  };
  

  return (
    <div className="sap">
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addItem}>Add</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => (
          <div key={key} className="column">
            <h3>{data.title}</h3>
            <Droppable droppableId={key}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-col">
                  {data.items.map((el, index) => (
                    <Draggable key={el.id} index={index} draggableId={el.id}>
                      {(provided, snapshot) => (
                        <div
                          className={`item ${snapshot.isDragging && 'dragging'}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {el.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default DraggableList;
