import './ElementForm.css';
const ElementForm = ({ element, updateElement }) => {
  if (!element) {
    return (
      <div className="element-form">
        <h3>Select an element to edit</h3>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement(element.id, { [name]: value });
  };

  return (
    <div className="element-form">
      <h3>Edit {element.type}</h3>
      {element.type !== 'image' ? (
        <input
          type="text"
          name="content"
          value={element.content}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          name="content"
          value={element.content}
          onChange={handleChange}
          placeholder="Image URL"
        />
      )}
    </div>
  );
};

export default ElementForm;
