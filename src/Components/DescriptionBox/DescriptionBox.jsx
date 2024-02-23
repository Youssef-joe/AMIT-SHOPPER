import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box' >
        <div className="descriptionbox-navigator">
            <div className='discriptionbox-navbox' >Description</div>
            <div className='discriptionbox-navbox fade' >Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor, 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit corporis, accusamus suscipit eaque tenetur nesciunt illum, facilis dignissimos aliquid modi commodi aspernatur eos ab eum ipsum sint dolor pariatur. Sapiente.
                sit amet consectetur adipisicing elit. Earum reiciendis nihil sit beatae corrupti inventore, excepturi, quod voluptatibus non, reprehenderit eos provident a cupiditate molestiae laboriosam repellat dolore aperiam nobis.

            </p>
        </div>
    </div>
  )
}

export default DescriptionBox