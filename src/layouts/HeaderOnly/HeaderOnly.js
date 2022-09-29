import Header from '~/components/Header/Header'
import './HeaderOnly.module.scss'
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import PropTypes from 'prop-types';

let cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div >
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node,
}
export default HeaderOnly;