import Header from '~/layouts/HeaderOnly/HeaderOnly'
import Sidebar from '~/components/Sidebar/Sidebar'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
let cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </>

    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;