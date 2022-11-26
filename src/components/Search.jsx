import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) => handleSearch(event)}
      />
    </>
  );
}

export default Search;
