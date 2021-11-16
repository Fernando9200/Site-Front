import React from 'react'

export default function UserHeader() {
    return (
        <div className="row header-user justify-content-center">
            <figure className="figure">
                <img src="https://i.ibb.co/qRQyJvM/Foto-perfil.jpg" 
                className="figure-img img-fluid rounded" alt="..." />
            </figure>
            <div className="row justify-content-center">
                <h1>Fernando Carretto</h1>
                <h10 className="row justify-content-center">Software Developer</h10>
            </div>
        </div>
    )
}
