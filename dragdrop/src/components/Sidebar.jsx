import './Sidebar.css';

const Sidebar = ({ onDrop }) => {
  const elements = ['text', 'image', 'button'];

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <div className="sidebar">
      <h3>Elements</h3>
      {elements.map((el) => (
        <div
          key={el}
          className="draggable-item"
          draggable
          onDragStart={(e) => handleDragStart(e, el)}
        >
          {el.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
