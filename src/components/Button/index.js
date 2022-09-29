import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom'
let cx = classNames.bind(styles);

function Button({
    to,
    className,
    children,
    radius,
    danger,
    disabled,
    btnOutlinePrimary,
    basic,
    href,
    onClick,
    ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        danger, basic, btnOutlinePrimary, disabled, radius, [className]: className
    })
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    btnOutlinePrimary: PropTypes.string,
    href: PropTypes.string,
    radius: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    basic: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}
export default Button;