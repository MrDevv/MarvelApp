import { useState } from "react"
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { navLinkState } from "../utils/helpers/navLinkState";

export const Search = () => {
    const [characterValue, setcharacterValue] = useState('')

    navLinkState('#link_personajes')
    const navigate = useNavigate();

    const onChange = (e) => {        
        const {value} = e.target        
        setcharacterValue(value)
    }

    const onSubmit = async(e) => {
        e.preventDefault();        
        if (characterValue.length === 0) return
        navigate(`/${characterValue}`)
        setcharacterValue('')
    }

  return (
    <form onSubmit={onSubmit} className='search'>
        <input type="text" onChange={onChange} value={characterValue} placeholder='Ingrese un nombre' />
        {/* <Link type="submit" to={`/${characterValue}`}>Buscar</Link> */}
        <button type="submit">Buscar</button>
    </form>
  )
}
