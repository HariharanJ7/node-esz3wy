import react from 'react';
import { useState, Fragment } from 'react';

const printNumbers = () => {
  const [value, setValue] = useState();

  for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) setValue('amazon' + ' ');
    else if (i % 3 == 0) setValue('google' + ' ');
    else if (i % 5 == 0) setValue('facebook' + ' ');
    else setValue(i + ' ');
  }

  return (
    <Fragment>
      <span>{value}</span>
    </Fragment>
  );
};

export default printNumbers;
