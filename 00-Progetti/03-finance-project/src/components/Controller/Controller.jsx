import './Controller.css'
export default function Controller({children, ...rest}) {
    return <div {...rest}>{children}</div>
}