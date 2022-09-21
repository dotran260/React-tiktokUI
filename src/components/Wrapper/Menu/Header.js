// Classname cx
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);


function Header({ title, onBack }) {
    console.log(title)
    return (
        <div className={cx('wrapper-language')} onClick={onBack}>
            <button style={{ backgroundColor: 'transparent' }} >
                <FontAwesomeIcon className={cx('back-icon')} icon={faChevronLeft} />
            </button>
            <p className={cx('language-title')} >{title}</p>
        </div>
    );
}

export default Header;