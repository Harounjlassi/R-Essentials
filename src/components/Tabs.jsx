export default function Tabs({ children, buttons, ButtonsContainer='menu' }) {
//we create a cosnt wich can be used as a const component
//we passed a component identifier as a prop
  //const ButtonsContainer=buttonsContainer;
  return (
    <>
      <ButtonsContainer>
     {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
