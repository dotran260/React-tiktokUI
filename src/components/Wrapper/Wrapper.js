import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
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

export default Wrapper;