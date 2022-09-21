import { useState } from 'react';
import { Link } from "react-router-dom";
// Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faGear, faSignOut, faCoins, faUser, faCircleXmark, faSpinner, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
// Elements
import { Wrapper as PoperWrapper } from '~/components/Wrapper';
import Menu from '~/components/Wrapper/Menu/Menu';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Image from '../Images';
import { MessIcon, InboxIcon } from '~/components/Icons';
// Classname cx
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
let cx = classNames.bind(styles);
function Header() {
    const [searchResults] = useState([1]);
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Ngôn ngữ',
                data: [
                    { type: 'language', code: 'en', title: 'English', },
                    { type: 'language', code: 'vn', title: 'Việt Nam' },
                    { type: 'language', code: 'ja', title: 'Japan' },
                ],
            }
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Phản hồi và trợ giúp',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Phím tắt trên bàn phím'
        },
    ];
    const userItems = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@ddoo.td'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Xem phân tích',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings'
        },
        ...menuItems,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            seperate: true
        },
    ]
    const handleMenuChange = (item) => {
        console.log(item)
    }
    const currentUser = true
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img className={cx('img-logo')} src={require('~/assets/images/tiktok-logo.webp')} alt="tiktok" />
                </Link>

                <Tippy
                    visible={searchResults.length > 0}
                    interactive
                    render={attrs => (
                        <PoperWrapper>
                            <h4 className={cx('search-title')} style={{ marginLeft: '16px ' }}>Tài khoản</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PoperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" className={cx('search-input')} spellCheck={false} placeholder="Search and enter" />
                        <FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('icon-load')} icon={faSpinner} />
                        <button className={cx('search-btn')} >
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    {currentUser ?
                        // Đã đăng nhập
                        <>
                            <Button to='/' basic>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '12px ' }} />
                                Tải lên
                            </Button>
                            <MessIcon />
                            <InboxIcon />
                            <Menu
                                items={userItems ? userItems : menuItems}
                                onChange={handleMenuChange}
                            >
                                <Image className={cx('img-user')} src={require('~/assets/images/kimochi.png')} alt="tiktok" />
                            </Menu>
                        </>
                        :
                        // Chưa đăng nhập
                        <>
                            <Button to='/' basic>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '12px ' }} />
                                Tải lên
                            </Button>
                            <Button to='/' danger>Đăng nhập</Button>


                            <Menu
                                items={menuItems}
                                onChange={handleMenuChange}
                            >
                                <button className={cx('menu')}>
                                    <FontAwesomeIcon className={cx('icon-menu')} icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    }
                </div>

            </div>
        </header >
    );
}

export default Header;