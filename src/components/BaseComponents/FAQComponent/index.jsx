/* eslint-disable max-len */
import React, { useState } from 'react';
import DownArrowIcon from '../../../assets/Icons/downArrow.svg';

function FAQComponent({ id, Question, Answer, extratailwind = {} }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className='flex flex-col'>
      <button
        type="button"
        className={`question-${id} flex items-center justify-between mx-auto mb-8 w-[90%] ${extratailwind?.questionContainer}`}
        onClick={() => setRevealed(!revealed)}
      >
        <h4 className={`text-md sm:text-xl font-semibold ${extratailwind?.question}`}>{Question}</h4>
        <img
          src={DownArrowIcon}
          alt="Down Arrow Icon"
          className={`transition-all duration-300 ease-in-out ${revealed ? 'rotate-180' : 'rotate-0'} w-7 ${extratailwind?.downArrow}`}
        />
      </button>
      <div
        className={`
          ans-${id} xl:px-10 mx-auto w-[90%] overflow-hidden transition-all duration-300 ease-in-out sm:ml-12 ${extratailwind?.answerContainer} ${revealed ? 'h-24 sm:h-8 mb-7' : 'h-0'}
        `}
      >
        <p className={`${extratailwind?.answer}`}>
          {Answer}
        </p>
      </div>
    </div>
  );
}

export default FAQComponent;
