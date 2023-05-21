import React, {useState, useEffect} from 'react';
import './MainProj1.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import plus from "./../../icons/Plus.svg"
import trash from "./../../icons/trash_bim.svg"
import Dots from "./../../icons/threeDot.svg"
import Popup from "./../Popup/Popup"



function MainProj({data, selectedProject}) {
 
  const [state, setState] = useState(data);
 
  useEffect(() => {
    setState(data);
  }, [data]);
  
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const openModal = (el) => {
    setSelectedElement(el);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const [editingTitle, setEditingTitle] = useState('');
 

  // useEffect(() => {
  //   setState((prevState) => {
  //     const newState = { ...prevState };
  //     newState[selectedProject.id] = {
  //       ...selectedProject,
  //       tabs: newState[selectedProject.id]?.tabs || [],
  //     };
  //     return newState;
  //   });
  // }, [selectedProject]);
  
  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }
    const itemCopy = {...state[source.droppableId].items[source.index]}
    setState(prev => {
      prev = {...prev}
      prev[source.droppableId].items.splice(source.index, 1)
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addState = () => {
    setState((prevState) => {
      const newState = { ...prevState };
      const newId = v4();
      newState[newId] = { title: `Column ${Object.keys(newState).length + 1}`, items: [] };
      return newState;
    });
  };


  const deleteState = (key) => {
    setState((prevState) => {
      const newState = { ...prevState };
      delete newState[key];
      return newState;
    });
  };


  // const addItem = () => {
  //   setState(prev => {
  //     return {
  //       ...prev,
  //       todo: {
  //         title: "Todo",
  //         items: [
  //           {
  //             id: v4(),
  //             name: v4()
  //           },
  //           ...prev.todo.items
  //         ]
  //       }
  //     }
  //   })

  //   setText("")
  // }

  const addItem = (key) => {
    setState((prevState) => {
      const newState = { ...prevState };
      newState[key].items = [
        {
          id: v4(),
          title: 'task'
        },
        ...newState[key].items
      ]
      return newState;
    });
  }
  function deleteItem(key, itemId) {
    setState((prevState) => {
      const newState = { ...prevState };
      const newItems = newState[key].items.filter((el) => el.id !== itemId);
      newState[key].items = newItems;
      return newState;
    });
  }


  const editItemTitle = (key, itemId, newTitle) => {
    setState(prevState => {
      const newState = { ...prevState };
      const item = newState[key].items.find(el => el.id === itemId);
      if (item) {
        item.title = newTitle;
      }
      return newState;
    });
  }

  const handleItemClick = (key, itemId) => {
    const newTitle = prompt("Enter a new title:");
    if (newTitle) {
      editItemTitle(key, itemId, newTitle);
    }
  }

  const editColumnTitle = (key, newTitle) => {
    const newState = { ...state };
    newState[key].title = newTitle;
    setState(newState);
  };

  const handleColumnTitleClick = (key) => {
    setEditingTitle(key);
  };

  const handleColumnTitleChange = (event) => {
    const newTitle = event.target.value;
    editColumnTitle(editingTitle, newTitle);
  };

  const handleItemTitleChange = (key, itemId, newTitle) => {
    setState((prevState) => {
      const newState = { ...prevState };
      const item = newState[key].items.find((el) => el.id === itemId);
      if (item) {
        item.title = newTitle;
      }
      return newState;
    });
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          const droppableId = key.toString();
          return(
            <div key={key} className={"column"}>
              
              <Droppable droppableId={droppableId}>
                
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      <div className="header_drop" >
                      {editingTitle === key ? (
                        <input
                        type="text"
                        value={data.title}
                        onChange={handleColumnTitleChange}
                        onBlur={() => setEditingTitle('')}
                        className='title_changer'
                        />
                        ) : (
                          <h3 onClick={() => handleColumnTitleClick(key)}>{data.title}</h3>
                        )}

                        <button className="delete-state" onClick={() => deleteState(key)}>
                        <img src={Dots} alt="delete icon" />
                      </button>
                      </div>
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                            //   console.log(snapshot)
                              return(
                                <>
                                  {/* {showModal && <Popup  closeModal={closeModal} />} */}
                                  {selectedElement && selectedElement.id === el.id && showModal && (
          <Popup closeModal={closeModal} element={selectedElement} />
        )}
                                  <div
                                    className={`item ${snapshot.isDragging && "dragging"}`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    // onClick={openModal}
                                  >
                                   <input
                                    type="text"
                                    className='title_changer'
                                    value={el.title}
                                    onChange={(event) => handleItemTitleChange(key, el.id, event.target.value)}
                                  />
                                  
                                  <button className="delete-state" onClick={() => deleteItem(key, el.id)}>
                                  <img src={trash} alt="delete icon" />
                                  </button>
                                  <div className="popup__place"
                                     onClick={() => openModal(el)}
                                  ></div>
                                  
                                </div>
                                </>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                      
                    </div>
                  )
                }}
                
              </Droppable>
              <div className={"add_item"}>
        {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)}/> */}
        <button className={"plus"} onClick={() => addItem(key)}><img src={plus} alt="plus" /></button>
        </div>
    </div>
          )
        })}
      </DragDropContext>
      <div className={"add_state"}>
       <button className={"plus"} onClick={addState}>
          <img src={plus} alt="plus" />
        </button>
        </div>
    </div>
  );
}

export default MainProj;

