import './css/SearchBar-module.css'

export default function SearchBar(props) {
   return (
      <div className='SearchBar'>
         <input className='input' type='search' />
         <button className='buttonSearch' onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
