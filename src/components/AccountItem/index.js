import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '../Images';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
let cx = classNames.bind(styles);

function AccountItem({ data }) {

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images
                className={cx('infoAvatar')}
                src={data.avatar}
                alt={"avatar"}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span className={cx('fullName')}>{data.full_name}</span>
                    {!!data.tick && < FontAwesomeIcon className={cx('infoCheck')} icon={faCheckCircle} />}
                </p>
                <p className={cx('username')} >{data.nickname}</p>
            </div >
        </Link >
    );
}

export default AccountItem;