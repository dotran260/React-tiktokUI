import { useEffect, useRef, useState } from 'react';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Wrapper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// Classname cx
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
let cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([1]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef()
    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleShowResult = () => {
        setShowResult(false);
    }
    useEffect(() => {
        setSearchResults([1, 2, 3])
    }, [])
    return (
        <Tippy
            visible={showResult && searchResults.length > 0}
            interactive
            onClickOutside={handleShowResult}
            render={attrs => (
                <PoperWrapper>
                    <h4 className={cx('search-title')}>Tài khoản</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PoperWrapper>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    type="text"
                    className={cx('search-input')}
                    spellCheck={false}
                    placeholder="Search and enter"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue &&
                    <button onClick={handleClear}>
                        < FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                    </button>
                }
                {/* <FontAwesomeIcon className={cx('icon-load')} icon={faSpinner} /> */}
                <button className={cx('search-btn')} >
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;