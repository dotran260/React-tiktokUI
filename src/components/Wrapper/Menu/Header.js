// Classname cx
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

let cx = classNames.bind(styles);


function Header({ title, onBack }) {
    return (
        <div className={cx('wrapper-language')} onClick={onBack}>
            <button style={{ backgroundColor: 'transparent' }} >
                <FontAwesomeIcon className={cx('back-icon')} icon={faChevronLeft} />
            </button>
            <p className={cx('language-title')} >{title}</p>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}
export default Header;