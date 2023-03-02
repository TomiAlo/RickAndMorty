import Card from './Card';
import './css/Cards-module.css'


export default function Cards(props) {
   const { characters } = props;
   return (
      <div className='cards'>
         {characters.map((character)=>{
            return (<Card name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onCloe={character.onClose}/>)
         })}
      </div>
   );
}
