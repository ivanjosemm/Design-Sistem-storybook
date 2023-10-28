

const ColorPalette = () => {
    return (
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color.value }}
          >
            {color.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default ColorPalette;


  const colors = [
    { name: 'Primary', value: '' },
    { name: '', value: '#ffffff' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Blue', value: 'rgb(127, 127, 255)' },
    { name: 'Blue', value: 'rgba(127, 127, 255, 0.527)' },

    { name: 'Secundary', value: '' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Green', value: 'rgb(123, 254, 123)' },
    { name: 'Green', value: 'rgba(123, 255, 123, 0.496)' },

    { name: 'Terciary', value: '' },
    { name: 'Black', value: '#000000' },
    { name: 'Black', value: 'rgb(135, 135, 135)' },
    { name: 'Black', value: 'rgba(135, 135, 135, 0.523)' },
   
    { name: 'Quaternary', value: '' },
    { name: 'Red', value: '#ff0000' }, 
  ];

 