# rebornIT Design System

## Components Structure

    - components
    - BaseComponents
      - CommonRoundedButton
      - FAQComponent
      - ModalCloseButton
      - RoundedInput
      - SearchableDropDown
      - index.js (Default Exporter)


## Usage

  How to import?

    import {
      CommonRoundedButton, 
      FAQComponent, 
      ModalCloseButton, 
      RoundedInput
    } from './components/BaseComponents'

### 01. Common Rounded Button

  <CommonRoundedButton extraTailwindClasses="bg-rebornit-primary text-white">
          Login
  </CommonRoundedButton>

  Options

    + children: JSX - Children
    + styles: object - CSS inline styles
    + extraTailwindClasses: string - extra tailwind utility classes
    + clickHandler: void() - OnClickEvent

### 02. FAQ 

  <FAQComponent id={1} Question="Hey! Whats up?" Answer="Cool!"/>

  Options

    + id: number
    + Question: string - Question
    + Answer: string - Answer
    + extratailwind: object - change various styles


### 03. Modal Close Button

  <ModalCloseButton ClickHandler={() => closeModal()} />

  options

    + ClickHandler: void()


### 04. Rounded Input Field

  <RoundedInput placeholder='Enter your email' type='text' />

  Options

    + type: text | number
    + placeholder: string 
    + onChange: void()
    + extraTailwindClasses: string