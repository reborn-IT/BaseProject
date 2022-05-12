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

### 01. Standard Button

    <StandartButton extraTailwindClasses="rounded bg-rebornit-primary text-white">
          Login
    </StandartButton>

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

### 05. Searchable Drop Down

    <SearchableDropDown
          data={[
            {
              id: 1,
              title: "Dog"
            },
            {
              id: 2,
              title: "Cat"
            },
            {
              id: 3,
              title: "Parrot"
            },
          ]}
          extraTailwind={
            {
              createButton: 'bg-rebornit-primary text-white',
              item: 'hover:bg-rebornit-primary hover:text-white',
            }
          }
        />

  Options

    + data: object { id: number, title: string }
    + placeholder: string
    + createmode: boolean
    + extraTailwind: string

### 06. Icon Button

    <IconButton ClickHandler={() => alert('Hey')} tailwindCss="rounded-full     bg-rebornit-primary text-white hover:bg-opacity-90 transition-all duration-300 active:scale-95">
          <Bootstrap tailwindcss="mr-2" />
            Sample
        </IconButton>

  Options

    + tailwindCss: string,
    + ClickHandler: () => {},
    + children: JSX.children