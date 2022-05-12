import React from "react";
import {
  StandartButton,
  FAQComponent,
  ModalCloseButton,
  RoundedInput,
  SearchableDropDown,
  IconButton,
  CircularAvatar,
  StandardAvatar,
  DotIndicatedAvatar,
  AvatarProfile,
} from "./components/BaseComponents";
import { Bootstrap } from "./components/icons";

function App() {
  return (
    <div className="w-[80vw] min-h-[90vh] rounded-md border m-auto py-7 px-7">
      <div className="title text-6xl text-rebornit-primary font-semibold font-serif w-full text-center">
        rebornIT Design System
      </div>
      <StandartButton extraTailwindClasses="rounded bg-rebornit-primary text-white">
        Login
      </StandartButton>

      <FAQComponent id={1} Question="Hey! Whats up?" Answer="Cool!" />
      <ModalCloseButton />
      <RoundedInput placeholder="Enter your email" type="text" />
      <SearchableDropDown
        data={[
          {
            id: 1,
            title: "Dog",
          },
          {
            id: 2,
            title: "Cat",
          },
          {
            id: 3,
            title: "Parrot",
          },
        ]}
        extraTailwind={{
          createButton: "bg-rebornit-primary text-white",
          item: "hover:bg-rebornit-primary hover:text-white",
        }}
      />
      <IconButton
        ClickHandler={() => alert("Hey")}
        tailwindCss="rounded-full bg-rebornit-primary text-white hover:bg-opacity-90 transition-all duration-300 active:scale-95"
      >
        <Bootstrap tailwindcss="mr-2" />
        Sample
      </IconButton>
      <IconButton tailwindCss="rounded-md mt-4 bg-rebornit-primary text-white hover:bg-opacity-90 transition-all duration-300 active:scale-95">
        <Bootstrap tailwindcss="mr-2" />
        Sample
      </IconButton>
      <div className="flex flex-wrap space-x-8 mt-8">
        <CircularAvatar
          tailwindCss="cursor-default transform transition-all duration-300 hover:scale-105"
          src="https://images.unsplash.com/photo-1652207168425-33b5bb4c14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Kumesh"
        />
        <CircularAvatar
          tailwindCss="ring-blue-600 p-1 ring-2 cursor-default transform transition-all duration-300 hover:scale-105"
          src="https://images.unsplash.com/photo-1652207168425-33b5bb4c14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Kumesh"
        />
        <StandardAvatar
          tailwindCss="cursor-pointer transform transition-all duration-300 hover:scale-105"
          src="https://images.unsplash.com/photo-1652207168425-33b5bb4c14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Kumesh"
        />
        <DotIndicatedAvatar
          src="https://images.unsplash.com/photo-1652207168425-33b5bb4c14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Kumesh"
        />
      </div>
      <AvatarProfile
        tailwindCss={{
          container: "mt-8",
          image: "w-14 h-14",
        }}
        name="Tharindu Kumesh"
        description="Joined in 2019"
        src="https://images.unsplash.com/photo-1652207168425-33b5bb4c14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Kumesh"
      />
    </div>
  );
}

export default App;
