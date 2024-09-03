import React from 'react'

const Container = ({colorName,setColorName, hexName, setHexName, changeTextColor, textColor, setTextColor, colors}) => {
    const handleInputChange = (e) => {
        const newColorName = e.target.value;
        setColorName(newColorName);
        const colorHex = colors[newColorName.toLowerCase()] || '';
        setHexName(colorHex);
      };  

  return(
    <div className='container'>
        <div 
            className='cont'
            style={{color:textColor, backgroundColor: colorName}}
        >
            {colorName}
            <br />
            {hexName}
        </div>
        <input 
            type="text" 
            name="color" 
            id="color" 
            placeholder='Enter Color'
            value={colorName}
            onChange={handleInputChange}
            
        />
        <button 
            class="pushable" 
            onClick={changeTextColor}
        >
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">
                Toggle Text Color
            </span>
        </button>
    </div>
  )
}

export default Container