import React from 'react'

const Inputcom = ({ nombre, setNombre, password, setPassword }) => {
    
    return (
        <div className='labelColor'>
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Ingresa un texto"
                id="nombre"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                className="form-control mb-3"
                placeholder="Ingresa una contraseña"
                id="password"
                value={password}
                onChange={(e)=>{ setPassword(e.target.value)}}
            />
        </div>
    )
}

export default Inputcom