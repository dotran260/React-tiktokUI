import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
import PropTypes from 'prop-types';

let cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    const props = {
        [className]: className
    }
    return (
        <div className={cx('wrapper', { ...props })} >
            {children}
        </div>
    );
}
Wrapper.propTypes = {
    className: PropTypes.string
}
export default Wrapper;