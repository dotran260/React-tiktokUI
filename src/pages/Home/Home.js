import './Home.module.scss'
// Classname cx
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
let cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1>Home pages</h1>
        </div>
    );
}

export default Home;