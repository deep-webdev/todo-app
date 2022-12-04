import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width : "100%"
    }
    return (
        <footer className='bg-dark text-light py-2 bd-footer' style={footerStyle}>
            <p className='text-center'>Copyright &copy; MytodosList.com</p>
        </footer>
    )
}
