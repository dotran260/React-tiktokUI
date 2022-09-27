import Header from '~/components/Layouts/HeaderOnly/HeaderOnly'
import Sidebar from '~/components/Sidebar/Sidebar'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
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

export default DefaultLayout;