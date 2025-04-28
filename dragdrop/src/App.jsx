import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ElementForm from './components/ElementForm';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleDrop = (type, position) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'image' ? 'https://via.placeholder.com/150' : 'New ' + type,
      x: position.x,
      y: position.y,
      width: 200,
      height: 50,
    };
    setElements((prev) => [...prev, newElement]);
  };

  const updateElement = (id, newProps) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <div className="app">
      <Sidebar />
      <Canvas
        elements={elements}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
        updateElement={updateElement}
        handleDrop={handleDrop}
      />
      <ElementForm element={selectedElement} updateElement={updateElement} />
    </div>
  );
}

export default App;
