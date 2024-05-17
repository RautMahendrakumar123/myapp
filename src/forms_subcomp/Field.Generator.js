export const FieldGenerator = (field, handleChange,handleFileChnage) => {
  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      );
    case "number":
      return (
        <input
          type="number"
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      );
    case "select":
      return (
        <select
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
        >
          {field.options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      );
    case "textarea":
      return (
        <textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      );
    case "radio":
      return (
        <div>
          {
            field.options.map((option, index) => (
              <div key={index}>
                <input id={`${field.name}-${option.value}`} name={field.name} value={option.value} type="radio" onChange={handleChange} />
                <label htmlFor={`${field.name}-${option.value}`}>{option.label}</label>
              </div>
            ))
          }
        </div>
      );
    case 'email':
      return (
        <input
          type="email"
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      );
    case "password":
      return (
        <input
        type="password"
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        onChange={handleChange}
      />
      ) 
    case "media":
      return (
        <input
        type="file"
        id={field.name}
        name={field.name}
        onChange={handleFileChnage}
        />
      )   
    default:
      return null;
  }
};
