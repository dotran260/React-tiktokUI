import { Link } from "react-router-dom";
import routes from '~/configs/routes'

// Tippy
import 'tippy.js/dist/tippy.css'; // optional
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSignOut, faCoins, faUser, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
// Elements
import Menu from '~/components/Wrapper/Menu/Menu';
import Button from '~/components/Button';
import Image from '../Images';
import { MessIcon, InboxIcon } from '~/components/Icons';
import Search from '~/components/Search';
// Classname cx
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
let cx = classNames.bind(styles);

function Header() {
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Ngôn ngữ',
                data: [
                    { type: 'language', code: 'en', title: 'English', },
                    { type: 'language', code: 'vn', title: 'Việt Nam', },
                    { type: 'language', code: 'ja', title: 'Japan' },
                    { type: 'language', code: 'en', title: 'Philipin', },
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
                <Link to={routes.home}>
                    <img className={cx('img-logo')} src={require('~/assets/images/tiktok-logo.webp')} alt="tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ?
                        // Đã đăng nhập
                        <>
                            <Button to='/' basic>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '12px ' }} />
                                Tải lên
                            </Button>
                            <Button to='/' basic style={{ border: 'none' }}>
                                <MessIcon />
                            </Button>
                            <Button to='/' basic style={{ border: 'none', position: 'relative' }}>
                                <span className={cx('notification')}>12</span>
                                <InboxIcon />
                            </Button>
                            <Menu
                                items={userItems ? userItems : menuItems}
                                onChange={handleMenuChange}
                                hideOnClick={false}
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