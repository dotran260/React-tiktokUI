import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
let cx = classNames.bind(styles);

function Sidebar() {
    return (
        <h1 className={cx('sideBar')}>Sidebar </h1>
    );
}

export default Sidebar;