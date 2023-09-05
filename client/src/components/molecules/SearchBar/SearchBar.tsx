import React, { FC, useState } from 'react'
import { Button } from '../..'
import styles from './searchBar.module.scss'
import { Search } from '../../../assets'
import { useNavigate } from 'react-router-dom'

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
        <Search width={18} height={18} />
      </Button>
    </form>
  )
}

SearchBar.defaultProps = {
  placeholder: '',
}
