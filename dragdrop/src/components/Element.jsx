import './Element.css';
const Element = ({ element, isSelected, setSelectedId, updateElement }) => {
    if (!element) {
      return <div>Invalid element</div>;  // Safely return a fallback message
    }
  
    const handleClick = () => {
      setSelectedId(element.id);
    };
  
    return (
      <div
        className="element"
        style={{
          position: 'absolute',
          left: `${element.x}px`,
          top: `${element.y}px`,
          width: `${element.width}px`,
          height: `${element.height}px`,
          backgroundColor: isSelected ? 'lightblue' : 'transparent',
          border: isSelected ? '2px solid blue' : 'none',
        }}
        onClick={handleClick}
      >
        {element.type === 'text' ? (
          <p>{element.content}</p>
        ) : element.type === 'image' ? (
          <img src={element.content} alt="element" style={{ width: '100%', height: '100%' }} />
        ) : (
          <button>{element.content}</button>
        )}
      </div>
    );
  };
  
  export default Element;
  