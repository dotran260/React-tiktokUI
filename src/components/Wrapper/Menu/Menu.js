import React, { useState } from 'react';
import { Wrapper as PoperWrapper } from '~/components/Wrapper';
import PropTypes from 'prop-types';
// Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// Classname cx
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
// import Button from '~/components/Button';
// FontAwesomeIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '~/components/Wrapper/Menu/Header';
import MenuItem from '~/components/Wrapper/Menu/MenuItem';
let cx = classNames.bind(styles);


function Menu({ children, items = [], onChange, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            const handleClick = () => {
                if (isParent) {
                    setHistory(prev => {
                        return [...prev, item.children];
                    })
                } else {
                    onChange(item)
                }
            }
            return <MenuItem key={index} data={item} onClick={handleClick} />
        })
    }

    return (

        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 200]}
            placement='top-end'
            onHide={() => { setHistory(history.slice(0, 1)) }}
            render={attrs => (
                <div className={cx('menu-item')} tabIndex='-1' {...attrs}>
                    <PoperWrapper className={cx('custom-menu')}>
                        {
                            history.length > 1 ?
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory(prev => prev.slice(0, prev.length - 1));
                                    }}
                                />
                                : React.Fragment
                        }
                        <div className={cx('menu-scroll')} >{renderItems()}</div>
                    </PoperWrapper >
                </div>
            )
            }
        >
            {children}
        </Tippy >
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,

}
export default Menu;