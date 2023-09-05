import React, { FC, useState } from 'react'
import { Button } from '../..'
import styles from './searchBar.module.scss'
import { useNavigate } from 'react-router-dom'
import { SearchImage } from '../../../assets'

export interface SearchBarProps {
  placeholder?: string
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/items?q=${search}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
      className={styles.searchBar}
    >
      <input placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} />
      <Button type="submit" color="secondary">
        <img src={SearchImage} />
      </Button>
    </form>
  )
}

SearchBar.defaultProps = {
  placeholder: '',
}
