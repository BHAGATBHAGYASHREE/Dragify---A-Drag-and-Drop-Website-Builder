import Element from './Element';
import './Canvas.css';

const Canvas = ({ elements, setSelectedId, selectedId, updateElement, handleDrop }) => {
  const handleCanvasDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const canvasRect = e.currentTarget.getBoundingClientRect();
    const position = {
      x: e.clientX - canvasRect.left,
      y: e.clientY - canvasRect.top,
    };
    if (type) {
      handleDrop(type, position);
    }
  };

  return (
    <div
      className="canvas"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleCanvasDrop}
    >
      {elements.map((el) => (
        <Element
          key={el.id}
          element={el}
          isSelected={el.id === selectedId}
          setSelectedId={setSelectedId}
          updateElement={updateElement}
        />
      ))}
    </div>
  );
};

export default Canvas;
