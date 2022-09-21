import Button from '~/components/Button'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
let cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('item', {
        seperate: data.seperate
    })
    return (
        <Button className={classes} onClick={onClick} >
            {data.icon}
            <p style={{ marginLeft: "12px" }}>{data.title}</p>
        </Button >
    );
}

export default MenuItem;