import './css/Card-module.css'

export default function Card(props) {
   return (      
         <div className='box'>
            <img  src={props.image} alt="200px" />          
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <button className='buttonClose' onClick={props.onClose}>CLOSE</button>
         </div>
   );
}
