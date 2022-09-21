import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
let cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('infoAvatar')} src={'https://bigvn.info/wp-content/uploads/2019/03/kimochi.jpg'} alt={"avatar"} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Name</span>
                    <FontAwesomeIcon className={cx('infoCheck')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')} >Nickname</p>
            </div >
        </div >
    );
}

export default AccountItem;