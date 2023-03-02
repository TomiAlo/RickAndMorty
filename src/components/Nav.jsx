import SearchBar from './SearchBar';
import './css/Nav-module.css'

export default function Nav(props){
    return (
        <div className='Nav'>
            <SearchBar
                onSearch={(characterID) => window.alert(characterID)}
            />
        </div>    
    )
}