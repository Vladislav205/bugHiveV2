import React, { useState } from 'react';
import './style.css';
import plus from './../../icons/Plus.svg'
import {v4} from "uuid";

const ProjMenu = ({ projects, selectedProject, onProjectSelect }) => {
  const [data, setData] = useState(projects); // Используем хук useState для хранения состояния
  const [showInput, setShowInput] = useState(false); // Хранение состояния для отображения поля ввода
  const [newProjectName, setNewProjectName] = useState(''); // Хранение значения поля name

  const handleProjectSelect = (project) => {
    onProjectSelect(project);
  };

  const addEmptyElement = () => {
    // Проверяем, что поле name не пустое
    if (newProjectName.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    const newData = [...data]; // Создаем копию массива data
    const newElement = {
      id: v4(),
      name: newProjectName,
      tabs: [],
    };
    newData.push(newElement); // Добавляем новый пустой элемент в массив
    setData(newData); // Обновляем состояние data
    setNewProjectName(''); // Сбрасываем значение поля name после добавления элемента
    setShowInput(false); // Скрываем поле ввода после добавления элемента
  };

  const handleInputChange = (event) => {
    setNewProjectName(event.target.value);
  };

  const handleInputBlur = () => {
    if (newProjectName.trim() !== '') {
      addEmptyElement();
    } else {
      setShowInput(false);
    }
  };

  if (!Array.isArray(data)) {
    return <div>No projects available.</div>;
  }

  return (
    <div className="container">
      <div className="bloc-tabs">
        {data.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectSelect(project)}
            className={project.id === selectedProject?.id ? 'tabs active-tabs' : 'tabs'}
          >
            {project.name}
          </button>
        ))}
        {!showInput && (
          <button className={"plus_proj"} onClick={() => setShowInput(true)}>
            <img src={plus} alt="plus" />
          </button>
        )}
        {showInput && (
          <div className="new-project">
            <input
              type="text"
              placeholder="Enter project name"
              value={newProjectName}
              onChange={handleInputChange}
              onBlur={handleInputBlur} // Добавляем обработчик события onBlur
            />
            <button className={"plus_proj"} onClick={addEmptyElement}>
              <img src={plus} alt="plus" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjMenu;





// import React from 'react';
// import './style.css';
// import plus from './../../icons/Plus.svg'




// const ProjMenu = ({ projects, selectedProject, onProjectSelect }) => {
//   const handleProjectSelect = (project) => {
//     onProjectSelect(project);
//   };

//   if (!Array.isArray(projects)) {
//     return <div>No projects available.</div>;
//   }

//   return (
//     <div className="container">
//       <div className="bloc-tabs">
//       {projects.map((project) => (
//          <button
//          key={project.id}
//          onClick={() => handleProjectSelect(project)}
//           className={project.id === selectedProject?.id ? 'tabs active-tabs' : 'tabs'}
//         //  style={{
//         //    backgroundColor: project.id === selectedProject?.id ? 'lightblue' : 'white',
//         //  }}
//        >
//          {project.name}
//        </button>
//       ))}
//       <button className={"plus_proj"} ><img src={plus} alt="plus" /></button>
//       </div>
//     </div>
//   );
// };

// export default ProjMenu;

// //   return (
// //     <div className="container">
// //       <div className="bloc-tabs">
// //       {tabs.map((tab, index) => (
// //   <button
// //     key={tab.id}
// //     className={selectedTab === index ? 'tabs active-tabs' : 'tabs'}
// //     onClick={() => handleClick(index)}
// //   >
// //     {tab.title}
// //   </button>
// // ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjMenu;

 