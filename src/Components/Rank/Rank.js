import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`Sedra, your current entry count is...`}
      </div>
      <div className='white f1'>
        {'#5'}
      </div>
    </div>
  );
}

export default Rank;