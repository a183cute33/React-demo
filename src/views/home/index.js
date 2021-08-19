import React, { useState } from 'react';
import ProgressDIY from './ProgressDIYByFunctionComponent';
import Cheer from './Cheer';

export default function Home() {
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <ProgressDIY
        value={value}
        onClick={(e) => {
          setValue(e.target.value);
        }}
      />
      <Cheer
        value={score}
        onClick={(e) => {
          setScore(e.target.value);
        }}
      />
    </div>
  );
}
