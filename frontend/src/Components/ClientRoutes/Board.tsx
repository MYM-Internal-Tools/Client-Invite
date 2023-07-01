import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
// import './Board.css';
import Navbar from "../Home/Navbar";
import VerticalNav from "../Client/VerticalNav";

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


function Board() {

    const [text, setText] = useState('');
    const [state, setState] = useState({
        'to-do': {
            title: 'To do',
            items: [item, item2],
        },
        'in-progress': {
            title: 'In Progress',
            items: [],
        },
        'in-review': {
            title: 'In Review',
            items: [],
        },
        done: {
            title: 'Done',
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
            'to-do': {
                title: 'To do',
                items: [newItem, ...prev['to-do'].items],
            },
        }));

        setText('');
    };


    return (
        <div>
            <Navbar></Navbar>

            <div className="flex flex-row gap-5">
                <VerticalNav></VerticalNav>

                <div className="w-[1257px] h-[884px] relative bg-zinc-900 rounded-2xl border border-zinc-700">
                    <div className="w-[628px] h-20 left-0 top-0 absolute bg-zinc-900 rounded-tl-2xl border border-zinc-700">
                        <div className="left-[30px] top-[23px] absolute text-white text-[28px] font-bold">Tissu Tushar</div>
                        <div className="h-[42px] px-[15px] py-[5px] left-[498px] top-[19px] absolute bg-neutral-900 rounded-md justify-start items-center gap-[15px] inline-flex">
                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="text-center text-white text-[20px] font-medium">Edit</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[631px] h-20 left-[626px] top-0 absolute bg-zinc-900 border border-zinc-700 rounded-tr-lg">
                        <div className="left-[30px] top-[15px] absolute text-white text-[24px] font-bold">Chat</div>
                        <div className="left-[33px] top-[44px] absolute text-white text-[16px] font-normal leading-tight">You, Tushar, Om, Timeo</div>
                        <div className="w-[99px] h-[42px] left-[502px] top-[19px] absolute">
                            <div className="w-[42px] h-[42px] left-0 top-0 absolute" />
                            <div className="w-[42px] h-[42px] left-[57px] top-0 absolute" />
                        </div>
                        <div className="w-[631px] h-20 left-0 top-[-1px] absolute bg-zinc-900 border rounded-tr-lg border-zinc-700">
                            <div className="left-[30px] top-[18px] absolute text-white text-[20px] font-bold">Chat</div>
                            <div className="left-[30px] top-[42px] absolute text-slate-400 text-[16px] font-normal leading-tight">You, Tushar & Om</div>
                        </div>
                    </div>
                    <div className="w-[566px] h-[744px] left-[30px] top-[110px] absolute bg-neutral-900 rounded-lg border border-zinc-700">
                        <div className="w-[493px] h-[178px] left-[30px] top-[25px] absolute">

                            <div className="sap">
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <input className='bg-[#1E2125] text-white rounded-md p-1 w-48' type="text" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button className='text-white p-1 bg-blue-400 rounded-md px-5' onClick={addItem}>Add</button>
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

                        </div>
                        <div className="w-8 h-8 left-[510px] top-[25px] absolute" />
                        {/* <div className="w-[494px] left-[30px] top-[236px] absolute text-white text-[16px] font-light">This consist of developers</div> */}
                        <div className="left-[259px] top-[190px] absolute" />
                    </div>
                    <div className="w-[631px] h-[806px] left-[626px] top-[78px] absolute bg-neutral-900 rounded-br-2xl border border-zinc-700" />
                </div>
            </div>

        </div>
    );
}

export default Board;
