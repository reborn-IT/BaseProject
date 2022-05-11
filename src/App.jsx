import React from 'react';
import {
  CommonRoundedButton, 
  FAQComponent, 
  ModalCloseButton, 
  RoundedInput, 
  SearchableDropDown
} from './components/BaseComponents'

function App() {
  return (
    <div className='w-[80vw] min-h-[90vh] rounded-md border m-auto py-7 px-7'>
        <div className="title text-6xl text-rebornit-primary font-semibold font-serif w-full text-center">
          rebornIT Design System
        </div>
        <CommonRoundedButton extraTailwindClasses="bg-rebornit-primary text-white">
          Login
        </CommonRoundedButton>

        <FAQComponent id={1} Question="Hey! Whats up?" Answer="Cool!"/>
        <ModalCloseButton />
        <RoundedInput placeholder='Enter your email' type='text' />
        <SearchableDropDown
          data={[
            {
              id: 1,
              title: "Item 1"
            },
            {
              id: 2,
              title: "Item 2"
            },
            {
              id: 3,
              title: "Item 3"
            },
          ]}
          createmode
          extraTailwind={
            {
              createButton: 'bg-rebornit-primary',
              item: 'hover:bg-rebornit-primary hover:text-white',
            }
          }
        />
    </div>
  );
}

export default App;
