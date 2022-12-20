import './header.scss'
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = () => {
    return (
        <div className='header'>
            <HighlightIcon />
            <span className='title'>TodoList</span>
        </div>
    )
}

export default Header