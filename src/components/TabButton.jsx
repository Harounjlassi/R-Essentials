//alwaays we the children prop to pass the content between the opening and closing tags of a component
//in this case the content is the button label
//props.children is a special prop that contains the content between the opening and closing tags of a component
//we can use props.children to pass any type of content, including text, HTML, or other components
//its concenvient to use props starts with on for event handlers
export default function TabButton(props) {
//export default function TabButton(children, onSelect) { --- IGNORE --
    //
  
    //in normal js
    //document.querySelectorAll("button").addEventListener("click", ()=> {});
    return (
        //if we add () to the function name it will be called immediately when the component is rendered
        //we want to pass the function reference instead of calling it immediately
        //so we don't add () to the function name
        //we can also use an arrow function to pass arguments to the event handler
        //onClick={() => handleClick(arg1, arg2)}
        <li><button onClick={props.onSelect}>{props.children}</button></li>
    );
}
