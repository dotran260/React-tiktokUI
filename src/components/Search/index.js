import { useEffect, useRef, useState } from 'react';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Wrapper';
import AccountItem from '~/components/AccountItem';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// Classname cx
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks'
let cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef()
    const debounce = useDebounce(searchValue, 500);
    const baseURL = 'https://tiktok.fullstack.edu.vn/api/users/search'
    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }
        setLoading(true);
        axios.get(baseURL, {
            params: {
                q: debounce,
                type: 'less',
            }
        })
            .then(res => {
                setSearchResults(res.data.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })

    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleShowResult = () => {
        setShowResult(false);
    }
    const handleKeyDown = (e) => {
        // if (/^\s/.test(inputRef.current.value)) {
        //     return inputRef.current.value = '';
        // } //Cách 1
        const valueInput = e.target.value;
        if (!valueInput.startsWith(' ')) {
            setSearchValue(valueInput);
        }
    };

    return (
        <span>
            <Tippy
                visible={showResult && searchResults.length > 0 && searchValue !== ''}

                interactive
                onClickOutside={handleShowResult}
                render={attrs => (
                    <PoperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResults.map((data) => {
                            return <AccountItem key={data.id} data={data} />
                        })}
                    </PoperWrapper>
                )
                }
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
                        onInput={handleKeyDown}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading &&
                        <button onClick={handleClear}>
                            < FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                        </button>
                    }
                    {loading && <FontAwesomeIcon className={cx('icon-load')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy >
        </span>
    );
}

export default Search;