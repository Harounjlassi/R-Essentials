//props 
//function CoreConcept(props) {
//OR
export default function CoreConcept({title, description, image, alt}) {
  return (
    
     /* <li>
        <img src={props.image} alt={props.alt} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>*/

      //OR
        <li>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
 
  );
}