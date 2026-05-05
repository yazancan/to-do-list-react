import './save-item-button.style.css'

export function SaveItemButton ({ children, ...rest }) {
    return (
        <button {...rest} className='save-item' >
            {children}
        </button>
    )
}
