import React, { useState } from 'react';
import ProgressDIY from './ProgressDIYByFunctionComponent';

export default function Home() {
  const [value, setValue] = useState(10);
  return (
    <ProgressDIY
      value={value}
      onClick={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
