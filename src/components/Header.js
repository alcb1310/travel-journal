
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(){
    return (
        <header className='app-header'>
            <h1 className='app-header__title'>my travel journal.</h1>
            <FontAwesomeIcon icon={faEarthAmericas} className="app-header__icon" />
        </header>
    )
}